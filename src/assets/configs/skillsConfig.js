import {
    SiPython,
    SiPostgresql,
    SiScikitlearn,
    SiPandas,
    SiNumpy,
    SiScipy,
    SiPlotly,
    SiStreamlit,
    SiTensorflow,
    SiKeras,
    SiPytorch,
    SiOpenai,
    SiGithub,
    SiLangchain,
    SiTableau,
    SiAnaconda,
    SiDbeaver,
    SiGooglecolab,
    SiJira,
    SiCplusplus,
    SiMongodb,
    SiJupyter,
    SiApachespark,
    SiFlask,
    SiMlflow,
    SiDvc
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import {
    BsFiletypeHtml,
    BsFiletypeCss
} from "react-icons/bs";
import { GiRapidshareArrow } from "react-icons/gi";
import {
    FaChartLine,
    FaCalculator,
    FaBrain,
    FaPuzzlePiece,
    FaProjectDiagram,
    FaSearchPlus,
    FaExclamationTriangle,
    FaLaptopCode,
    FaChartBar,
    FaSearch,
    FaUsers,
    FaDocker,
    FaAws
} from "react-icons/fa";
import { DiScrum, DiVisualstudio } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { SiNeo4J } from "react-icons/si";

import React from "react";
import { PiDogFill } from "react-icons/pi";

const skillsConfig = {
    developmentSkills: [
        {
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            className: "skill-icon",
            icon: <SiGithub size={50}/>,
            text: "Github"
        },
        {
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            className: "skill-icon",
            icon: <SiCplusplus size={50} />,
            text: "C++"
        },
        {
            className: "skill-icon",
            icon: <FaDocker size={50} />,
            text: "Docker"
        },
        {
            className: "skill-icon",
            icon: <DiVisualstudio size={50} />,
            text: "Visual Studio Code"
        },
        {
            className: "skill-icon",
            icon: <SiJupyter size={50} />,
            text: "Jupyter"
        },
        {
            className: "skill-icon",
            icon: <SiGooglecolab size={50} />,
            text: "Google Colab"
        },
        {
            className: "skill-icon",
            icon: <SiAnaconda size={50} />,
            text: "Anaconda"
        },
        {
            className: "skill-icon",
            icon: <DiScrum size={50} />,
            text: "Scrum"
        },
        {
            className: "skill-icon",
            icon: <SiJira size={50} />,
            text: "Jira"
        }
    ],
    dataSkills: [
        {
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "PostgresSQL"
        },
        {
            className: "skill-icon",
            icon: <VscAzure size={50} />,
            text: "Microsoft Azure AI"
        },
        {
            className: "skill-icon",
            icon: <FaAws size={50} />,
            text: "Amazon Web Services"
        },
        {
            className: "skill-icon",
            icon: <SiNeo4J size={50}/>,
            text: "Neo4J"
        },
        {
            className: "skill-icon",
            icon: <SiMongodb size={50} />,
            text: "MongoDB"
        },
        {
            className: "skill-icon",
            icon: <SiApachespark size={50} />,
            text: "PySpark"
        },
        {
            className: "skill-icon",
            icon: <SiNumpy size={50}/>,
            text: "Numpy"
        },
        {
            className: "skill-icon",
            icon: <SiPandas size={50}/>,
            text: "Pandas"
        },
        {
            className: "skill-icon",
            icon: <SiScipy size={50}/>,
            text: "Scipy"
        },
        {
            className: "skill-icon",
            icon: <SiDbeaver size={50} />,
            text: "DBeaver"
        },
    ],
    machineLearningSKills: [
        {
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikit-Learn"
        },
        {
            className: "skill-icon",
            icon: <BiNetworkChart size={50}/>,
            text: "XGBoost"
        },
        {
            className: "skill-icon",
            icon: <SiMlflow size={50}/>,
            text: "MLFlow"
        },
        {
            className: "skill-icon",
            icon: <SiDvc size={50}/>,
            text: "Data Version Control"
        },
        {
            className: "skill-icon",
            icon: <PiDogFill size={50}/>,
            text: "Dagshub"
        },
        {
            className: "skill-icon",
            icon: <GiRapidshareArrow size={50} />,
            text: "Rapids.AI"
        },
        {
            className: "skill-icon",
            icon: <FaChartLine size={50}/>,
            text: "Matplotlib"
        },
        {
            className: "skill-icon",
            icon: <FaChartLine size={50}/>,
            text: "Seaborn"
        },
        {
            className: "skill-icon",
            icon: <SiPlotly size={50}/>,
            text: "Plotly"
        },
        {
            className: "skill-icon",
            icon: <SiFlask size={50}/>,
            text: "Flask"
        },
        {
            className: "skill-icon",
            icon: <SiStreamlit size={50}/>,
            text: "Streamlit"
        },
        {
            className: "skill-icon",
            icon: <BsFiletypeHtml size={50}/>,
            text: "HTML"
        },
        {
            className: "skill-icon",
            icon: <BsFiletypeCss size={50}/>,
            text: "CSS"
        },
        {
            className: "skill-icon",
            icon: <SiTableau size={50} />,
            text: "Tableau"
        }
    ],
    aiSkills: [
        {
            className: "skill-icon",
            icon: <SiTensorflow size={50} />,
            text: "TensorFlow"
        },
        {
            className: "skill-icon",
            icon: <SiKeras size={50} />,
            text: "Keras"
        },
        {
            className: "skill-icon",
            icon: <SiPytorch size={50} />,
            text: "PyTorch"
        },
        {
            className: "skill-icon",
            icon: <SiOpenai size={50} />,
            text: "OpenAI"
        },
        {
            className: "skill-icon",
            icon: <SiLangchain size={50} />,
            text: "LangChain"
        },
        {
            className: "skill-icon",
            icon: <SiLangchain size={50} />,
            text: "LangGraph"
        },
    ],
    professionalSkills: [
        {
            className: "skill-icon",
            icon: <AiOutlineThunderbolt size={50} />,
            text: "Fast Learning"
        },
        {
            className: "skill-icon",
            icon: <FaCalculator size={50} />,
            text: "Mathematical & Analytical Skills"
        },
        {
            className: "skill-icon",
            icon: <FaBrain size={50} />,
            text: "Logical & Critical Thinking"
        },
        {
            className: "skill-icon",
            icon: <FaPuzzlePiece size={50} />,
            text: "Problem-Solving"
        },
        {
            className: "skill-icon",
            icon: <FaProjectDiagram size={50} />,
            text: "Project & Time Management"
        },
        {
            className: "skill-icon",
            icon: <FaSearchPlus size={50} />,
            text: "Attention to Detail"
        },
        {
            className: "skill-icon",
            icon: <FaExclamationTriangle size={50} />,
            text: "Risk Analysis"
        },
        {
            className: "skill-icon",
            icon: <FaLaptopCode size={50} />,
            text: "Technical Proficiency"
        },
        {
            className: "skill-icon",
            icon: <FaChartBar size={50} />,
            text: "Data Visualization"
        },
        {
            className: "skill-icon",
            icon: <FaSearch size={50} />,
            text: "Research Skills"
        },
        {
            className: "skill-icon",
            icon: <FaUsers size={50} />,
            text: "Teamwork and Collaboration"
        }
    ]
}






// const skillsConfig = {
//     mainSkills: [
//         {
//             className: "skill-icon",
//             icon: <FaGitAlt size={50}/>,
//             text: "Git"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiPostgresql size={50}/>,
//             text: "PostgresSQL"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiPython size={50}/>,
//             text: "Python"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiPandas size={50}/>,
//             text: "Pandas"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiScikitlearn size={50}/>,
//             text: "Scikit-Learn"
//         },
//         {
//             className: "skill-icon",
//             icon: <BiNetworkChart size={50}/>,
//             text: "XGBoost"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaChartLine size={50}/>,
//             text: "Seaborn"
//         },
//     ],
//     complementarySkills: [
//         {
//             className: "skill-icon",
//             icon: <SiNumpy size={50}/>,
//             text: "Numpy"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiNeo4J size={50}/>,
//             text: "Neo4J"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiPlotly size={50}/>,
//             text: "Plotly"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiScipy size={50}/>,
//             text: "Scipy"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiStreamlit size={50}/>,
//             text: "Streamlit"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaChartLine size={50}/>,
//             text: "Matplotlib"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiGithub size={50}/>,
//             text: "Github"
//         },
//         {
//             className: "skill-icon",
//             icon: <DiScrum size={50} />,
//             text: "Scrum"
//         },
//         {
//             className: "skill-icon",
//             icon: <GiRapidshareArrow size={50} />,
//             text: "Rapids.AI"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiTableau size={50} />,
//             text: "Tableau"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiAnaconda size={50} />,
//             text: "Anaconda"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiDbeaver size={50} />,
//             text: "DBeaver"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiGooglecolab size={50} />,
//             text: "Google Colab"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiJira size={50} />,
//             text: "Jira"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiJupyter size={50} />,
//             text: "Jupyter"
//         },
//         {
//             className: "skill-icon",
//             icon: <DiVisualstudio size={50} />,
//             text: "Visual Studio Code"
//         },
        
//     ],
//     basicSkills: [
//         {
//             className: "skill-icon",
//             icon: <SiTensorflow size={50} />,
//             text: "TensorFlow"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiKeras size={50} />,
//             text: "Keras"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiPytorch size={50} />,
//             text: "PyTorch"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiOpenai size={50} />,
//             text: "OpenAI"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiLangchain size={50} />,
//             text: "LangChain"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiLangchain size={50} />,
//             text: "LangGraph"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiApachespark size={50} />,
//             text: "PySpark"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiMongodb size={50} />,
//             text: "MongoDB"
//         },
//         {
//             className: "skill-icon",
//             icon: <VscAzure size={50} />,
//             text: "Azure AI"
//         },
//         {
//             className: "skill-icon",
//             icon: <SiCplusplus size={50} />,
//             text: "C++"
//         },

        
        
//     ],
//     softSkills: [
//         {
//             className: "skill-icon",
//             icon: <AiOutlineThunderbolt size={50} />,
//             text: "Fast Learning"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaCalculator size={50} />,
//             text: "Mathematical & Analytical Skills"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaBrain size={50} />,
//             text: "Logical & Critical Thinking"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaPuzzlePiece size={50} />,
//             text: "Problem-Solving"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaProjectDiagram size={50} />,
//             text: "Project & Time Management"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaSearchPlus size={50} />,
//             text: "Attention to Detail"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaExclamationTriangle size={50} />,
//             text: "Risk Analysis"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaLaptopCode size={50} />,
//             text: "Technical Proficiency"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaChartBar size={50} />,
//             text: "Data Visualization"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaSearch size={50} />,
//             text: "Research Skills"
//         },
//         {
//             className: "skill-icon",
//             icon: <FaUsers size={50} />,
//             text: "Teamwork and Collaboration"
//         }
        
        
//     ]
// }

export default skillsConfig
