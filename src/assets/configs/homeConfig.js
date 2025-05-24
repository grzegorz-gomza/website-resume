import React from 'react'
import { BiRocket, BiLibrary } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { FaHardHat, FaUniversity, FaTools } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { SiPandas, SiCodecademy} from "react-icons/si";



const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Grzegorz Gomza</strong>
        </h1>,
    titles: [
        "An AI Engineer",
        "A Machine Learning Specialist",
        "A Civil Engineer",
    ],
    about: {
        start: "Machine Learning Engineer with a background in Civil Engineering, applying advanced analytical and problem-solving skills to extract impactful insights from extensive datasets and drive strategic, data-informed decisions. My expertise in structural analysis and design has cultivated a strong grasp of complex systems, enabling me to adress the buissness problems and needs with new data and AI driven technologies.",
        exit: "Fluent at Python, SQL databases, Scikit-learn and highly skilled in Deep Learning and AI solutions. " +
            "Constantly developing skills to be always up to date. "
    },
    workTimeline: [
        {
            title: "Freelancer",
            company: "",
            description:
            "I developed AI applications, including chatbots and AI agents, for various companies in the e-commerce sector. I completed numerous machine learning projects for a range of clients, such as e-commerce businesses and startups. My responsibilities included designing and implementing machine learning models to enhance product recommendation accuracy and improve customer segmentation. Additionally, I created predictive analytics tools to forecast sales trends and optimize inventory management. Overall, I applied my skills in machine learning and data analysis to support business growth and boost customer satisfaction.",
            date: "Ongoing",
            icon: <DiCodeigniter />,
            tags: ["OpenAI", "LLMs", "RAGs", "LangChain", "LangGraph", "Neo4j", "MongoDB", "MLFlow", "PyTorch", "Huggingface", "BERT"],
        },
        {
            title: "Data Scientist: Machine Learning",
            company: "CodeAcademy",
            description: "Completed Machine Learning program (~350 hrs).",
            date: "11.2023 - 01.2025",
            icon: <SiCodecademy />,
            tags: ["machine learning", "python", "data science"],
        },
        {
            title: "Data Science BootCamp",
            company: "InfoShare Academy",
            description: "Completed a Data Science BootCamp (~370 hrs).",
            date: "12.2023 - 07.2024",
            icon: <BiRocket />,
            tags: ["data science", "python", "machine learning"],
        },
        {
            title: "Python for Data Science / SQL / Git & GitHub",
            company: "CodeAcademy",
            description:
            "Studying Python for Data Science (~40 hrs), Learn SQL (~20 hrs), and Learn Git & GitHub.",
            date: "11.2023",
            icon: <SiPandas />,
            tags: ["python", "sql", "git"],
        },
        {
            title: "Structural Engineer",
            company: "Conzett Bronzini Partner AG",
            description:
            "Main project engineer providing structural calculations and sub-project management for the project 'Renovation and Conservation of the National Library in Bern.' The project involves a major change in the use of the part of the building called the tower of books, as well as a series of structural strengthening necessary due to modern requirements for the resilience of buildings in the event of an earthquake.",
            date: "09.2023 - 07.2024",
            icon: <BiLibrary />,
            tags: ["structural engineering", "project management", "earthquakes"],
        },
        {
            title: "Junior Project Manager / Consulting Specialist Engineer",
            company: "Gruner AG",
            description:
            "New construction and conversion projects according to SIA and Eurocode: Multi-family houses with parking garage, industrial buildings, steel production halls, earthquake verification according to the response spectrum method, expert opinions and reinforcements. Compiling verifiable calculations for inspection engineers according to Eurocode and TWK. Consulting specialist engineer for major reconstruction projects.",
            date: "06.2018 - 12.2020 / 01.2021 - 03.2025",
            icon: <FaTools />,
            tags: ["project management", "consulting", "structural calculations"],
        },
        {
            title: "Structural Engineer",
            company: "FHP Bauingenieure AG",
            description:
            "Project manager and team leader for all projects in the construction department: concrete and masonry constructions, steel construction, infrastructure structures, geotechnical calculations. Handled calculation of fees and quotations using a proprietary Excel program based on probability theory. Overseeing financial control and supplement management.",
            date: "01.2021 - 05.2023",
            icon: <GiModernCity />,
            tags: ["team leadership", "concrete structures", "masonry", "steel"],
        },
        {
            title: "Design and Structural Engineer",
            company: "Ingenieurbüro Berthold Berndt",
            description:
            "Structural design, formwork plans, reinforcement plans, and position plans for apartment buildings, commercial buildings, and single-family houses. Processed over 100 projects.",
            date: "07.2015 - 05.2018",
            icon: <FaHardHat />,
            tags: ["design", "structural engineering", "reinforcement plans"],
        },
        {
            title: "Design Engineer",
            company: "Ingenieurbüro L-Bit",
            description:
            "Drew reinforcement plans for major projects, including the Henniger Turm in Frankfurt am Main (140m) and Axeltorv in Copenhagen (5 towers up to 61m).",
            date: "04.2014 - 01.2015",
            icon: <FaHardHat />,
            tags: ["design", "tower buildings", "reinforcement"],
        },
        {
            title: "Master's Degree in Civil Engineering",
            company: "University of Science in Wroclaw",
            description:
            "Graduated with distinction after completing a master's program in Civil Engineering.",
            date: "2007 - 2012",
            icon: <FaUniversity />,
            tags: ["civil engineering", "structural design"],
        },
    ]
}


export default homeConfig

