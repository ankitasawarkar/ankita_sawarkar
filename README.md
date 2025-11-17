# Ankita Sawarkar - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS, showcasing my professional experience, education, and projects.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Fast Performance**: Built with Next.js for optimal performance and SEO
- **Dynamic Content**: Portfolio data managed through JSON for easy updates
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **Interactive Components**: Smooth page transitions, hover effects, and animated elements

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Geist Sans, Geist Mono)
- **Icons**: Font Awesome
- **Deployment**: Vercel (recommended)

## 📂 Project Structure

```
ankita_sawarkar/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/         # Navigation component
│   │   │   ├── footer/         # Footer component
│   │   │   ├── profile/        # Hero/Profile section
│   │   │   ├── cards/          # Reusable card components
│   │   │   ├── button/         # Button components
│   │   │   └── media/          # Media components (Skills, etc.)
│   │   ├── about/              # About page
│   │   ├── education/          # Education page
│   │   ├── experience/         # Experience page
│   │   ├── projects/           # Projects page
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── data/
│       └── portfolioData.json  # Portfolio content data
├── public/
│   └── assets/                 # Images and static files
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/ankitasawarkar/ankita_sawarkar.git
cd ankita_sawarkar
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Updating Portfolio Content

All portfolio content is managed through `src/data/portfolioData.json`. Simply update this file to:
- Change personal information
- Add/remove projects
- Update work experience
- Modify education details
- Add certifications

## 🎨 Customization

### Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-accent: #ec4899;
  /* ... */
}
```

### Fonts
Modify font imports in `src/app/layout.tsx`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Platforms
The site can also be deployed to:
- Netlify
- AWS Amplify
- GitHub Pages (with static export)

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Ankita Sawarkar**
- LinkedIn: [linkedin.com/in/ankitasawarkar](https://www.linkedin.com/in/ankitasawarkar/)
- GitHub: [github.com/ankitasawarkar](https://github.com/ankitasawarkar)

---

Built with ❤️ using Next.js and React
