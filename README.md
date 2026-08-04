# Aprajita Legal — Next.js & React Landing Page

A pixel-perfect, high-converting, SEO-optimized Next.js 14 / 15 (App Router) legal landing page and full firm website for **Aprajita Legal (Advocates & Solicitors)**. Built using modern React 19, TypeScript, Tailwind CSS, Object-Oriented Programming (OOP) design patterns, and Conversion Rate Optimization (CRO) strategies.

---

## 🏛️ Features & Architecture

- **Pixel-Perfect Aesthetic**: Matching original warm ivory (`#FAF6F0`), dark bronze (`#9C7A58`), and gold bronze (`#B58B66`) color palettes, custom Google fonts (`Playfair Display` + `Inter`), watermark background, Lady Justice statue section, and animated SVG scroll indicators.
- **Clean Architecture & OOP**:
  - `src/models/domain.ts`: Encapsulates `AdvocateModel`, `PracticeAreaModel`, `StatModel`, `AwardModel`, and `NavItemModel` domain entities.
  - `src/services/dataService.ts`: `LandingPageDataService` and `JsonLdService` for decoupled data providers and Google Schema.org structured data.
- **CRO (Conversion Rate Optimization)**: High-converting interactive Lead Consultation Modal (`ConsultationModal.tsx`) with client confidentiality reassurance.
- **SEO & Metadata**: Full OpenGraph, Twitter Card metadata, and `LegalService` JSON-LD schema for Google rich snippets.
- **Full Firm Content**:
  - Detailed Practice Area tabs for Indirect Tax (GST, Customs, SEZ), Direct Tax, White-Collar Crimes (PMLA, Benami, Black Money Act), Arbitration, Corporate/NCLT, DRT/IBC, and RERA.
  - Team profiles for Lead Counsel Prem Kandpal, Amrendra Singh, Pramod Kandpal, Ketan Jain, Nakul Sehgal, Rohit Gupta (AOR), and associates.
  - 13 Industry Sectors served & New Delhi office contact information.

---

## 🚀 How to Run the Project Locally

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher (Node.js 20+ recommended)
- **npm**: `v9.0.0` or higher

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/H3RI3R/Law.git
cd Law
```

---

### Step 2: Install Dependencies

```bash
npm install
```

---

### Step 3: Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application live.

---

### Step 4: Build for Production

To test or build the optimized production bundle:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

---

## 📁 Project Directory Structure

```
.
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind base styles, custom colors & watermark CSS
│   │   ├── layout.tsx            # Root layout with Google Fonts & SEO metadata
│   │   └── page.tsx              # Main entry page assembling all sections
│   ├── components/
│   │   ├── header/               # Header navigation & brand logo
│   │   ├── hero/                 # Hero section, Lady Justice statue & bottom curve transition
│   │   ├── about/                # Firm background, philosophy, why us & 13 sectors
│   │   ├── practice/             # Interactive practice area tabs & service details
│   │   ├── team/                 # Advocates & counsel profiles grid
│   │   ├── contact/              # New Delhi office address, mobile, email & footer
│   │   └── cro/                  # Consultation lead capture modal
│   ├── models/
│   │   └── domain.ts             # OOP domain models (Advocate, PracticeArea, Stat, etc.)
│   └── services/
│       └── dataService.ts        # Data services and JSON-LD SEO schema generator
├── public/                       # Static public assets
├── tailwind.config.ts            # Tailwind color token definitions
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and build scripts
```

---

## 📞 Contact Information

**Aprajita Legal — Advocates & Solicitors**  
📍 **Address**: B-28, LGF, B-Block, Lajpat Nagar-III, New Delhi - 110024  
📱 **Mobile**: +91-8585988102  
✉️ **Email**: pclegaladvisor@gmail.com
