import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    bosch,
    pygame,
    model,
    blog,

 
   
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Project Trainee",
      company_name: "Bosch",
      icon:bosch,
      iconBg: "#383E56",
      date: "February 2022 - May 2022",
      points: ["Developed a deep learning model for answering questions from text.", "Developed a system for automated form filling using Natural Language Processing."
       
      ],
    },
    {
      title: "Assocaiate Software Developer",
      company_name: "Bosch",
      icon: bosch,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Present",
      points: [
        "Developed a web application",
        "Team worker.",
        "Worked in Agile environment."],
    },
    
    
  ];
  
  
  
  const projects = [
    {
      name: "Blog app",
      description:
        "Web-based platform that allows users to search,read create and edit blogs.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "HTML,CSS,JAVASCRIPT",
          color: "pink-text-gradient",
        },
      ],
      image:blog ,
      source_code_link: "https://github.com/Rahuram841/Gateway-project",
    },
    {
      name: "Question Generation from given text",
      description:
       [ "Build a model by fine tuning T5 transformer on SQUAD dataset",
        "Released in Huggingface."],
      tags: [
        {
          name: "Pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "Google colab",
          color: "green-text-gradient",
        },
      ],
      image: model,
      source_code_link: "https://github.com/Rahuram841/mini",
    },
    {
      name: "Python Game ",
      description:
        "A mixture of games using pygame",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "PyGame",
          color: "green-text-gradient",
        },
       
      ],
      image: pygame,
      source_code_link: "https://github.com/Rahuram841/game",
    },
  ];
  
  export { services, technologies, experiences, projects };