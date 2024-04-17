
import img from '../assets/learning.png'
import web from '../assets/web-development.png'
import tool from '../assets/tool.png'
import fe from '../assets/front-end.png'
import p1 from '../assets/logoo.png'
import p2 from '../assets/image.png'
import p3 from '../assets/homehub.jpeg'



export const SKILLS =[
    {
        title: "Frontend",
        icon: fe,
        skills:[
            {skill:"HTML" ,percentage:"80%"},
            {skill:"CSS" ,percentage:"75%"},
            {skill:"JS" ,percentage:"70%"},
            {skill:"REACT" ,percentage:"65%"},
            {skill:"FLUTTER" ,percentage:"70%"}

        ]
    },
    {
        title: "Backend",
        icon: web,
        skills:[
            {skill:"SQL" ,percentage:"70%"},
            {skill:"NODE" ,percentage:"60%"},
            // {skill:"HTML" ,percentage:"90%"},
            // {skill:"HTML" ,percentage:"85%"},

        ]
    },
    {
        title: "Tools",
        icon: tool,
        skills:[
            {skill:"GIT & GITHUB" ,percentage:"60%"},
            {skill:"VISUAL STUDIO CODE" ,percentage:"75%"},
            {skill:"ANDROID STUDIO" ,percentage:"60%"},
            {skill:"FIGMA" ,percentage:"70%"}
        ]
    },
    {
        title: "Soft Skills",
        icon: img,

        skills:[
            {skill:"COMMUNICATION" ,percentage:"70%"},
            {skill:"PROBLEM-SOLVING" ,percentage:"80%"},
            {skill:"CREATIVITY" ,percentage:"70%"},
            {skill:"TEAMWORK" ,percentage:"80%"}
        ]
    },
];

export const WORK_EXPERIENCE =[
    {
        title:"ReactJs Intern at Krupa Info Services",
        date:"Januaray 2024 - Present",
        responsibilites:[
            "I developed various components for the Zwaara Healthcare System, such as medical and non-medical sections, login pop-ups, and doctor appointment forms. These components utilized hooks concepts like useState, useEffect, useRef, and others.",
            "I added features like booking doctor appointments, managing fees, user authentication, notifications, and shared state across different components using Context.",
            "I worked closely with the backend team to integrate everything smoothly.",
        ]
    },
    {
        title:"ReactJs Intern at Krupa Info Services",
        date:"Januaray 2024 - Present",
        responsibilites:[
            "I developed various components for the Zwaara Healthcare System, such as medical and non-medical sections, login pop-ups, and doctor appointment forms. These components utilized hooks concepts like useState, useEffect, useRef, and others.",
            "I added features like booking doctor appointments, managing fees, user authentication, notifications, and shared state across different components using Context.",
            "I worked closely with the backend team to integrate everything smoothly.",
        ]
    },
    {
        title:"ReactJs Intern at Krupa Info Services",
        date:"Januaray 2024 - Present",
        responsibilites:[
            "I developed various components for the Zwaara Healthcare System, such as medical and non-medical sections, login pop-ups, and doctor appointment forms. These components utilized hooks concepts like useState, useEffect, useRef, and others.",
            "I added features like booking doctor appointments, managing fees, user authentication, notifications, and shared state across different components using Context.",
            "I worked closely with the backend team to integrate everything smoothly.",
        ]
    },
];

export const PROJECTS_DETAILS=[
    {
        title:"Zwaara",
        photo:p1,
        subtitle:'Medical Website Clone',
        link:'https://zwaara.netlify.app/',
    },
    {
        title:'Delicious Food Blog',
        photo:p2,
        subtitle:'Food Blog Website Clone',
        link:'https://newfoodblog.netlify.app/',

    },
    {
        title:'Homehub',
        photo:p3,
        subtitle:'E-commerce Application(Flutter)',
        link:'https://www.linkedin.com/posts/kaushikkumar-kashyap_excited-to-share-my-project-named-home-hub-activity-7093545041125662720-Py5E?utm_source=share&utm_medium=member_android',

    },
    // {
    //     title:'Delecious Fodd Blog',
    //     photo:p2,
    //     subtitle:'Medical Website clone',
    //     link:'https://kaushiktest.netlify.app',

    // },
    
];