# VetHealth Pharma Pvt Ltd - Website Documentation

This document serves as the comprehensive guide to the **VetHealth Pharma Pvt Ltd** web application. It covers everything from the technology stack and design system to detailed page functionalities and local development instructions.

---

## 1. Project Overview
**VetHealth Pharma** is a premium, real-world, production-grade veterinary healthcare and animal nutrition platform. The website highlights the company's commitment to scientific excellence, quality, global distribution, and complete animal health problem-solving for livestock, poultry, and pets.

## 2. Technology Stack
The application is structured into a modern monorepo containing two dedicated environments resulting in a full-stack, enterprise-grade architecture:

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: `Bree Serif`, Google Fonts 
- **Language**: TypeScript

### Backend
- **Framework**: FastAPI (Python)
- **Database ORM**: Prisma ORM for Python
- **DatabaseEngine**: PostgreSQL
- **Language**: Python 3.x+

### Media
- **Assets**: Cloudinary (Videos), Unsplash (High-quality contextual farm/veterinary imagery)

---

## 3. Design System & Aesthetics
The website moves away from traditional generic palettes (greens/blues) to a highly premium, modern, and striking color scheme.

- **Background**: Bright White (`#FFFFFF`) with soft, layered colored blur overlays.
- **Text**: Deep Charcoal (`#0F172A`) for high contrast readability.
- **Primary Accent**: Royal Violet (`#6D28D9`) - Conveys scientific rigor, royalty, and medical excellence.
- **Secondary Accent**: Muted Gold (`#C9A227`) - Used for highlighting premium metrics and important calls to action.
- **Animations**: Bouncy hover effects, smooth scroll entrances, scaled image reveals, and colorful gradient hovers.

---

## 4. Frontend Application Map & Pages

### 4.1 Global Interactions & Navigation
- **Navigation Bar (Navbar)**: A sticky, blurred-glass effect header. It shrinks dynamically on scroll, and features hoverable dropdowns built securely with Framer Motion. 
  - **Dropdown Navigation**: Explicitly covers Categories (Veterinary Medicines, Vaccines, Animal Nutrition & Feed, Poultry Products, Pet Healthcare, Instruments & Equipment, Artificial Insemination).
  - **Quick Action**: "Bulk Order" CTA is prominent.

### 4.2 Home Page (`/`)
An immersive, interactive landing experience divided into 5 major sections:
1. **Hero Section**: Features a high-quality looping video background (elephants) with an optimized, lightweight violet gradient overlay. Contains dynamic CTAs to drive product exploration, bulk orders, and consultation booking.
2. **Animal Categories**: Visual grid with large images of animals (Cattle, Poultry, Aqua, Sheep, Pets, Equine). On hover, cards smoothly scale up and reveal explicit categorized product counts.
3. **Product Ecosystem**: Sleek, icon-driven blocks (Veterinary Medicines, Feed Supplements, Poultry Products, Pet Healthcare, Farm Solutions) detailing the core highlights.
4. **Disease to Solution Matrix**: A uniquely interactive component mapping severe diseases (Mastitis, Coccidiosis, Tick Fever, Liver Fluke) to specific VetHealth solutions, changing vibrant background states on selection.
5. **The VetHealth Advantage (Stats)**: Four core reasons to partner, list of Industries Served, and large graphical statistics covering Products (500+), Clients (1000+), and Global Reach, paired with contextual farming imagery.

### 4.3 About Us (`/about`)
A dynamic corporate presentation page detailing the company's background.
- **Mission & Vision**: Highlights VetHealth's mission to be the most trusted global leader in medication and nutrition.
- **Key Business Activities**: Outline of wholesale medicines, manufacturing, distribution, and advisory services.
- **Core Values Matrix**: Quality, Integrity, Innovation, Farmer Support, and Scientific Approach displayed as cleanly animated cards.

### 4.4 Contact Us (`/contact`)
A beautifully structured communication hub.
- **Contact Details**: Provides explicit VetHealth HQ location, Toll-Free numbers, WhatsApp, and Emails.
- **Business Hours**: Defines response times ("Within 24 hours").
- **Dynamic Enquiry Form**: A form allowing visitors to route inquiries directly by Type (Product, Bulk Order, Partnership, General Support). Includes custom loading states and animated success feedback dialogs upon submission.

### 4.5 Product Range & Specialized Pages (Structured Routes)
- **Products Catalog (`/products`)**: Filterable marketplace for all medicine and supplement lists.
- **Manufacturing (`/manufacturing`) & Distribution (`/distribution`)**: Hubs for corporate partnership and global export networking.
- **Consultation (`/consultation`)**: Portal for direct veterinary support booking.
- **Knowledge Center (`/blog`)**: Content hub for farming advice, disease management, and product launches.

---

## 5. Backend Logic & Database Functionality
The backend is a robust Python FastAPI server designed for heavy data throughput and rigorous relational data mapping via Prisma.

### Prisma Schema Entities (Core Tables)
- **CategoryModel**: Organizes products into high-level categories (e.g., Supplements, Antibiotics).
- **ProductModel**: Carries all relevant metadata including composition, dosage, benefits, and animal_type restrictions.
- **InquiryModel**: Stores all "Contact Us" submissions holding names, contacts, inquiry types, and status processing flows.
- **PostModel**: For storing the CMS content for the Knowledge Center (Blog).

### Core API Architectures
- **`GET /api/products`**: Designed to be entirely filter-driven (e.g., `?animal=poultry&category=vaccines`) returning JSON payloads directly into Next.js.
- **`POST /api/inquiries`**: Secured mutation endpoint handling form submissions.

---

## 6. How to Run Locally

Because the project is separated cleanly into `frontend` and `backend`, each component must be run simultaneously to view the full experience.

### Running the Frontend
1. Open terminal and navigate to: `cd frontend`
2. Install dependencies: `npm install`
3. Run Development Server: `npm run dev`
4. Access the web app at **[http://localhost:3000](http://localhost:3000)**

*(The frontend utilizes Tailwind PostCSS mapping and Turbopack under Next.js for incredibly fast hot re-rendering).*

### Running the Backend
1. Open terminal and navigate to: `cd backend`
2. Activate Virtual Environment (If initialized): `.\venv\Scripts\Activate` (Windows)
3. Install dependencies: `pip install -r requirements.txt` (or standard pip usage).
4. Boot the FastAPI Server: `uvicorn main:app --reload`
5. The API will listen aggressively on **[http://localhost:8000](http://localhost:8000)** with built-in Swagger documentation at `http://localhost:8000/docs`.

---

## 7. Deployment Configuration
The architecture is configured for zero-downtime automated deployment. 
- **Frontend** pushes statically to **Vercel**. *Crucial configuration: "Root Directory" MUST be set exactly to `frontend` with the preset mapped to Next.js.*
- **Backend** pushes via Docker/Railway/Render depending on the active production PostgreSQL database location.

--- 
*This documentation is up-to-date and tracks the finalized Royal Violet redesign, mapped sitemap expansion, and global visual media enhancement releases.*
