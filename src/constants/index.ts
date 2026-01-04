import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
//import project3 from "../assets/projects/project-3.webp";
//import project4 from "../assets/projects/project-4.webp";

// TIPOS
type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

type Project = {
  title: string;
  image: string; // como importamos .webp, es string
  description: string;
  technologies: string[];
  demoUrl:string
  codeUrl: string


};

type Contact = {
  address: string;
  phoneNo: string;
  email: string;
};

// CONTENIDO
export const HERO_CONTENT: string = `I am a JavaScript developer focused on React Native, React, Next.js, and NestJS. I enjoy building modern applications, learning best practices, and improving my skills through hands-on projects. I am motivated to grow as a developer and contribute to real-world solutions with clean and maintainable code.`;

export const ABOUT_TEXT: string = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],

  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],

  }

];

export const PROJECTS: Project[] = [
  {
    title: "Renta-Cars",
    image: project1,
    description:
      "Renta-cars is a web application project for managing and renting cars. It's a modern solution built with Next.js and TypeScript that integrates user authentication, payment processing, database management, and file uploads.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","Prisma","Axios"],
    codeUrl: "https://github.com/smithmoreno12/renta-cars",
    demoUrl: "https://renta-cars.vercel.app"
  },
  {
    title: "Landing-Page-Bank",
    image: project2,
    description:
      "This is a landing page project for a bank, developed using modern frontend technologies. The project is built with Next.js as the main framework, uses Tailwind CSS for styling, Framer Motion for animations, and TypeScript for static typing.",
    technologies: ["NextJS", "Tailwind CSS", "Framer Motion", "TypeScript"],
    codeUrl: "https://github.com/smithmoreno12/landing-page-bank",
    demoUrl: "https://landing-page-bank-lilac.vercel.app"
  },
];

export const CONTACT: Contact = {
  address: "New York, NY 10153",
  phoneNo: "+1(729)759709",
  email: "maickcupper@gmail.com",
};
