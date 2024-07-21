import certified from '../assets/certified.png'
import academy from '../assets/academy.png'
import personalise from '../assets/personalise.png'
import { faBriefcase, faHistory, faHome } from '@fortawesome/free-solid-svg-icons'
import { faContactBook } from '@fortawesome/free-regular-svg-icons'

export const navItems = [
    {
        name: 'Home',
        path: '',
        icon: faHome
    },
    {
        name: 'Projects',
        path: 'projects',
        icon: faBriefcase
    },
    {
        name: 'Experience',
        path: 'experience',
        icon: faHistory
    },
    {
        name: 'Contact',
        path: 'contact',
        icon: faContactBook
    },
]

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            type: 'spring',
            stiffness: 50,
        },
    }),
}

export const experience = [
    {
        companyName: 'CareerNinja|LearnTube',
        location: 'Mumbai, India(WFH)',
        position: 'Software Developer',
        duration: 'March 2023 – Present',
        responsibilities: ['Developing a UI with optimized code to deliver the best user experience.', 'Taking end-to-end ownership of products, coordinating with back-end and QA teams to improve performance.', 'Continuously iterating new design approaches to enhance user engagement and analyzing conversion rates.', 'Following best practices for code maintainability.', 'Fixing issues and developing new requirements.'],
        techStack: 'Javascript, HTML, CSS, React, TailwindCSS, Redux'
    },
    {
        companyName: 'Alishar Contracting Pvt Ltd',
        location: 'Abha, Saudi Arabia',
        position: 'Junior Developer',
        duration: 'January 2021 – October 2022',
        responsibilities: ['Contributed to building a company portfolio project for its conglomerates', 'Worked with senior developers to enhance software functionality and performance'],
        techStack: 'Javascript, HTML, CSS, React, TailwindCSS'
    },
    {
        companyName: 'Alishar Contracting Pvt Ltd',
        location: 'Abha, Saudi Arabia',
        position: 'QC Engineer',
        duration: 'January 2020 – January 2021',
        responsibilities: ['Ensured quality control standards were met in various construction projects', 'Conducted inspections and audits to maintain compliance with industry standards'],
    },
    {
        companyName: 'Beaver Gulf Precast Concrete',
        location: 'Dubai, UAE',
        position: 'QC Engineer',
        duration: 'March 2018 – November 2019',
        responsibilities: ['Managed quality control processes for precast concrete production', 'Coordinated with project teams to resolve quality issues and improve production efficiency'],
    },
    {
        companyName: 'Brigade Enterprises Limited',
        location: 'Bengaluru, India',
        position: 'QC Engineer',
        duration: 'July 2015 – January 2018',
        responsibilities: ['Oversaw quality control for construction projects', 'Implemented quality management systems to ensure project standards were upheld'],
    },
]

export const myWork = [
    {
        appName: 'Certified App',
        description: 'This app creates customized MCQs, offers certifications, and recommends personalized learning journeys to enhance user skills and qualifications.',
        image: certified,
        duration: 'Jul 2023 - Present',
        techStack: [
            'Javascript',
            'React',
            'TailwindCSS',
            'Redux Toolkit'
        ],
        link: 'https://certified.learntube.ai/'
    },
    {
        appName: 'Personalise App',
        description: 'Designed to tailor courses based on users’ subject knowledge, this app uses interactive Q&A to generate customized syllabuses and delivers curated courses from YouTube',
        image: personalise,
        duration: 'Jun 2023 - Present',
        techStack: [
            'Javascript',
            'React',
            'TailwindCSS',
            'Redux Toolkit'
        ],
        link: 'https://personalise.learntube.ai/'
    },
    {
        appName: 'Academy App',
        description: 'Promotes certification programs by leveraging Instagram influencers, enhancing visibility and credibility through targeted social media engagement.',
        image: academy,
        duration: 'Feb 2024 - Present',
        techStack: [
            'Javascript',
            'React',
            'TailwindCSS',
            'Redux Toolkit'
        ],
        link: 'https://academy.learntube.ai'
    },
]
