#  AF DNS Look-Up

This tool was created for practice purposes. I love testing new tools since AWS has been around me.

---

#  Tech Stack

## Next.js (v15)
App framework (routing, SSR, API routes, bundling with Turbopack)

## React (v19)
UI layer (components, state, rendering)

## TypeScript
Static typing for safety and scalability

## Shadcn UI
Component system built on Radix + Tailwind (Button, Input, Card...)

## Tailwind CSS (v4)
Styling system (utility classes everywhere)

## Radix UI
Low-level accessible UI primitives (used under shadcn)

## Class Variance Authority
Variant-based styling for components (e.g. button sizes, styles)

## clsx + tailwind-merge
Clean conditional class handling + merging Tailwind classes

## tw-animate-css
Prebuilt Tailwind-friendly animations

---

#  UX/UI Enhancements

## next-themes
Dark/light mode switching

## Sonner
Toast notifications (`toast.error(...)`)

## @phosphor-icons/react
Icon library (modern SVG SVG icons)

---

#  Dev Experience

## ESLint (eslint, eslint-config-next)
Code linting + Next.js rules

## Prettier + prettier-plugin-tailwindcss
Auto formatting + automatic Tailwind class sorting

## TypeScript compiler (tsc)
Type checking (`typecheck` script)

## PostCSS + Tailwind plugin
CSS processing pipeline

---

#  Build / Runtime

## Turbopack (`next dev --turbopack`)
Fast dev bundler (Next.js Rust-based bundler)

## Node.js runtime (implicit)

---

#  In simple terms...

I built a modern full-stack app with one functionality... but I will keep upgrading it.

---

#  Learning Resources

Feel free to ask for guidance if you're thinking about building something with AWS Lambda.

---

#  What I learned

- AWS Lambda function principles and usage  
- AWS IAM use control for resource access and management  
- AWS API Gateway for secure access for the application  
- AWS CLI usage for creating and manipulating resources  

---

#  What I revised

- Next.js API routes  
- Route handlers  

---

# Try It Yourself
Live at: https://dns.arthurreira.dev
Source: https://github.com/arthurreira/af-dns-lookup

Enter any domain (e.g. google.com) and select a record type to see the DNS results.