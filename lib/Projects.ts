import { Project } from "@/app/projects/[id]/page";

// Deo Sagar Kumar's project data
export const projectsData: Project[] = [
    {
        id: 1,
        title: "TradeDoc AI – Enterprise Trade Automation",
        description:
            "TradeDoc AI is an enterprise-grade, AI-powered document generation and validation platform for institutional OTC derivative trade agreements (FX NDF, IRS, CDS, Equity TRS). It uses a LangGraph agentic pipeline with Google Gemini 2.5 to classify emails, extract structured trade data, generate PDF confirmations via LaTeX, and enable client e-signing. Built as a finalist project for the Virtuasa Jatayu Hackathon Season 5.",
        shortDescription: "AI-powered trade document automation using LangGraph, Flask, and Google Gemini for OTC derivatives.",
        images: [
            "/tradedoc_ai.png"
        ],
        githubLink: "https://github.com/DSK2307/TradeDoc-AI",
        tags: ["Flask", "LangGraph", "Google Gemini", "MongoDB", "GCS", "Docker", "PyPDF", "Python"],
        category: "backend",
        features: [
            "AI classification and extraction of trade data from raw emails using LangGraph agents",
            "Flask REST API with JWT auth, rate limiting, and core trade endpoints",
            "LaTeX-based PDF generation using Jinja2 templating and TinyTeX",
            "Multimodal validation (email vs compiled PDF) using Google Gemini",
            "Client signing portal with PyPDF and ReportLab signature stamping",
            "MongoDB for trade metadata and GCS for secure PDF storage",
            "Containerized deployment via Docker and docker-compose"
        ],
        challenges:
            "Orchestrating multiple AI agents in a state-based LangGraph graph, ensuring multimodal PDF validation accuracy, and building a pixel-perfect LaTeX PDF engine within hackathon constraints.",
        technologies: {
            backend: ["Flask", "Flask-CORS", "Flask-Limiter", "LangGraph", "LangChain", "Python"],
            ai: ["Google Gemini 2.5 Flash/Pro", "Groq Llama"],
            document: ["Jinja2", "TinyTeX", "pdflatex", "PyPDF", "ReportLab"],
            storage: ["MongoDB", "Google Cloud Storage"],
            deployment: ["Docker", "docker-compose"]
        },
    },
    {
        id: 2,
        title: "Muzzle Identification – Cow Biometrics",
        description:
            "A full-stack Cow Muzzle Identification web application built with Python to automate cattle biometrics and manage complete enrollment and identification workflows. Integrates Meta's Segment Anything 2 (SAM2) AI model to accurately isolate and analyze complex muzzle features, delivering a precise computer vision solution for modern livestock tracking.",
        shortDescription: "Computer vision web app using SAM2 AI for automated cow muzzle identification and livestock tracking.",
        images: [
            "/muzzle_identification.png"
        ],
        githubLink: "https://github.com/DSK2307/Muzzle-Identification",
        tags: ["Python", "Flask", "SAM2", "Computer Vision", "HTML/CSS", "AI/ML"],
        category: "web",
        features: [
            "Meta's Segment Anything 2 (SAM2) for precise muzzle segmentation",
            "Complete enrollment and identification workflow for cattle",
            "Image upload and processing via HTML/CSS frontend",
            "Backend architecture for computer vision processing",
            "Biometric matching and cattle tracking system"
        ],
        challenges:
            "Integrating Meta's SAM2 model for accurate muzzle feature isolation in varying image conditions, and building a reliable backend pipeline for enrollment and identification workflows.",
        technologies: {
            frontend: ["HTML", "CSS", "Jinja2 Templates"],
            backend: ["Python", "Flask"],
            ai: ["Meta SAM2 (Segment Anything 2)", "Computer Vision", "OpenCV"]
        },
    },
    {
        id: 3,
        title: "Hasthakshar – Indian Sign Language Recognition",
        description:
            "A real-time Indian Sign Language (ISL) recognition system using computer vision and deep learning. Built with a custom dataset and preprocessing pipeline, implementing hand landmark extraction with MediaPipe and OpenCV, and trained deep learning models with TensorFlow and PyTorch achieving 90% accuracy across 26 ISL alphabet gestures.",
        shortDescription: "Real-time Indian Sign Language recognition with MediaPipe + TensorFlow/PyTorch achieving 90% accuracy.",
        images: [
            "/hasthakshar.png"
        ],
        githubLink: "https://github.com/DSK2307/Hasthakshar",
        tags: ["TensorFlow", "PyTorch", "OpenCV", "MediaPipe", "Computer Vision", "Deep Learning"],
        category: "web",
        features: [
            "Real-time ISL alphabet recognition across 26 gestures",
            "Hand landmark extraction using MediaPipe for skeletal keypoints",
            "Custom dataset creation and preprocessing pipeline",
            "Deep learning model training with TensorFlow and PyTorch",
            "90% accuracy across 26 Indian Sign Language alphabet gestures",
            "OpenCV-based video processing pipeline"
        ],
        challenges:
            "Creating a robust custom dataset for 26 ISL gestures, extracting consistent hand landmark features in real-time, and training models that generalize well across different lighting conditions and hand sizes.",
        technologies: {
            ml: ["TensorFlow", "PyTorch", "MediaPipe", "OpenCV"],
            languages: ["Python"],
            tools: ["Custom Dataset", "Keypoint Extraction"]
        },
    },
    {
        id: 4,
        title: "Ocassio – Event Management Platform",
        description:
            "A full-stack event management platform built with Next.js, TypeScript, MongoDB, Clerk, and Stripe. Enables users to create, manage, and book events with secure authentication and online payments. Features AI-powered chatbot support, file upload functionality, advanced event search, filtering, and personalized dashboards.",
        shortDescription: "Full-stack event platform with Clerk auth, Stripe payments, AI chatbot, and advanced event management.",
        images: [
            "/ocassio.png"
        ],
        githubLink: "https://github.com/DSK2307/Ocassio",
        tags: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Stripe", "AI Chatbot"],
        category: "web",
        features: [
            "Clerk authentication for secure user management",
            "Stripe payment integration for event bookings",
            "REST APIs for event and user management",
            "AI-powered chatbot support",
            "File upload functionality",
            "Advanced event search and filtering",
            "Personalized user dashboards",
            "MongoDB for event and user data storage"
        ],
        challenges:
            "Integrating Clerk authentication with Stripe payments seamlessly, building an AI chatbot that understands event-specific queries, and creating an advanced filtering system for large event datasets.",
        technologies: {
            frontend: ["Next.js", "TypeScript", "React"],
            backend: ["Node.js", "MongoDB"],
            auth: ["Clerk"],
            payments: ["Stripe"],
            ai: ["AI Chatbot"]
        },
    },
    {
        id: 5,
        title: "Pharmatrix – Drug Interaction Checker",
        description:
            "A comprehensive drug interaction checking tool helping healthcare professionals and patients identify potential drug interactions. Built with a Django REST API backend and modern frontend. Features component-level checking (individual salt/component interactions), severity ratings (Mild, Moderate, Severe), autocomplete search, and dark mode support.",
        shortDescription: "Drug interaction checker with Django REST API, component-level analysis, and severity ratings.",
        images: [
            "/pharmatrix.png"
        ],
        githubLink: "https://github.com/DSK2307/Pharmatrix",
        tags: ["Django", "Python", "REST API", "HTML", "CSS", "JavaScript", "SQLite"],
        category: "backend",
        features: [
            "Multi-drug interaction analysis for multiple medications simultaneously",
            "Component-level checking analyzing individual salt/component interactions",
            "Severity ratings: Mild, Moderate, and Severe classifications",
            "Comprehensive drug database with active components",
            "Autocomplete search for fast drug name suggestions",
            "Dark mode support and responsive design",
            "Django REST API with GET /api/drugs/ and POST /api/check/ endpoints"
        ],
        challenges:
            "Designing a component-level interaction engine that maps brand names to active salts, building a performant autocomplete that searches a large drug database, and ensuring accurate severity classification from CSV data.",
        technologies: {
            frontend: ["HTML5", "CSS", "Tailwind CSS", "Vanilla JavaScript"],
            backend: ["Django 5.0", "django-cors-headers", "Gunicorn", "Python"],
            database: ["SQLite", "CSV files (drugs.csv, interactions.csv)"]
        },
    },
    {
        id: 6,
        title: "Turf Spot – Sports Venue Booking",
        description:
            "A comprehensive sports venue booking platform developed for the Odoo Hackathon 2025. Streamlines turf reservations for athletes and facility owners with real-time slot availability, secure user authentication, and interactive management dashboards.",
        shortDescription: "Sports venue booking platform with real-time slot availability and management dashboards – Odoo Hackathon.",
        images: [
            "/turf_spot.png"
        ],
        githubLink: "https://github.com/DSK2307/Odoo-Hack-25",
        tags: ["Next.js", "Node.js", "MongoDB", "Authentication", "Real-time"],
        category: "web",
        features: [
            "Real-time slot availability for sports venues",
            "Secure user authentication for athletes and facility owners",
            "Interactive management dashboards",
            "Booking and reservation management system",
            "Facility owner portal for venue management"
        ],
        challenges:
            "Building a real-time slot management system that handles concurrent booking requests accurately under hackathon time constraints.",
        technologies: {
            frontend: ["Next.js", "React"],
            backend: ["Node.js", "MongoDB"],
            auth: ["JWT/Authentication"]
        },
    },
    {
        id: 7,
        title: "Divya Drishti – CodeClash Hackathon (Top 10)",
        description:
            "A Next.js web platform developed for the CodeClash Hackathon, reaching the top 10 position. Divya Drishti is a full-stack web application with SOS functionality and a modern responsive design built with TypeScript and React.",
        shortDescription: "Next.js platform built for CodeClash Hackathon – reached top 10 with SOS functionality.",
        images: [
            "/divya_drishti.png"
        ],
        githubLink: "https://github.com/DSK2307/Divya-Drishti",
        liveLink: "https://code-clash-bay.vercel.app",
        tags: ["Next.js", "TypeScript", "React", "CSS"],
        category: "web",
        features: [
            "Modern responsive UI with Next.js and TypeScript",
            "SOS emergency functionality",
            "Full-stack platform with clean navigation",
            "Deployed on Vercel"
        ],
        challenges:
            "Rapidly building a functional, polished platform with multiple features under hackathon time constraints while ensuring a clean, responsive design.",
        technologies: {
            frontend: ["Next.js", "TypeScript", "React", "CSS"],
            deployment: ["Vercel"]
        },
    },
];