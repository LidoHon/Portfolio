export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: 'Testimonials', link: '#testimonials' },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I value working closely with clients and maintaining clear communication",
    description: "a little bit about me",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Developing Abe's Garage: A Full Stack website.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Wanna work together?",
    // description: 'get in touch',
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fanos LMS",
    des: 'Fanos LMS, an online learning platform that provides free courses for Ethiopian high school students. The platform focuses on national exam preparation and STEM education through the STEEP program, delivering an accessible and user-friendly learning experience."',
    img: "/fan.png",
    iconLists: [
      "nuxt.svg",
      "vue.png",
      "/tail.svg",
      "Node.png",
      "JavaScript-logo.png",
    ],
    link: "https://www.fanoslms.org/",
  },
  {
    id: 2,
    title: "Minab Tech Portfolio Website",
    des: "Tech’s official portfolio website, showcasing the company’s projects, services, and achievements with a modern, responsive, and user-friendly design.",
    img: "/minab.png",
    iconLists: [
      "nuxt.svg",
      "vue.png",
      "/tail.svg",
      "Node.png",
      "JavaScript-logo.png",
    ],
    link: "https://www.minabtech.com/",
  },
  {
    id: 3,
    title: "RBY Foundation",
    des: "RBY Foundation website, an NGO platform designed to support children in need by enabling people to donate money, resources, and essential items",
    img: "/rby.png",
    iconLists: [
      "nuxt.svg",
      "vue.png",
      "/tail.svg",
      "Node.png",
      "JavaScript-logo.png",
    ],
    link: "https://www.rbyfoundation.org/",
  },
  {
    id: 1,
    title: "Hold My Hands",
    des: 'Hold My Hands: A Platform where people gather to help kids that are in need of help. Built with nuxtjs and Tailwind CSS."',
    img: "/hold.png",
    iconLists: [
      "nuxt.svg",
      "vue.png",
      "/tail.svg",
      "Node.png",
      "JavaScript-logo.png",
    ],
    link: "https://www.holdmyhandloved.org/",
  },
  {
    id: 2,
    title: "Evangadi Forum",
    des: 'Evangadi Forum: A platform where students can ask and answer questions, and engage with each other. Built with React, Mysql database, and Tailwind CSS."',
    img: "/evangadi_forum.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "Node.png",
      "JavaScript-logo.png",
      "mysql.png",
    ],
    link: "http://www.forumevangadi.com",
    github: "https://github.com/LidoHon/Evangadi-Forum-G2.git",
  },
  {
    id: 3,
    title: "Health Care Management System",
    des: "A comprehensive web application designed to streamline and manage patient care and administrative tasks in a healthcare setting. Features include appointment scheduling, patient management, SMS notifications, and an admin dashboard.",
    img: "/healthcare.png",
    iconLists: [
      "/appwrite-logo.png",
      "/twilio.png",
      "/tail.svg",
      "/shadcn.png",
      "/next.png",
      "/sentry-logo.png",
    ],
    link: "https://health-care-umber.vercel.app/",
    github: "https://github.com/LidoHon/HealthCare",
  },

  {
    id: 4,
    title: "Amazon-Clone",
    des: 'Amazon clone developed using React, Firebase, and Tailwind CSS".',
    img: "/amazon.png",
    iconLists: ["/re.svg", "/tail.svg", "JavaScript-logo.png", "firebase.png"],
    link: "https://exquisite-rabanadas-f7691d.netlify.app",
    github: "https://github.com/LidoHon/amazon-clone.git",
  },
  {
    id: 5,
    title: "Room Booking App",
    des: "Room Booking App is a web application built with Next.js, Appwrite, and Tailwind CSS.",
    img: "/screen.png",
    iconLists: ["/app.svg", "/tail.svg", "/ts.svg", "next.png"],
    link: "https://bookit-puce.vercel.app/",
    github: "https://github.com/LidoHon/bookit.git",
  },
  // {
  // 	id: 4,
  // 	title: 'Book shelf ',
  // 	des: 'A React application developed for a Udemy class challenge, allowing users to manage and organize their book collections with features for adding, removing, and categorizing books',
  // 	img: '/bookshelf.png',
  // 	iconLists: ['/re.svg', '/tail.svg', 'JavaScript-logo.png'],
  // 	link: 'https://book-shelf-snowy.vercel.app/',
  // 	github: 'https://github.com/LidoHon/bookShelf',
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Lidet was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.  If you're seeking to elevate your website and elevate your brand, Lidet is the ideal partner.",
    name: "Haymanot Honelign ",
    title: "Founder of Hanu_Bet and Hamek Design",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "juniour Frontend software developer | MInab Tech",
    desc: " I am a Frontend Software Developer at Minab Tech, specializing in building responsive and user-friendly web applications using Vue.js and Nuxt.js.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Full Stack Intern",
    desc: "Assisted in the development of a web-based platform using vuejs, nuxtjs, and tailwind.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/LidoHon",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/LidoHon",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/lidet-honelign-00a8ba242/",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    institution: "Evangadi Networks",
    year: 2024,
    image: "/LdetHonelignAssefa.jpg",
    link: "https://drive.google.com/file/d/17qBQ2ybN9oyo-JqTOItIrWVJSeMV1JcC/view?usp=sharing",
  },
  {
    id: 2,
    title: "Backend Development and APIs",
    institution: "FreeCode Camp",
    year: 2024,
    image: "/backend.png",
    link: "https://freecodecamp.org/certification/lido_hon/back-end-development-and-apis",
  },

  {
    id: 3,
    title: "AWS Cloud Technical Essentials ",
    institution: "Coursera",
    year: 2023,
    image: "/aws_essin.png",
    link: "https://coursera.org/share/de1b0f3e700f96c96c0c4496247b53fc",
  },

  {
    id: 4,
    title: "Migrating to the AWS Cloud",
    institution: "Coursera",
    year: 2023,
    image: "/migrating_to_aws_cloud.png",
    link: "https://coursera.org/share/d3bf489ac393f00f4181f59eae45b3fe",
  },
  {
    id: 5,
    title: "AI Career Essintials",
    institution: "ALX",
    year: 2024,
    image: "/alx.png",
  },
  // {
  //   id: 5,
  //   title: "Full-Stack Web Development",
  //   institution: "Evangadi Networks",
  //   year: 2024,
  //   image: "/LdetHonelignAssefa.jpg",
  // },
];
