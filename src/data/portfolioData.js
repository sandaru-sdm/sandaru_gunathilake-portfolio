import profileImage from "../assets/profile.jpg";
import profileImage2 from "../assets/profile2.jpg";
import resume from "../assets/resume.pdf";
import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";
import project4 from "../assets/ScoopsDelight.png";
import iicLogo from "../assets/IIC_Logo.png";
import project5 from "../assets/PrimeState.png";
import project6 from "../assets/NewTech.png";
import project7 from "../assets/PresentLKAdmin.jpg";
import project8 from "../assets/PresentLKUser.jpg";
import project9 from "../assets/PresentLKPHP.png";
import project10 from "../assets/Checkin.PNG";
import project11 from "../assets/PresentLKJava.png";
import project12 from "../assets/JayanthaHardware.png";
import project13 from "../assets/mrChef.png";
import certificate1 from "../assets/certificate1.png";

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
    { name: "HTML5/CSS3", percentage: 75 },
    { name: "JavaScript", percentage: 75 },
    { name: "React", percentage: 75 },
    { name: "Java", percentage: 75 },
    { name: "Spring Boot", percentage: 75 },
    { name: "MySQL", percentage: 75 },
    { name: "Bootstrap", percentage: 80 },
    { name: "Git", percentage: 75 },
    { name: "Responsive Design", percentage: 75 },
  ],
  certificates: [
    {
      id: 1,
      title: "Responsive Web Design",
      description: "The freeCodeCamp Responsive Web Design certificate covers the fundamentals of HTML5 and CSS3, including building accessible web pages, using Flexbox and CSS Grid for layouts, and creating responsive designs that work across devices. The curriculum emphasizes best practices for web development and includes hands-on projects to reinforce learning.",
      image: certificate1,
      technologies: ["HTML", "CSS", "Responsive Design"],
      link: "https://www.freecodecamp.org/certification/fcc-d2a98282-8efe-4f24-b395-586d9f2421d5/responsive-web-design",
    }
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
      title: "Mr Chef Restaurant Management System",
      description:
        "Mr Chef is a comprehensive restaurant management system developed using Java Swing and MySQL. The application streamlines daily restaurant operations, including order management, table reservations, billing, and inventory tracking. With an intuitive user interface, staff can efficiently handle dine-in and takeout orders, manage menu items, and generate sales reports. The system ensures accurate data handling and helps improve overall service quality and operational efficiency for restaurant staff and management.",
      image: project13,
      technologies: ["Java", "Swing", "MySQL"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
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
      id: 4,
      title: "Creative Creations Landing Page",
      description:
        "A responsive landing page for a local design agency, showcasing their services and portfolio, built with HTML, CSS, JavaScript, and Bootstrap.",
      image: project3,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoLink: "https://sandaru-sdm.github.io/CreativeCreationsLandingPage/",
      githubLink: "https://github.com/sandaru-sdm/CreativeCreationsLandingPage",
    },
    {
      id: 5,
      title: "Scoops Delight Landing Page",
      description:
        "A visually appealing and responsive landing page for an ice cream shop, highlighting their delicious flavors, special offers, and contact information. Built with HTML, CSS, JavaScript, and Bootstrap for a modern and engaging user experience.",
      image: project4,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoLink: "https://sandaru-sdm.github.io/ScoopsDelight/",
      githubLink: "https://github.com/sandaru-sdm/ScoopsDelight",
    },
    {
      id: 6,
      title: "Prime State Land Sale Landing Page",
      description:
        "A modern and responsive landing page designed for Prime State's land sale offerings. The website features detailed property listings, high-quality images, and clear calls-to-action to engage potential buyers. Built with HTML, CSS, JavaScript, and Bootstrap, it ensures a seamless browsing experience across devices and helps users easily find information about available plots, pricing, and contact details.",
      image: project5,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoLink: "https://sandaru-sdm.github.io/PrimeEstate/",
      githubLink: "https://github.com/sandaru-sdm/PrimeEstate",
    },
    {
      id: 7,
      title: "New Tech E commerce web application frontend",
      description:
        "A simple and responsive ecommerce website for NewTech, built with HTML, CSS, and JavaScript. The site allows users to browse and purchase tech items, view product details, and enjoy a smooth shopping experience across all devices.",
      image: project6,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoLink: "https://sandaru-sdm.github.io/New-Tech/",
      githubLink: "https://github.com/sandaru-sdm/New-Tech",
    },
    {
      id: 8,
      title: "PresentLK Admin E commerce Android application",
      description:
        "An Android admin application built with Java and Firebase, designed for managing an e-commerce platform. The app enables administrators to easily publish new products, manage customer accounts, process orders, and handle other essential admin tasks in real time. Leveraging Firebase for authentication and data storage, it provides a secure and efficient way to oversee store operations from any Android device.",
      image: project7,
      technologies: ["Android", "Java", "Firebase"],
      demoLink: "https://github.com/sandaru-sdm/PresentsLKAdmin-Android",
      githubLink: "https://github.com/sandaru-sdm/PresentsLKAdmin-Android",
    },
    {
      id: 9,
      title: "PresentLK User E commerce Android application",
      description:
        "An Android User application built with Java and Firebase, designed for purchase products. The app enables users to easily buy products, manage their account, manage their orders, and handle other essential user tasks in real time. Leveraging Firebase for authentication and data storage, it provides a secure and efficient way to oversee store operations from any Android device.",
      image: project8,
      technologies: ["Android", "Java", "Firebase"],
      demoLink: "https://github.com/sandaru-sdm/PresentsLKUser-Android",
      githubLink: "https://github.com/sandaru-sdm/PresentsLKUser-Android",
    },
    {
      id: 10,
      title: "PresentLK E commerce application (PHP)",
      description:
        "A simple e-commerce web application built with PHP and Bootstrap. Features include product browsing, product cart, checkout, single product view, and secure payments with Stripe, and order verifications via SMTP email.",
      image: project9,
      technologies: ["PHP", "Bootstrap", "SMTP", "Stripe"],
      demoLink: "https://github.com/sandaru-sdm/PresentsLK",
      githubLink: "https://github.com/sandaru-sdm/PresentsLK",
    },
    {
      id: 11,
      title: "Hotel Management System",
      description:
        "A comprehensive hotel management system developed using Java Swing for the user interface and MySQL for data storage. The application supports system user login, customer registration, check-in, home dashboard, invoice generation, room registration, room service management, and many other essential hotel operations. It streamlines daily hotel tasks, improves efficiency, and provides an intuitive experience for hotel staff.",
      image: project10,
      technologies: ["Java", "Swing", "MySQL"],
      demoLink: "https://github.com/sandaru-sdm/HotelManagementSystem",
      githubLink: "https://github.com/sandaru-sdm/HotelManagementSystem",
    },
    {
      id: 12,
      title: "PresentLK J2EE E commerce application",
      description:
        "A full-featured e-commerce web application built with J2EE, Hibernate, and MySQL. The system includes product listing, single product view, shopping cart, checkout, user authentication, account creation, and an admin panel for managing products and orders. It provides a seamless shopping experience for users and robust management tools for administrators.",
      image: project11,
      technologies: ["J2EE", "Hibernate", "MySQL"],
      demoLink: "https://github.com/sandaru-sdm/PresentsLK-Java",
      githubLink: "https://github.com/sandaru-sdm/PresentsLK-Java",
    },
    {
      id: 13,
      title: "POS System for Jayantha Hardware",
      description:
        "A Point of Sale (POS) system developed for Jayantha Hardware using Java Swing for the desktop interface and MySQL for backend data management. The application streamlines sales transactions, inventory tracking, and customer management. Key features include product catalog management, real-time stock updates, and invoice generation. The intuitive interface allows staff to quickly process sales and manage daily operations efficiently, while MySQL ensures reliable and secure data storage.",
      image: project12,
      technologies: ["Java", "Swing", "MySQL"],
      demoLink: "https://github.com/sandaru-sdm/JayanthaHardware",
      githubLink: "https://github.com/sandaru-sdm/JayanthaHardware",
    },
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
    {
      id: 3,
      company: "Megha Property Sales Web Application (Freelance)",
      position: "Full Stack Developer",
      period: "2025 April - Present",
      description:
        "A full stack invoicing system with a Spring Boot backend and React frontend. Features include secure JWT authentication, role-based login, and robust user management. The backend uses Spring Security for authentication and authorization, while the frontend provides a modern, responsive UI for users and admins. In frontend its mainly focused on mobile view.",
      achievements: [
        "Developed and deployed a secure, full-stack invoicing system using Spring Boot for the backend and React for the frontend, incorporating JWT authentication and role-based access control for enhanced security.",
        "Engineered a robust user management system within the application, leveraging Spring Security for comprehensive authentication and authorization, ensuring data integrity and secure access for various user roles.",
        "Designed and implemented a modern, responsive user interface with a strong focus on mobile-first design for optimal usability across devices, significantly improving the user experience for both administrators and regular users.",
      ],
    },
    {
      id: 4,
      company: "Student & Teachers Management System (Freelance)",
      position: "Full Stack Developer",
      period: "2025 March",
      description:
        "A standalone desktop application developed using Java Swing and MySQL for managing students and teachers in an educational institute. The system supports student and teacher registration, updates, and the generation of reports using JasperReports. The application focuses on efficient data handling and user-friendly form-based interfaces tailored for administrative staff.",
      achievements: [
        "Designed and implemented a complete desktop-based student and teacher management system using Java Swing and MySQL, streamlining data entry, updates, and retrieval processes.",
        "Integrated JasperReports for automated generation of professional reports related to student registrations enhancing administrative efficiency.",
        "Ensured reliable database operations through optimized SQL queries and robust exception handling, maintaining data accuracy and consistency.",
        "Delivered a clean, responsive layout with intuitive navigation and validation mechanisms, resulting in improved user satisfaction and fewer input errors.",
      ],
    },
    {
      id: 5,
      company: "Jayantha Hardware POS System (Freelance)",
      position: "Full Stack Developer",
      period: "2024 November - 2024 December",
      description:
        "A custom-built Point of Sale (POS) desktop application developed using Java Swing and MySQL for Jayantha Hardware. The system supports invoice generation, supplier and customer registration, stock management, and report generation using Jaspersoft Studio.",
      achievements: [
        "Developed a comprehensive POS system using Java Swing and MySQL to manage sales, inventory, suppliers, and customers in a hardware store environment.",
        "Implemented automated invoice generation",
        "Integrated Jaspersoft Studio for generating professional invoices and sales reports, enabling better business insights and print-ready output.",
        "Designed user-friendly GUIs for supplier and customer registration, ensuring efficient data entry and validation.",
        "Optimized SQL queries and implemented transaction management to maintain data integrity across sales and inventory operations.",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Engineering in Software Engineering",
      institution: "IIC University of Cambodia",
      year: "2021 - Expected 2025",
      description:
        "Currently pursuing a Bachelor's degree with a strong foundation in software engineering principles, web development, and data structures.",
      courses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Mobile Application Development",
        "Design Patterns",
      ],
      achievements: [
        "Final Year Project: E-Commerce Web Application using pure Java EE",
        "Developed mobile applications using Android and React Native",
        "Integrated payment gateway (Stripe) in a full-stack PHP e-commerce project"
      ],
      logo: iicLogo,
    },
  ],

  contact: {
    email: "maduhansadilshan@gmail.com",
    randomString: "9d8f4b9b3e1986bfe4fb0e7ca6f310b7",
    phone: "+94 70 17 94 934",
    location: "Gampaha, Sri Lanka",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sandaru-gunathilake-701a791a0/",
      github: "https://github.com/sandaru-sdm",
      medium: "https://medium.com/@maduhansadilshan",
    },
  },
};

export default portfolioData;
