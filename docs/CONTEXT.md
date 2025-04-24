# Refugee Connect Platform (RCP)

An AI-powered web application designed to help refugees find housing, job opportunities, and essential services based on their skills, needs, and language preferences. The platform leverages AI matching algorithms and multilingual support to bridge the integration gap for refugees in new communities.

## Purpose & Problem Statement

Refugees face numerous challenges when integrating into new communities:

- **Language barriers** limiting access to opportunities
- **Difficulty navigating** localized services and resources
- **Mismatched job or housing opportunities** that don't align with skills or needs

**RCP (Refugee Connect Platform)** addresses these challenges by:

- Implementing AI-powered matching to connect refugees with appropriate resources
- Providing comprehensive multilingual interfaces for accessibility
- Offering an intuitive, user-friendly experience designed for diverse users

## Technology Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React.js (via Next.js), Tailwind CSS, i18next |
| **Backend** | Local Storage 
| **AI/ML** | TensorFlow.js (client-side matching algorithm) |

## Application Flow

### 1. Landing Page (`/`)
- Platform introduction and value proposition
- Language selection interface (English, Arabic, etc.)
- Clear call-to-action for profile creation

### 2. Profile Creation (`/upload-profile`)
- Comprehensive user profile form capturing:
  - Personal information (name, age, gender)
  - Language proficiency
  - Skills inventory and work experience
  - Housing requirements
  - Geographic preferences
- Support for multilingual resume uploads (text or file)
- AI-powered matching process triggered on submission

### 3. Opportunity Matching (`/matches`)
- Personalized results displaying:
  - Employment opportunities
  - Housing options
  - Essential services (language courses, legal assistance, healthcare)
- Detailed result cards featuring:
  - Opportunity title and description
  - Location information
  - Match confidence percentage
  - Action buttons (Apply, Contact, Save for later)

### 4. Multilingual Support System
- Seamless language switching via i18next
- Intuitive language selection interface
- Localization files stored in `public/locales`
- Full support for RTL (Right-to-Left) languages (Arabic, Farsi, etc.)

## AI Matching Algorithm

Implemented in `utils/matcher.js` using **TensorFlow.js** for client-side processing.

### Input Processing:
- **User profiles**: language abilities, skill sets, specific preferences
- **Opportunity database**: available jobs, housing, and services

### Algorithm Workflow:
1. Natural language preprocessing of profile and opportunity data
2. Vector embedding generation for semantic comparison
3. Similarity calculation using cosine distance metrics
4. Ranking system to present the most relevant matches first

## Project Structure

refugee-assistance-platform/
├── public/
│   ├── locales/
│   │   ├── en/                # English translations
│   │   │   └── common.json
│   │   ├── ar/                # Arabic translations (or other languages)
│   │   │   └── common.json
│   └── images/                # Static images for UI, logos, etc.
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   └── MatchCard.jsx      # Card to show matched opportunities
│   ├── pages/                 # Next.js routing
│   │   ├── index.jsx          # Homepage
│   │   ├── matches.jsx        # Page for matched results
│   │   ├── upload-profile.jsx # Page to input refugee profile
│   │   └── _app.jsx           # Global setup (i18next, themes, etc.)
│   ├── styles/                # Global and component styles
│   │   ├── globals.css
│   │   └── themes.css
│   ├── utils/                 # Helper functions
│   │   ├── matcher.js         # AI matching logic using TensorFlow.js
│   │   ├── languageHelper.js  # Language direction helpers (RTL support, etc.)
│   │   └── firebase.js        # Firebase config if used
│   ├── context/               # App-level context (UserContext, etc.)
│   │   └── UserContext.jsx
│   ├── data/                  # Sample data for testing matches/jobs
│   │   ├── sampleJobs.json
│   │   └── sampleProfiles.json
│   └── i18n/                  # i18next configuration
│       └── i18n.js
├── .gitignore
├── package.json
├── README.md
└── next.config.js


## Key Features

- ✅ **Multilingual Interface** - Full i18next integration with RTL support
- ✅ **AI-Powered Matching** - TensorFlow.js implementation for intelligent recommendations
- ✅ **Responsive Design** - Tailwind CSS for adaptive layouts across devices
- ✅ **Flexible Backend** - Support for Firebase or local storage options
- ✅ **Optimized Routing** - Next.js for efficient client-side navigation
- ✅ **Profile Management** - Secure data persistence via localStorage or Firebase

## Getting Started

See [INSTALLATION.md](./INSTALLATION.md) for setup instructions and [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.