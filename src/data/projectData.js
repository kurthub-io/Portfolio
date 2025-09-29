// Cover Photos
import HW from "../assets/Project1_Symposium/Hello_World.png";
import SAS from "../assets/Project2_StealAndStealth/Screenshot_2025-06-25_073038.png.png";
import WFP from "../assets/WeatherForecastApp/2.png";
import TDA from "../assets/Todo_App/Todo.png"
import CNC from "../assets/ClickNcartProject/clickncart1.png";
import SMX from "../assets/MovieList/M1.png";

// Imported SVG (Languages Category)
import CSS from "../assets/SVG ICONS/css3-original.svg";
import Java from "../assets/SVG ICONS/java-original.svg";
import HTML from "../assets/SVG ICONS/html5-original.svg";
import CSharp from "../assets/SVG ICONS/csharp-original.svg";
import Tailwind from "../assets/SVG ICONS/tailwindcss-original.svg";
import Javascript from "../assets/SVG ICONS/javascript-original.svg";

// Imported SVG (Tools Category)
import Git from "../assets/SVG ICONS/git-original.svg";
import Unity from "../assets/SVG ICONS/unity-original.svg";
import Figma from "../assets/SVG ICONS/figma-original.svg";
import Canva from "../assets/SVG ICONS/canva-original.svg";
import VSCode from "../assets/SVG ICONS/vscode-original.svg";
import ReactIcon from "../assets/SVG ICONS/react-original.svg";
import VStudio from "../assets/SVG ICONS/visualstudio-original.svg";
import SourceTree from "../assets/SVG ICONS/sourcetree-original.svg";

export const projects = [
  {
    id: 1,
    title: "Hello World",
    description:
      "Hello World is a 2D programming game that teaches the basics of Java and C# in a fun and interactive way, turning theory into hands-on practice.",
    image: HW,
    tags: [
      { name: "C#", svg: CSharp, type: "Language" },
      { name: "Java", svg: Java, type: "Language" },
      { name: "Unity", svg: Unity, type: "Engine" },
      { name: "Visual Studio", svg: VStudio, type: "Tool" },
      { name: "SourceTree", svg: SourceTree, type: "Tool" },
      { name: "Git", svg: Git, type: "Tool" },
      { name: "Figma", svg: Figma, type: "Tool" },
      { name: "Github", icon: "devicon-github-original", type: "Tool" },
    ],
    category: "Game Development",
    link: "",
  },
  {
    id: 2,
    title: "Steal and Stealth",
    description:
      "A 3D game developed during my internship at Lamina Studios, showcasing teamwork, creativity, and applied game development skills.",
    image: SAS,
    tags: [
      { name: "C#", svg: CSharp, type: "Language" },
      { name: "Unity", svg: Unity, type: "Engine" },
      { name: "Figma", svg: Figma, type: "Tool" },
      { name: "Canva", svg: Canva, type: "Tool" },
    ],
    category: "Game Development",
    link: "",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A simple Weather Forecast App with real-time API integration, search functionality, responsive background, and interactive UI design.",
    image: WFP,
    tags: [
      { name: "React", svg: ReactIcon, type: "Language" },
      { name: "Javascript", svg: Javascript, type: "Language" },
      { name: "Tailwind", svg: Tailwind, type: "Framework" },
      { name: "VS Code", svg: VSCode, type: "Tool" },
    ],
    category: "Web Development",
    link: "https://k-rion.github.io/Weather-Forecast-App/",
  },
  {
    id: 4,
    title: "Taskflow",
    description:
      "A simple To-Do web app that lets users add, update, delete, and mark tasks with an underline when completed",
    image: TDA,
    tags: [
      { name: "React", svg: ReactIcon, type: "Language" },
      { name: "Javascript", svg: Javascript, type: "Language" },
      { name: "Tailwind", svg: Tailwind, type: "Framework" },
      { name: "VS Code", svg: VSCode, type: "Tool" },
    ],
    category: "Web Development",
    link: "https://k-rion.github.io/TodoList/",
  },
  {
    id: 5,
    title: "ClickNcart",
    description:
      "ClickNcart is an e-commerce website design built with HTML and CSS. It focuses on enhancing front-end design skills, while functionality is not yet implemented.",
    image: CNC,
    tags: [
      { name: "HTML", svg: HTML, type: "Language" },
      { name: "CSS", svg: CSS, type: "Language" },
      { name: "VS Code", svg: VSCode, type: "Tool" },
    ],
    category: "Web Development",
    link: "https://k-rion.github.io/ClickNcart/",
  },
  {
    id: 6,
    title: "StreamX",
    description:
      "StreamX is a movie listing application powered by a REST API, featuring real-time fetching of the latest releases, advanced search, genre filtering, and year-based browsing.",
    image: SMX,
    tags: [
      { name: "React", svg: ReactIcon, type: "Language" },
      { name: "Javascript", svg: Javascript, type: "Language" },
      { name: "Tailwind", svg: Tailwind, type: "Framework" },
      { name: "VS Code", svg: VSCode, type: "Tool" },
    ],
    category: "Web Development",
    link: "https://k-rion.github.io/Movie-List/",
  },
];
