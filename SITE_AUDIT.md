# Boldcraft site map and file audit

Source: [boldcraft.framer.website](https://boldcraft.framer.website/)  
Reviewed: 2026-09-24

## Scope

This workspace contains only `readme.md` (`Hello, Welcome!`) and this audit. The Framer editor project and its original component/source files are not present locally or exposed by the public website. The tree below maps the **public routes**, not an exported Framer source tree. The asset inventory describes files observed by the browser while visiting those routes.

## Public page tree

```text
boldcraft.framer.website/
├── /                         Home
├── /works                    Work index
│   ├── /auresto              Packaging and branding case study
│   ├── /cosmira              Skincare branding case study
│   ├── /noila                Marketing agency website case study
│   ├── /best-practices       ASTRA architecture case study (mismatched slug)
│   └── /samuer               Restaurant branding and website case study
├── /studio                   About, goals, team, FAQ
├── /blogs                    Blog index
│   ├── /behind-every-great-product-is-a-thoughtful-design-process
│   ├── /why-businesses-partner-with-a-digital-design-studio
│   ├── /why-great-design-is-more-than-just-aesthetics
│   └── /the-value-of-human-centered-design-in-the-digital-age
├── /contact                  Email and inquiry form
├── /legal
│   ├── /privacy-policy
│   └── /terms-of-service
└── /404                      Designed error page
```

**Total:** 17 observed public routes: 5 top-level pages, 5 work details, 4 articles, 2 legal pages, and a 404 page. All 17 were opened and inspected. The header and footer are shared across the site. The footer also contains a newsletter email field, social links, legal links, and a Framer template link.

## Page-by-page analysis

| Page | Main content | Notes |
| --- | --- | --- |
| [Home](https://boldcraft.framer.website/) | Hero, studio introduction, brand logos, five selected projects, four services, pricing, testimonial, FAQ, two featured posts | Pricing shows $2K/month and custom projects from $5K. Both plan buttons display “Start Monthly Plan.” |
| [Works](https://boldcraft.framer.website/works) | Grid of Auresto, Cosmira, Noila, Astra, Samuer | Five cards link to individual case studies. |
| [Auresto](https://boldcraft.framer.website/works/auresto) | Wellness packaging and branding; client, duration, year, services; overview/challenge/solution/conclusion; related work | Client Auresto Wellness, 6 weeks, 2026. |
| [Cosmira](https://boldcraft.framer.website/works/cosmira) | Cosmic skincare brand; same case-study structure | Client Nova Retail Co., 3 weeks, 2026. |
| [Noila](https://boldcraft.framer.website/works/noila) | Marketing agency website; same case-study structure | Client John Jacob, 4 weeks, 2026. Conclusion unexpectedly names “ClickAlchemy.” |
| [Astra](https://boldcraft.framer.website/works/best-practices) | Architecture identity and website; same case-study structure | Client AstraForma Architects, 11 weeks, 2026. The URL does not match the project name. |
| [Samuer](https://boldcraft.framer.website/works/samuer) | Restaurant identity and website; same case-study structure | Client Merlyn Joe, 5 weeks, 2026. |
| [Studio](https://boldcraft.framer.website/studio) | Intro, stats, client logos, mission/vision/brand promise, team, FAQ | Six visible team cards all say “James John — Lead UX Designer.” |
| [Blogs](https://boldcraft.framer.website/blogs) | Four dated article cards | The intro repeats the Works page description instead of describing articles. |
| [Design process article](https://boldcraft.framer.website/blogs/behind-every-great-product-is-a-thoughtful-design-process) | Discovery, research, iteration; author Lena Ortiz | Dated June 4, 2026. |
| [Design studio article](https://boldcraft.framer.website/blogs/why-businesses-partner-with-a-digital-design-studio) | Strategy, cross-disciplinary work, scalability; author Sana Kapoor | Dated June 10, 2026. |
| [Great design article](https://boldcraft.framer.website/blogs/why-great-design-is-more-than-just-aesthetics) | Business problems, user experience, consistency; author Maya Chen | Dated June 1, 2026. |
| [Human-centered article](https://boldcraft.framer.website/blogs/the-value-of-human-centered-design-in-the-digital-age) | Repeats the design-studio article's description and three body sections; author Theo Marsh | Dated June 20, 2026. Article content needs a distinct rewrite. |
| [Contact](https://boldcraft.framer.website/contact) | Contact copy, displayed email, inquiry form | Fields: name, work email, service selection, optional message. See link issues below. |
| [Privacy](https://boldcraft.framer.website/legal/privacy-policy) | Eight sections covering collection, use, cookies, sharing, retention, security, changes | Last updated Dec 15, 2025. |
| [Terms](https://boldcraft.framer.website/legal/terms-of-service) | Seven sections covering services, IP, user conduct, links, liability, changes | Last updated Dec 15, 2025. |
| [404](https://boldcraft.framer.website/404) | Error message and Back to Home link | Custom page exists and is linked in footer. |

## Public file and asset structure

Across the rendered pages, the browser observed **60 distinct image URLs, 7 font URLs, 51 JavaScript URLs, and 4 other resource URLs**. No standalone stylesheet or video URL appeared in this inventory. These counts describe browser-visible resources; they are not a count of editable Framer files, and query-string variants can represent the same underlying image. The pages also contain many inline SVGs, especially on the home page.

```text
Public resources (observed, hosted remotely)
├── Framer runtime / page JavaScript    51 URLs (.mjs and related scripts)
├── Fonts                               7 URLs (.woff2)
├── Images                              60 URLs (.png, .jpg, .webp, .svg)
│   ├── Hero and decorative imagery
│   ├── Project covers and case-study galleries
│   ├── Blog covers and article imagery
│   ├── Client logos and team portraits
│   └── Arrow icons
├── Other resources                     4 URLs
└── Inline SVG                          embedded in page markup
```

The site is a Framer template published on a Framer subdomain. Script names observed include Framer, React, Motion, `RollingTextHover_Prod`, and `ScrollColorText`. The public website does not reveal the original editor layer/component hierarchy or source asset filenames beyond served resource URLs.

## Findings to fix before using the template as a production site

1. **Contact links point to the wrong destinations.** The visible `hello@boldcraft.com` link uses `mailto:support@framer.com`. The “Terms Service” and “Privacy Policy” links beside the contact form both lead to the home page, while proper legal pages exist.
2. **Template content remains.** Browser titles on detail pages end in “My Framer Site”; all pages share the same generic agency-template meta description. The footer credits Faris and shows a “Get Template FREE” badge. Replace these only if this site is being customized for a real brand.
3. **Case-study and article copy has mismatches.** Noila's conclusion mentions “ClickAlchemy”; the human-centered design article duplicates the design-studio article; Astra is filed under `/works/best-practices`.
4. **Repeated placeholders weaken credibility.** The Studio page shows six team cards with the same name and role. The blog index intro describes projects. The home page's custom-project button says “Start Monthly Plan.”
5. **Copy needs proofreading.** Repeated headings include “Challange” and “Conclution”; the home page has “Seleceted Projects” and “Logo Designuct desgn.” The footer says “Copyrights ©2025. All right reserved” while project/article dates are in 2026.
6. **External social destinations are generic.** LinkedIn, Instagram, and Facebook link to those platforms' home pages. X points to the template designer's account.

## Suggested local structure if rebuilding the site in code

This is a proposed implementation tree; these files do **not** currently exist in the workspace.

```text
src/
├── app/
│   ├── page                  Home
│   ├── works/
│   │   ├── page              Work index
│   │   └── [slug]/page       Case study template
│   ├── studio/page
│   ├── blogs/
│   │   ├── page              Blog index
│   │   └── [slug]/page       Article template
│   ├── contact/page
│   ├── legal/
│   │   ├── privacy-policy/page
│   │   └── terms-of-service/page
│   └── not-found            404
├── components/
│   ├── Header, Footer, ProjectCard, ArticleCard
│   ├── CaseStudyLayout, ArticleLayout, FAQ, ContactForm
│   └── SectionHeading, Button
├── content/
│   ├── projects             Five case-study records
│   ├── articles             Four article records
│   ├── services
│   ├── team
│   └── site-settings        Navigation, SEO, contact, socials
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
```

Keeping repeated case-study and article content in structured records would make the card grids, related-content sections, URLs, and metadata consistent.
