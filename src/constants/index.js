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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "Web Development",
      icon: web,
    },
    {
      title: "Familiar to React",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Science Engneering",
      company_name: "VIT-BHOPAL",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2020 - Present",
      points: [
        "Currently I'am persuing my graduation in Computer Science Engneering",
        "I have done many projects till now some of them are present in the project section of this portfoilo",
        "Coding environment is very good in my college",
        "I have participated in many hackathons on various platforms. I have learned many technologies during this time.",
      ],
    },
    {
      title: "High School",
      company_name: "Shimla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2016 - Feb 2018",
      points: [
        "I have done my high school from Boys school in Shimla Himachal Pradesh",
        "I was very good in studies during my high school and I managed to get 85 percent in my boards exams",
        "I have learned many basic subjects which everyone studies in their school",
        
      ],
    },
    {
      title: "Matriculation",
      company_name: "Monal Public School",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2012 - Jan 2016",
      points: [
        "I have done my Matriculation form Monal Public School Shimla",
        "I managed to get 90 percent in my matric board exams and was ranked one in my school",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Sit nisi quae obcaecati",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Sit nisi quae obcaecati",
      ],
    },
    {
      title: "ELEMENTARY",
      company_name: "Himalyan Public School",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2000 - 2012",
      points: [
        "I have done my elementary schooling from himalyan public school. It is in my town",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi quae obcaecati",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit Sit nisi quae obcaecati",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nisi quae obcaecati",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sahil proved me wrong.",
      name: "Himani",
      designation: "client",
      company: "freelance",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Sahil does.",
      name: "Hemant",
      designation: "Client",
      company: "Freelance",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Sahil optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "Client",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Moviex",
      description:
        "movix is a react based movie website that allow users to search their favourite movies and tv shows and search for millions of movies and see their idmb ratings, top trending movies , trailer of the movies and much more.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/rathour08/Moviz-project",
    },
    {
      name: "ShopHouse",
      description:
        "This is a full-stack Ecommerce project build using the MERN stack (MongoDB, Express.js, React, and Node.js). I have integrated the Razorpay payment gateway! for payments. User can add to cart, sort, add filters to products and much more",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/rathour08/E-commerce-Project",
    },
    {
      name: "Article Summarizing App",
      description:
        "This is an article summarizer application build with the help of openAI's GPT models. I have used the most indemand technologies such as reactjs, vite, tailwind css, redux toolkit and rapid api. This application takes the url of any article and give user its summary very fast using open ai apis",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "open AI apis",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/rathour08/AI_Article_Summarizer_app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };