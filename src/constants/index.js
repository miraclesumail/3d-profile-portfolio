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
    title: "关于",
  },
  {
    id: "work",
    title: "工作",
  },
  {
    id: "contact",
    title: "联系",
  },
];

const services = [
  {
    title: "网页 开发",
    icon: web,
  },
  {
    title: "RN 开发",
    icon: mobile,
  },
  {
    title: "后端 开发",
    icon: backend,
  },
  {
    title: "内容 创作者",
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
    title: "React开发",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "使用 React.js 及其他相关技术开发和维护 Web 应用程序.",
      "与包括设计师、产品经理和其他开发人员在内的跨职能团队合作，创造高质量的产品.",
      "实施响应式设计并确保跨浏览器兼容性.",
      "参与代码审查并为其他开发人员提供建设性反馈.",
    ],
  },
  {
    title: "React Native开发",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "使用 React.js 及其他相关技术开发和维护 Web 应用程序.",
      "与包括设计师、产品经理和其他开发人员在内的跨职能团队合作，创造高质量的产品.",
      "实施响应式设计并确保跨浏览器兼容性.",
      "参与代码审查并为其他开发人员提供建设性反馈.",
    ],
  },
  {
    title: "Web开发",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "使用 React.js 及其他相关技术开发和维护 Web 应用程序.",
      "与包括设计师、产品经理和其他开发人员在内的跨职能团队合作，创造高质量的产品.",
      "实施响应式设计并确保跨浏览器兼容性.",
      "参与代码审查并为其他开发人员提供建设性反馈.",
    ],
  },
  {
    title: "全站开发",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "使用 React.js 及其他相关技术开发和维护 Web 应用程序.",
      "与包括设计师、产品经理和其他开发人员在内的跨职能团队合作，创造高质量的产品.",
      "实施响应式设计并确保跨浏览器兼容性.",
      "参与代码审查并为其他开发人员提供建设性反馈.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "这是一个基于网络的平台，用户可以在此搜索、预订和管理来自不同供应商的租车服务，为出行需求提供便捷高效的解决方案.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/miraclesumail/rent-a-car",
  },
  {
    name: "Job IT",
    description:
      "Web应用程序使用户能够搜索职位空缺、查看职位的预计薪资范围，并根据其当前位置查找可用职位",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "一个全面的旅行预订平台，允许用户预订航班、酒店和租车，并提供热门目的地的精选推荐。",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
