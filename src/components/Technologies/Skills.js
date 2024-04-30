import { DiHtml5,DiNodejs, DiJavascript1, DiPhp, DiPython, DiWordpress, DiDrupal, DiAngularSimple, DiPostgresql } from "react-icons/di";
import { SiGit,SiCss3, SiMysql,SiNextdotjs, SiTypescript } from "react-icons/si";
import { RiReactjsLine,  } from "react-icons/ri";


export const Skills = [
  {
    slug: "javascript",
    Component: DiJavascript1,
    title: "Javascript",
    Description: () => <>Dynamic client-side scripting and interactive web applications</>,
  },
  {
    slug: "nodejs",
    Component: DiNodejs,
    title: "Node Js",
    Description: () => <>Building scalable server-side applications and RESTful APIs with Node.js</>,
  },
  {
    slug: "react",
    Component: RiReactjsLine,
    title: "React",
    Description: () => <>Developing responsive UIs and single-page applications with React</>,
  },
  {
    slug: "next JS",
    Component: SiNextdotjs,
    title: "NextJs",
    Description: () => <>Optimizing and automating web performance with server-side rendering in Next.js</>,
  },
  {
    slug: "php",
    Component: DiPhp,
    title: "PHP",
    Description: () => <>Server-side scripting for dynamic and interactive websites with PHP</>,
  },
  {
    slug: "typescript",
    Component: SiTypescript,
    title: "Typescript",
    Description: () => <>Enhancing JavaScript code reliability and maintainability with TypeScript</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Designing visually engaging and responsive web designs with CSS3</>,
  },
  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Managing databases and performing complex queries with MySQL</>,
  },
  {
    slug: "python",
    Component: DiPython,
    title: "Python",
    Description: () => <>Versatile scripting and automation with Python</>,
  },
  {
    slug: "drupal",
    Component: DiDrupal,
    title: "Drupal",
    Description: () => <>Building and managing content-rich sites efficiently with Drupal</>,
  },
  {
    slug: "wordpress",
    Component: DiWordpress,
    title: "Wordpress",
    Description: () => <>Creating and customizing websites with WordPress for user-friendly experiences</>,
  },
  {
    slug: "postgres",
    Component: DiPostgresql,
    title: "PostgreSQL",
    Description: () => <>Advanced data management and integration with PostgreSQL databases</>,
  },
  {
    slug: "html5",
    Component: DiHtml5,
    title: "HTML5",
    Description: () => <>Crafting the structure and presentation of web content with HTML5</>,
  },
  {
    slug: "angular",
    Component: DiAngularSimple,
    title: "Angular",
    Description: () => <>Developing robust, scalable web applications with Angular framework</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Version control and collaborative software development with Git</>,
  },
];

