// src/data/dummydata.js

import {
  Settings,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  HdrStrong,
  Verified,
  VerifiedUser,
  SensorOccupied,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

// 1. Ajout des identifiants (`id`) à chaque objet de navlink :
export const navlink = [
  { id: 1, url: "/",         text: "Home"    },
  { id: 2, url: "/about",    text: "About"   },
  { id: 3, url: "/services", text: "Skill"   },
  { id: 4, url: "/contact",  text: "Contact" },
];

// 2. Ajout d’un `id` au seul objet du tableau `home` :
export const home = [
  {
    id: 1,
    text:   "HELLO I'M",
    name:   "Oulji Zakaria",
    post:   "Front-end",
    design: "Back-end",
    desc:   "Full-Stack Developer | Solutions End-to-End | API & Interfaces Unifiées | Sécurité & Scalabilité",
  },
];

// 3. Ajout d’un `id` à l’objet unique de `about` :
export const about = [
  {
    id: 1,
    desc:  "Fort de cinq années en développement web, je bénéficie d’une formation solide et d’une grande capacité d’adaptation aux outils émergents. Polyvalent, j’interviens tant en front-end qu’en back-end, avec une exigence constante de performance et de qualité. Autonome tout en étant à l’aise en environnement collaboratif, je fais preuve de rigueur et d’organisation pour tenir délais et objectifs. Reconnu pour ma curiosité et ma proactivité, je m’engage pleinement dans l’amélioration continue, au service de la réussite des projets et de la satisfaction des utilisateurs.",
    desc1: "Passionné par l’innovation, j’ai développé une forte autonomie d’apprentissage : je maîtrise la veille technologique, j’expérimente régulièrement de nouvelles solutions et j’intègre rapidement les frameworks et outils émergents pour optimiser les performances et l’évolutivité des applications.",
    cover: "./images/man.png",
  },
];

// Les sections `services`, `project`, `portfolio`, `testimonials`, `blog`, `contact`, `social` 
// avaient déjà des `id` (ou ne nécessitaient pas d’en ajouter pour résoudre les warnings). 
// Vous pouvez simplement garder leurs définitions telles quelles. Par exemple :
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Architecture & Développement Logiciel",
    desc: [
      { image: require("../data/images/ts.png"),    name: "TypeScript" },
      { image: require("../data/images/react.png"), name: "React"      },
      { image: require("../data/images/nodes.png"), name: "Node.js"    },
      { image: require("../data/images/angular.png"), name: "Angular"  },
      { image: require("../data/images/next.png"),   name: "Next.js"    },
      { image: require("../data/images/rpgle.png"),  name: "ILE RPG"   },
      { image: require("../data/images/lara.png"),   name: "Laravel"   },
    ],
  },
  {
    id: 2,
    icon: <SensorOccupied />,
    title: "Leadership & croissance d'équipe",
    desc: [
      { image: "", name: "Team leadership" },
      { image: "", name: "Code review"     },
      { image: "", name: "Agile/Scrum"     },
      { image: "", name: "Technical Planning" },
    ],
  },
  {
    id: 3,
    icon: <VerifiedUser />,
    title: "Point Fort",
    desc: [
      { image: "", name: "Autodidacte"           },
      { image: "", name: "Problem Solving"       },
      { image: "", name: "Performance Optimization" },
      { image: "", name: "Technical Documentation" },
      { image: "", name: "Cross-Team collaboration" },
    ],
  },
];

export const project = [
  { id: 1, icon: <CloudOutlined />,     num: "89",   title: "HAPPY CLIENTS"         },
  { id: 2, icon: <FavoriteBorder />,    num: "231",  title: "PROJECTS COMPLETED"    },
  { id: 3, icon: <Public />,            num: "108",  title: "FILES DOWNLOADED"      },
  { id: 4, icon: <PersonOutlined />,    num: "1446", title: "LINES OF CODE"         },
];

export const portfolio = [
  { id: 1, cover: "../images/port/port1.jpg", name: "Brand",      category: "marketing",   title: "Brex Logo" },
  { id: 2, cover: "../images/port/port2.jpg", name: "Brand",      category: "design",      title: "Brex Logo" },
  { id: 3, cover: "../images/port/port3.jpg", name: "Brand",      category: "development", title: "Brex Logo" },
  { id: 4, cover: "../images/port/port4.jpg", name: "Brand",      category: "marketing",   title: "Brex Logo" },
  { id: 5, cover: "../images/port/port5.jpg", name: "Brand",      category: "design",      title: "Brex Logo" },
  { id: 6, cover: "../images/port/port6.jpg", name: "Brand",      category: "development", title: "Brex Logo" },
];

export const testimonials = [
  { id: 1, text: "Lorem ...", image: "./images/testimonials/team-1.png", name: "Alamin Musa", post: "Front End Developer" },
  { id: 2, text: "Lorem ...", image: "./images/testimonials/team-2.png", name: "Alex Ander",  post: "Back End Developer"  },
  { id: 3, text: "Lorem ...", image: "./images/testimonials/team-3.png", name: "GorkCoder",   post: "React Developer"     },
];

export const blog = [
  { id: 1, title: "Master These Awesome",   date: "Jun 27, 2022", author: "Dorian Gray", desc: "Lorem Ipsum ...", cover: "./images/blog/b1.png" },
  { id: 2, title: "Best Design Items to Appeal", date: "Jun 27, 2022", author: "Dorian Gray", desc: "Lorem Ipsum ...", cover: "./images/blog/b2.png" },
  { id: 3, title: "The 20 Best Lightroom Presets", date: "Jun 27, 2022", author: "Dorian Gray", desc: "Lorem Ipsum ...", cover: "./images/blog/b3.png" },
];

export const contact = [
  { id: 1, icon: <AddLocationAltOutlined />, text1: "1000 Bruxelles", text2: "Belgique" },
  { id: 2, icon: <PhoneIphone />,            text1: "0470938621",   text2: ""         },
  { id: 3, icon: <EmailOutlined />,           text1: "zou@zoulji.com", text2: ""       },
];

export const social = [
  { id: 1, icon: <Facebook />, link: "https://www.facebook.com" },
  { id: 2, icon: <LinkedIn />, link: "https://www.linkedin.com/in/zakaria-oulji" },
  { id: 3, icon: <Instagram />, link: "https://www.instagram.com/universofcode?igsh=MWtlcnY1enc0cmhhaA==" },
  { id: 4, icon: <GitHub />,   link: "https://github.com/zakariaOulji" },
];
