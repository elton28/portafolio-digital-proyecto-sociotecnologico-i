# Digital Academic Portfolio: Socio-Technological Project I (PST I)

## 📝 Project Overview / Descripción del Proyecto

### 🇺🇸 English
This web application is an interactive digital academic portfolio built for the **Socio-Technological Project I (PST I)** course, part of the **PNF in Informatics Engineering** curriculum at **UNETI** (National Experimental University of Telecommunications and Informatics, Venezuela). It compiles academic research, interactive infographics, a lifecycle map of the Logical Framework Approach (EML), technical studies of real-world Venezuelan open-source projects (Canaima, KAVAC, SISCOM), and an academic essay on the social impact and sovereignty of IT in Venezuela.

### 🇪🇸 Español
Esta aplicación web es un portafolio académico digital interactivo diseñado para la unidad curricular **Proyecto Sociotecnológico I (PST I)** del **PNF en Ingeniería en Informática** de la **UNETI** (Universidad Nacional Experimental de las Telecomunicaciones e Informática, Venezuela). Reúne investigaciones académicas, infografías interactivas, un mapa del ciclo de vida del Enfoque del Marco Lógico (EML), estudios técnicos de proyectos reales de software libre venezolano (Canaima, KAVAC, SISCOM) y un ensayo académico sobre el impacto social y la soberanía tecnológica de la informática en Venezuela.

---

## 🎨 Key Features & Sections / Secciones Clave

The application features a clean, tabbed Single Page Application (SPA) layout powered by smooth micro-animations and a premium, responsive design system.

### 1. 📖 Interactive Cover Page (Portada)
* Features the official dynamic vector branding of **UNETI**.
* Displays core curricular details, academic context, and a grid of interactive cards serving as the navigation routers for all evaluable coursework.

### 2. 👨‍💻 Author Biography (Autor)
* Presents the profile of Elton Isaac Terán Palencia, showcasing his unique multidisciplinary background merging **clinical cardiorespiratory therapy** (precision, life-support protocols) with **systems engineering** (concurrency, systems architecture).
* Highlights his active role in the **"Célula de Desarrollo"** (Development Cell) of the **SIS-UNETI** academic registration portal, designing PostgreSQL/Laravel databases and optimizing backend services.

### 3. 📊 Activity 1: Project Classification Infographic (Infografía)
* An interactive taxonomy explorer explaining how projects are classified by **Nature** (social, technological, research), **Scale** (microprojects to megaproductions), **Responsibility** (individual vs. collective), **Profit** (non-profit vs. economic), and **Funding Sector** (public, private, mixed).
* Integrates dedicated subsections explaining the relevance of each category to the field of software engineering.

### 4. 🔄 Activity 2: Lifecycle Map & Project Management Pillars (Mapa Mixto)
An interactive organigram visualizing two core modules:
* **Lifecycle Flow:** Explores the sequential stages of the **Logical Framework Approach (EML)**: *Participatory Diagnosis, Strategic Planning, Execution & Development, and Evaluation & Systematization*.
* **The 8 Pillars:** Explores the triple constraints and operational pillars of project management: *Time, Cost, Scope, Organization, Task Allocation, Communication, Stakeholders, and Results*.

### 5. 🔍 Activity 3: Real-World Case Studies (Casos PST)
A technical dossier examining three major real-world open-source projects deployed in Venezuela:
* **Canaima GNU/Linux:** Venezuela's national Debian-based metadistribution deployed on over 6 million "Canaimitas" school laptops.
* **KAVAC ERP:** A sovereign Python and Odoo-based Enterprise Resource Planning (ERP) platform designed by the **CNTI** to unify budget and payroll administration for public institutions.
* **SISCOM:** A Laravel and PostgreSQL web application created by **CENDITEL** for local Councils (Consejos Comunales) to manage socioeconomic censuses.
* *Includes direct external verification links pointing to official repositories and press announcements.*

### 📝 Activity 4: Academic Essay (Ensayo)
* Renders a strict **two-page (2 cuartillas) editorial document** exploring the importance and impact of socio-technological projects in Venezuelan computing.
* Analyzes the legal frameworks governing the PNF, the **Ley de Infogobierno** (e-Government Law), and the role of software libre in community autogobierno.
* Features individual critical reflections on the social responsibility of software engineers.

---

## 🛠️ Technology Stack

* **Frontend Framework:** React 19.0.1 (TypeScript ESM)
* **Build tool & Dev Server:** Vite 6.2.3
* **Styling System:** Tailwind CSS v4.1.14 (with inline `@theme` config for Playfair Display, Space Grotesk, and JetBrains Mono fonts)
* **Animation Engine:** Motion v12.23.24
* **Icons Pack:** Lucide React 0.546.0
* **Inspector Tool:** `vite-plugin-react-inspector` (for quick editor jumps in development)

---

## 💻 Running Locally

### Prerequisites
* **Node.js** (v18.x or higher recommended)
* **npm** (comes bundled with Node.js)

### Installation Steps

1. **Clone the repository** (or navigate to the workspace folder):
   ```bash
   cd portafolio-digital-proyecto-sociotecnológico-i
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   *The application will launch on your local host (usually `http://localhost:3000` or `http://localhost:5173`).*

4. **Compile a production build:**
   ```bash
   npm run build
   ```
   *Compiles and bundles optimization assets to the `dist/` directory.*

5. **Run Lint Checks:**
   ```bash
   npm run lint
   ```
   *Runs `tsc --noEmit` to verify type safety across all files.*
