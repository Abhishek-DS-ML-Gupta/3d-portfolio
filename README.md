# 🌌 3D Developer Portfolio

A cutting-edge, interactive 3D developer portfolio built with **React**, **Three.js (React Three Fiber)**, and **Tailwind CSS**. This immersive experience is designed to showcase your skills, projects, and contact information in a visually stunning format.

Live Demo 👉 [View Portfolio](https://mysiteii.vercel.app)

![Preview](./public/preview.gif) <!-- Replace with actual gif or screenshot -->

---

## 🛠 Tech Stack

- ⚛️ React + Vite – Lightning-fast development
- 🎮 React Three Fiber – Three.js renderer for React
- 💅 Tailwind CSS – Utility-first styling
- 🎨 Drei – Helpers for 3D scenes
- 📩 EmailJS – Contact form email delivery
- ✨ Framer Motion / GSAP – Smooth animations
- 🌙 Dark mode – Built-in responsive theme support

---

## 📦 Folder Structure

3d-portfolio/
├── public/ # Static assets (favicon, preview)
├── src/
│ ├── assets/ # Images, models, shaders
│ ├── components/ # Reusable React components
│ ├── constants/ # Socials, nav links, etc.
│ ├── scenes/ # 3D Canvas Scenes (e.g., Earth, Stars)
│ ├── styles/ # Tailwind/global styles
│ ├── App.tsx # Root layout
│ └── main.tsx # Entry point
├── .env # Environment variables (EmailJS keys)
└── vite.config.ts # Vite config

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Abhishek-DS-ML-Gupta/3d-portfolio.git
cd 3d-portfolio
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup Environment Variables (Optional if using EmailJS)
Create a .env file in the root and add:

env
Copy
Edit
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
💡 You can get these from EmailJS.

4. Start the Dev Server
bash
Copy
Edit
npm run dev
Visit http://localhost:5173 to view the app.
