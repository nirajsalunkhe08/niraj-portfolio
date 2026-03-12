# Niraj Salunkhe — Portfolio 🚀

A personal portfolio website built with **React**, **TypeScript**, **Three.js**, and **GSAP** — featuring 3D animations, WebGL effects, and smooth scroll-driven interactions.

## ✨ Features

- 🎮 Interactive 3D character powered by Three.js & React Three Fiber
- 🎬 GSAP-driven scroll animations and transitions
- 💼 Sections: Landing, About, What I Do, Tech Stack, Work, Career & Contact
- ⚡ Built with Vite for lightning-fast development
- 📊 Vercel Analytics integrated

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript |
| **3D / WebGL** | Three.js, React Three Fiber, React Three Drei, React Three Rapier |
| **Animation** | GSAP, @gsap/react |
| **Build Tool** | Vite |
| **Deployment** | Vercel |

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/nirajsalunkhe08/niraj-portfolio.git
cd niraj-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
niraj-salunkhe-portfolio/
├── public/
│   ├── models/        # 3D model assets (.glb)
│   └── images/        # Static images
├── src/
│   ├── components/    # React components (Landing, About, Work, etc.)
│   ├── context/       # React context providers
│   ├── data/          # Static data / content
│   └── assets/        # Local assets
├── index.html
└── vite.config.ts
```

> **Note on GSAP:** This project uses the GSAP trial plugins. To use GSAP Club plugins (ScrollSmoother, SplitText, etc.) in production, you need a GSAP Club membership. See [GSAP Installation Docs](https://gsap.com/docs/v3/Installation/).

## 🙏 Acknowledgements

Special thanks to **[Rajesh Chityal](https://github.com/rajeshchityal)** whose original portfolio design served as the inspiration and foundation for this project.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
