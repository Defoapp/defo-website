# Defo Website

A React-based website for **Defo** — a subscription-based short video streaming service that allows members to watch knowledgeable videos and tutorials across diverse topics like Adobe tools, UI/UX design, photo & video editing, cooking, sports, languages, and more.

## Tech Stack

- **React 18** — Core UI library
- **React Router DOM** — Client-side routing
- **Tailwind CSS** — Utility-first CSS framework
- **Bootstrap** — Supplementary UI components
- **Framer Motion** — Animation library
- **AOS (Animate on Scroll)** — Scroll-triggered animations
- **React Hook Form** — Form state management
- **React Icons / Heroicons** — Icon libraries
- **React Intersection Observer** — Scroll-aware rendering
- **React Scroll / React Scroll Trigger** — Smooth scrolling and scroll events
- **Firebase Hosting** — Deployment and hosting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/defoapp/defo-website.git
cd defo-website
npm install
```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes. Your app is ready to be deployed.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project, and copy all the configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready.

## Project Structure

```
src/
├── component/          # Reusable and page-level components
│   ├── Navbar/         # Navigation bar components
│   ├── footer/         # Footer component
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   ├── OurStory.js     # Our Story page
│   ├── OurCreators.js  # Our Creators page
│   ├── OurTeams.js     # Our Teams page
│   ├── Careers.js      # Careers page
│   ├── Faq.js          # FAQ page
│   ├── ReportContent.js # Report Content page
│   ├── Topics.js       # Topics page
│   ├── Privacy.js      # Privacy Policy page
│   └── Term.js         # Terms page
├── constants/          # Static data and configuration
│   └── map.js          # Pricing plans, discover list, team members, FAQs, etc.
├── image/              # Static image assets
├── index.js            # React entry point
└── index.css           # Global styles
```

## Routing

The application uses React Router DOM v6 for client-side routing. The following routes are defined in `src/App.js`:

| Route                  | Component          |
| ---------------------- | ------------------ |
| `/`                    | Home               |
| `/about`               | About              |
| `/OurStory`            | Our Story          |
| `/OurCreators`         | Our Creators       |
| `/OurTeams`            | Our Teams          |
| `/privacy`             | Privacy Policy     |
| `/terms`               | Terms              |
| `/careers`             | Careers            |
| `/faq`                 | FAQ                |
| `/reportContent`       | Report Content     |
| `/topics`              | Topics             |

## Deployment

The project is configured for **Firebase Hosting** deployment. On every push to the `main` branch, the GitHub Actions workflow (`.github/workflows/firebase-hosting-merge.yml`) automatically builds and deploys the site to Firebase Hosting.

Pull requests trigger a preview deployment via `.github/workflows/firebase-hosting-pull-request.yml`.

### Manual Deployment

```bash
npm run build
firebase deploy
```

## App Availability

The Defo app is available on:
- **Google Play Store**: [Defo on Play Store](https://play.google.com/store/apps/details?id=dev.lowpow.defo)
- **App Store**: (Apple App Store)

## License

This project is private and not licensed for public use.
