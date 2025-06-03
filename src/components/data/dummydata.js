import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube, HdrStrong, Verified, VerifiedUser, SensorOccupied, LinkedIn, GitHub } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  // {
  //   url: "/portfolio",
  //   text: "Portfolio",
  // },
  // {
  //   url: "/testimonials",
  //   text: "Testimonials",
  // },
  // {
  //   url: "/blog",
  //   text: "Blog",
  // },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "Oulji Zakaria",
    post: "Front-end",
    design: "Back-end",
    desc: "Full-Stack Developer | Solutions End-to-End | API & Interfaces Unifiées | Sécurité & Scalabilité",
  },
]
export const about = [
  {
    desc: "Fort de cinq années en développement web, je bénéficie d’une formation solide et d’une grande capacité d’adaptation aux outils émergents. Polyvalent, j’interviens tant en front-end qu’en back-end, avec une exigence constante de performance et de qualité. Autonome tout en étant à l’aise en environnement collaboratif, je fais preuve de rigueur et d’organisation pour tenir délais et objectifs. Reconnu pour ma curiosité et ma proactivité, je m’engage pleinement dans l’amélioration continue, au service de la réussite des projets et de la satisfaction des utilisateurs.",
    desc1: "Passionné par l’innovation, j’ai développé une forte autonomie d’apprentissage : je maîtrise la veille technologique, j’expérimente régulièrement de nouvelles solutions et j’intègre rapidement les frameworks et outils émergents pour optimiser les performances et l’évolutivité des applications.",
    cover: "./images/man.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Architecture & Développement Logiciel",
    desc: [
      {
        image: require("../data/images/ts.png"), // Chemin vers votre image Clean Code
        name: "TypeScript"             // Nom ou légende
      },
      {
        image: require("../data/images/react.png"), // Chemin vers votre image Clean Code
        name: "React"             // Nom ou légende
      },
      {
        image: require("../data/images/nodes.png"), // Chemin vers votre image Clean Code
        name: "Node.Js"             // Nom ou légende
      },
      {
        image: require("../data/images/angular.png"), // Chemin vers votre image Clean Code
        name: "Angular"             // Nom ou légende
      },
      {
        image: require("../data/images/next.png"), // Chemin vers votre image Clean Code
        name: "Next.js"             // Nom ou légende
      },
      {
        image: require("../data/images/rpgle.png"), // Chemin vers votre image Clean Code
        name: "ILE RPG"             // Nom ou légende
      },
      {
        image: require("../data/images/lara.png"), // Chemin vers votre image Clean Code
        name: "Laravel"             // Nom ou légende
      },
    ],
  },
  {
    id: 2,
    icon: <SensorOccupied />,
    title: "Leadership & croissance d'équipe",
    desc : [
      {
        image: "",
        name: "Team leadership"             // Nom ou légende
      },
      {
        image: "",
        name: "Code review"             // Nom ou légende
      },      
      {
        image: "",
        name: "Agile/Scrum"             // Nom ou légende
      },
      {
        image: "",
        name: "Technical Planning"             // Nom ou légende
      },


      
    ]
  },
  {
    id: 3,
    icon: <VerifiedUser />,
    title: "Point Fort",
    desc : [
      {
        image: "",
        name: "Autodidacte"             // Nom ou légende
      },
      {
        image: "",
        name: "Problem Solving"             // Nom ou légende
      },      
      {
        image: "",
        name: "Performance Optimization"             // Nom ou légende
      },
      {
        image: "",
        name: "Technical Documentation"             // Nom ou légende
      },
      {
        image: "",
        name: "Cross-Team collaboration"             // Nom ou légende
      },


      
    ]
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "1000 Bruxelles",
    text2: "Belgique",
  },
  {
    icon: <PhoneIphone />,
    text1: "0470938621",
  },
  {
    icon: <EmailOutlined />,
    text1: "zou@zoulji.com",
  },
]
export const social = [
  {
    icon: <Facebook />,
    link: "https://www.facebook.com",
  },
  {
    icon: <LinkedIn />,
    link:'https://www.linkedin.com/in/zakaria-oulji'
  },
  {
    icon: <Instagram />,
    link:'https://www.instagram.com/universofcode?igsh=MWtlcnY1enc0cmhhaA=='
  },
  {
    icon: <GitHub />,
  },
]
