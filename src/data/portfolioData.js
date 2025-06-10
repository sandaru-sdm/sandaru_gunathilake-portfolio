import profileImage from "../assets/profile.jpg";
import profileImage2 from "../assets/profile2.jpg";
import resume from "../assets/resume.pdf";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";
import project4 from "../assets/ScoopsDelight.png";
import iicLogo from "../assets/IIC_Logo.png";
import project5 from "../assets/PrimeState.png";

const portfolioData = {
  about: {
    name: "Sandaru Gunathilake",
    title: "Full Stack Developer",
    image1: profileImage,
    image2: profileImage2,
    resume: resume,
    description:
      "I'm a passionate developer with expertise in building modern web applications using React and Spring Boot, and various other technologies. With 2+ years of experience, I focus on creating clean, efficient, and user-friendly solutions.",
  },
  skills: [
    { name: "HTML5/CSS3", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
    { name: "React", percentage: 75 },
    { name: "Java", percentage: 75 },
    { name: "Spring Boot", percentage: 75 },
    { name: "MySQL", percentage: 75 },
    { name: "Bootstrap", percentage: 90 },
    { name: "Git", percentage: 75 },
    { name: "Responsive Design", percentage: 85 },
  ],
  projects: [
    {
      id: 1,
      title: "Simple Idea Graphic Design's Landing Page",
      description:
        "A responsive landing page showcasing branding and services for a design agency, built with React and Bootstrap for modern UI and smooth performance.",
      image: project1,
      technologies: ["React", "Bootstrap", "CSS"],
      demoLink: "#",
      githubLink: "https://github.com/sandaru-sdm/invoicing-ui",
    },
    {
      id: 2,
      title: "Simple Idea Online Invoicing System",
      description:
        "A secure invoicing system with client management, real-time billing, and role-based access, powered by Spring Boot and MySQL.",
      image: project2,
      technologies: [
        "Spring Boot",
        "MySQL",
        "Spring Security",
        "Spring data JPA",
      ],
      demoLink: "#",
      githubLink: "https://github.com/sandaru-sdm/invoicing",
    },
    {
      id: 3,
      title: "Creative Creations Landing Page",
      description:
        "A responsive landing page for a local design agency, showcasing their services and portfolio, built with HTML, CSS, JavaScript, and Bootstrap.",
      image: project3,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
      demoLink: "https://sandaru-sdm.github.io/CreativeCreationsLandingPage/",
      githubLink: "https://github.com/sandaru-sdm/CreativeCreationsLandingPage",
    },
    {
      id: 4,
      title: "Scoops Delight Landing Page",
      description:
        "A visually appealing and responsive landing page for an ice cream shop, highlighting their delicious flavors, special offers, and contact information. Built with HTML, CSS, JavaScript, and Bootstrap for a modern and engaging user experience.",
      image: project4,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
      demoLink: "https://sandaru-sdm.github.io/ScoopsDelight/",
      githubLink: "https://github.com/sandaru-sdm/ScoopsDelight",
    }, 
    {
      id: 5,
      title: "Prime State Land Sale Landing Page",
      description:
        "A modern and responsive landing page designed for Prime State's land sale offerings. The website features detailed property listings, high-quality images, and clear calls-to-action to engage potential buyers. Built with HTML, CSS, JavaScript, and Bootstrap, it ensures a seamless browsing experience across devices and helps users easily find information about available plots, pricing, and contact details.",
      image: project5,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
      demoLink: "https://sandaru-sdm.github.io/PrimeEstate/",
      githubLink: "https://github.com/sandaru-sdm/PrimeEstate",
    }
  ],
  experience: [
    {
      id: 1,
      company: "Simple Idea Graphic Design (Freelance)",
      position: "Full Stack Developer",
      period: "2025 Jan - 2025 Feb",
      description:
        "Designed and developed a full-stack invoicing system and a modern landing page for a local design firm.",
      achievements: [
        "Built secure authentication with Spring Security",
        "Integrated MySQL for efficient client and invoice data handling",
        "Implemented responsive UI using React and Bootstrap",
      ],
    },
    {
      id: 2,
      company: "Restaurant Managemet System (Freelance)",
      position: "Software Developer",
      period: "2025 Feb - 2025 Mar",
      description:
        "Developed a Java Swing based restaurant management system for a local restaurant, focusing on user-friendly interfaces and efficient data handling.",
      achievements: [
        "Built the software using Java Swing and MySQL",
        "Implemented features for order management and customer tracking",
        "Ensured data integrity and security with MySQL",
        "Delivered the project on time with positive client feedback",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Engineering in Software Engineering",
      institution: "IIC University of Cambodia",
      year: "2021 - Expected May 2025",
      description:
        "Currently pursuing a Bachelor's degree with a strong foundation in software engineering principles, web development, and data structures.",
      courses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
      ],
      achievements: [
        "Final Year Project: E-Commerce Web Application using pure Java EE",
        "Participated in various hackathons and coding competitions",
      ],
      logo: iicLogo,
    },
  ],

  contact: {
    email: "maduhansadilshan@gmail.com",
    randomString: "9d8f4b9b3e1986bfe4fb0e7ca6f310b7",
    phone: "+94 70 17 94 934",
    location: "Pahala Imbulgoda, Gampaha, Sri Lanka",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sandaru-gunathilake-701a791a0/",
      github: "https://github.com/sandaru-sdm",
      medium: "https://medium.com/@maduhansadilshan",
    },
  },
};

export default portfolioData;
