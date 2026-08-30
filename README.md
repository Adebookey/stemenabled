# STEMEnabled Website

Premium, responsive Next.js website for STEMEnabled, a Lagos-based STEM transformation partner for schools.

## Stack
- Next.js 15 App Router
- TypeScript
- React 19
- Plain CSS
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

For phone testing on the same Wi-Fi:

```bash
npm run dev -- --hostname 0.0.0.0
```

Then open `http://YOUR-COMPUTER-IP:3000` on the phone.

## Main pages

- `/` — concise conversion-focused homepage
- `/about` — STEMEnabled company profile and documented experience behind the company
- `/stem-lab` — STEM laboratory setup
- `/teacher-training` — differentiated teacher training programmes
- `/programmes` — student programmes classified as Foundation, Intermediate and Advanced
- `/consulting` — differentiated consulting areas
- `/assessment` — STEM Needs Assessment lead form
- `/contact` — general enquiry form
- `/insights` — blog/insights listing

## Images — how to replace the placeholders

Most page photography is currently loaded from Unsplash as temporary placeholder imagery. Replace it before production with photographs you own, have permission to use, or have properly licensed.

### Option A — easiest: use local images

1. Create or open:

```text
public/images/
```

2. Add your images, for example:

```text
public/images/stem-lab.jpg
public/images/robotics.jpg
public/images/teacher-training.jpg
public/images/3d-design.jpg
public/images/ai.jpg
```

3. Open:

```text
lib/content.ts
```

4. Find the `images` object near the top and change the URLs to local paths:

```ts
export const images = {
  hero: "/images/stem-lab.jpg",
  lab: "/images/stem-lab.jpg",
  robotics: "/images/robotics.jpg",
  teacher: "/images/teacher-training.jpg",
  maker: "/images/3d-design.jpg",
  design: "/images/3d-design.jpg",
  ai: "/images/ai.jpg",
};
```

5. Save the files and restart `npm run dev` if necessary.

### Which images to use

**Hero:** wide photograph of a credible STEM laboratory with students building a project.

**STEM Lab:** laboratory/workbench photograph showing electronics, Raspberry Pi, Arduino, robotics or tools.

**Robotics:** students working on a robot or presenting a working project.

**Teacher Training:** educators collaborating around technology or a practical STEM workshop.

**3D Design/Maker:** students or teachers modelling, prototyping or working with digital fabrication.

**AI:** a credible classroom/project image involving computer vision, data or AI — avoid futuristic stock imagery that looks unrealistic.

Prefer authentic Nigerian/African school photography where possible.

### Image recommendations

Use landscape images around 1200–1600px wide. Compress large photos to WebP or high-quality JPG before adding them to `public/images/`.

Do not use images that show impossible hardware configurations or equipment that does not match the learning activity.

## Logo

The supplied STEMEnabled logo is stored at:

```text
public/images/logo.png
```

To replace it, keep the filename `logo.png` or update the path in `components/Header.tsx`.

## Contact form

`app/api/contact/route.ts` currently validates the enquiry and logs it to the server. It is intentionally not presented as a production email/CRM system.

Before launch, connect this endpoint to an email/CRM service such as Resend, Formspree, Supabase, Airtable or another backend.

## Content

Most reusable content is in:

```text
lib/content.ts
```

This includes services, teacher training programmes, student programmes, consulting areas, company experience, FAQs, insights and image URLs.

## Important credibility rule

The About page deliberately distinguishes STEMEnabled's services from the founder's documented professional experience. Organisations and institutions are not automatically presented as STEMEnabled clients or current partners.

Only add verified client logos, testimonials, awards, partnerships, project results or statistics.

## Production checklist

1. Replace the temporary Unsplash images with owned/licensed images.
2. Replace `https://stemenabled.ng` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with the final domain.
3. Connect the contact API to email/CRM.
4. Create official STEMEnabled social accounts and add their URLs.
5. Add real testimonials with permission.
6. Add verified project/case-study information.
7. Replace the placeholder School STEM Readiness Checklist with a real PDF and gated delivery flow.
8. Add analytics and Search Console.
9. Run `npm run build` before deployment.

## Deploy

The project can be deployed to a Next.js-compatible host such as Vercel after the production checklist is completed.
