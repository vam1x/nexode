import React, { useEffect, useRef } from 'react';

export default function HeroRippleShader({ fallbackImage }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl = canvas.getContext('webgl2');
    let isWebGL2 = true;
    if (!gl) {
      gl = canvas.getContext('webgl');
      isWebGL2 = false;
    }
    if (!gl) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const vsSource = isWebGL2 ? `#version 300 es
      in vec2 a_position;
      out vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        v_uv.y = 1.0 - v_uv.y;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    ` : `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        v_uv.y = 1.0 - v_uv.y;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = isWebGL2 ? `#version 300 es
      precision highp float;
      in vec2 v_uv;
      out vec4 fragColor;
      uniform sampler2D u_texture;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_rippleStrength;

      void main() {
        vec2 uv = v_uv;
        vec2 m = u_mouse;
        float dist = distance(uv, m);
        
        // Fluid wave ripple from mouse position and gentle ambient wave
        float wave = sin(dist * 28.0 - u_time * 3.5) * exp(-dist * 3.5) * u_rippleStrength;
        float ambient = sin(uv.x * 4.0 + u_time * 0.5) * cos(uv.y * 4.0 + u_time * 0.6) * 0.003;
        
        vec2 offset = normalize(uv - m + 0.0001) * wave * 0.04 + vec2(ambient);
        
        // Subtle chromatic dispersion
        vec4 r = texture(u_texture, uv + offset * 0.96);
        vec4 g = texture(u_texture, uv + offset);
        vec4 b = texture(u_texture, uv + offset * 1.04);
        
        fragColor = vec4(r.r, g.g, b.b, 1.0);
      }
    ` : `
      precision highp float;
      varying vec2 v_uv;
      uniform sampler2D u_texture;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_rippleStrength;

      void main() {
        vec2 uv = v_uv;
        vec2 m = u_mouse;
        float dist = distance(uv, m);
        
        float wave = sin(dist * 28.0 - u_time * 3.5) * exp(-dist * 3.5) * u_rippleStrength;
        float ambient = sin(uv.x * 4.0 + u_time * 0.5) * cos(uv.y * 4.0 + u_time * 0.6) * 0.003;
        
        vec2 offset = normalize(uv - m + 0.0001) * wave * 0.04 + vec2(ambient);
        
        vec4 r = texture2D(u_texture, uv + offset * 0.96);
        vec4 g = texture2D(u_texture, uv + offset);
        vec4 b = texture2D(u_texture, uv + offset * 1.04);
        
        gl_FragColor = vec4(r.r, g.g, b.b, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1
      ]),
      gl.STATIC_DRAW
    );

    const aPosLoc = gl.getAttribLocation(program, 'a_position');
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');
    const uRippleLoc = gl.getUniformLocation(program, 'u_rippleStrength');
    const uTextureLoc = gl.getUniformLocation(program, 'u_texture');

    // Create and load texture
    const texture = gl.createTexture();
    const image = new Image();
    image.crossOrigin = 'anonymous';
    let textureLoaded = false;

    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      textureLoaded = true;
    };
    image.src = fallbackImage;

    let targetMouse = { x: 0.5, y: 0.5 };
    let currentMouse = { x: 0.5, y: 0.5 };
    let targetRipple = 0.2;
    let currentRipple = 0.2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = (e.clientX - rect.left) / rect.width;
      targetMouse.y = (e.clientY - rect.top) / rect.height;
      targetRipple = 1.0;
    };

    const handleMouseDown = () => {
      targetRipple = 2.0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.floor(rect.width * dpr);
      height = Math.floor(rect.height * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let startTime = performance.now();

    const render = () => {
      const now = performance.now();
      const time = (now - startTime) * 0.001;

      // Smooth lerp
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08;
      targetRipple *= 0.985;
      if (targetRipple < 0.25) targetRipple = 0.25;
      currentRipple += (targetRipple - currentRipple) * 0.1;

      if (textureLoaded) {
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
        gl.enableVertexAttribArray(aPosLoc);
        gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

        gl.uniform1f(uTimeLoc, time);
        gl.uniform2f(uResLoc, width, height);
        gl.uniform2f(uMouseLoc, currentMouse.x, currentMouse.y);
        gl.uniform1f(uRippleLoc, currentRipple);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(uTextureLoc, 0);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(posBuffer);
      gl.deleteTexture(texture);
    };
  }, [fallbackImage]);

  return (
    <div className="shader-wrapper">
      <canvas ref={canvasRef} className="shader-canvas" />
      <style>{`
        .shader-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .shader-canvas {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
