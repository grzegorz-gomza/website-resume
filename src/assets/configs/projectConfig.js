import React from 'react'

import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { FaAws, FaMedium } from "react-icons/fa"
import { SiStreamlit } from "react-icons/si";

import CNN_MLOps from "../images/CNN_MLOps.png";
import netflix from "../images/netflix.png";
import langgraph from "../images/langgraph.png";
import lego from "../images/lego.png";
import punching from "../images/punching.jpeg";
import tictactoe from "../images/tictactoe.png";
import chatpdf from "../images/chatpdf.png";
import buyml from "../images/buyml.png";
import email from "../images/e-mail_classifier.png"




const projectConfig = [
    {
        title: "Chest Cancer Detection Assistant",
        links: [
            {
                name: "AWS Deployed APP",
                url: "http://56.228.36.7:1988/",  
                icon: <FaAws size={35} />
            },
            {
                name: "repo",
                url: "https://github.com/grzegorz-gomza/Chest_Cancer_Classification_MLOps",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/grzegorz-gomza/Chest_Cancer_Classification_MLOps/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/grzegorz-gomza/Chest_Cancer_Classification_MLOps/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: CNN_MLOps,
        description: "The Chest Cancer Recognition Assistant is a sophisticated medical diagnostic tool leveraging artificial intelligence to detect and classify chest cancer from medical imaging. Using advanced deep learning techniques, the system analyzes chest scans to identify three primary types of lung cancer. Project was made with MLOps, CNNs and Fine Tuning a pretrained Model",
        target: "_blank",
        tags: ["Tensorflow", "MLFLow", "AWS", "DVC","Flask", "Docker", "Dagshub", "Model Fine Tuning"]
    },
    {
        title: "Netlix Recommendation Chatbot",
        links: [
            {
                name: "streamlit-app",
                url: "https://gg-netflix-recommender.streamlit.app/",  
                icon: <SiStreamlit size={35} />
            },
            {
                name: "repo",
                url: "https://github.com/grzegorz-gomza/Recommender_System_with_Neo4j",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/grzegorz-gomza/Recommender_System_with_Neo4j/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/grzegorz-gomza/Recommender_System_with_Neo4j/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: netflix,
        description: "This project provides an interactive movie recommendation experience powered by a conversational AI agent. It leverages the capabilities of Neo4j (a graph database), Langchain (a framework for building LLM applications), and Streamlit (for creating the user interface).",
        target: "_blank",
        tags: ["Neo4j", "Langchain", "Streamlit", "OpenAI API"]
    },
    {
        title: "RAG Chatbot with PDF & Websearch",
        links: [
            {
                name: "streamlit-app",
                url: "https://gg-langgraphagent.streamlit.app/",  
                icon: <SiStreamlit size={35} />
            },
            {
                name: "repo",
                url: "https://github.com/grzegorz-gomza/Langgraph_Agent",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/grzegorz-gomza/Langgraph_Agent/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/grzegorz-gomza/Langgraph_Agent/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: langgraph,
        description: "The main goal of the project was to combine two concepts: a LangGraph Agent with access to the web and a Multimodal RAG Agent capable of reading PDF files, including graphics and tables. The entire project was wrapped in a frontend using Streamlit and deployed. The Agent can provide answers to given questions using the LLM itself, internet research, and a deep understanding of the provided PDF file. ",
        target: "_blank",
        tags: ["Langgraph", "Streamlit", "OpenAI API", "Agentic Chatbot", "Websearch", "RAG"]
    },
    {
        title: "E-mail_Spam_Detection",
        links: [
            {
                name: "repo",
                url: "https://github.com/grzegorz-gomza/E-mail_Spam_Detection",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/grzegorz-gomza/E-mail_Spam_Detection/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/grzegorz-gomza/E-mail_Spam_Detection/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: email,
        description: "Goal of this project is to build a machine learning model that can accurately classify emails as spam or not spam. This project will use various NLP techniques and machine learning algorithms to achieve this goal.",
        target: "_blank",
        tags: ["FastAPI", "Scikit-learn", "Streamlit", "Docker", "Airflow & DAG", "NLTK", "Evidently AI", "MLFlow"]
    },
    {
        title: "Lego Brick Classification Project",
        links: [
            {
                name: "medium",
                url: "https://medium.com/rocket-science-team/training-a-cnn-for-lego-bricks-recognition-f285ffab3327",  
                icon: <FaMedium size={35} />
            },
            {
                name: "repo",
                url: "https://github.com/grzegorz-gomza/Portfolio_Projects/tree/main/Lego%20recognition",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/grzegorz-gomza/Portfolio_Projects/tree/main/Lego%20recognition/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/grzegorz-gomza/Portfolio_Projects/tree/main/Lego%20recognition/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: lego,
        description: "This project focuses on building a convolutional neural network (CNN) model capable of recognizing individual LEGO bricks from images. Leveraging deep learning techniques, specifically CNNs, the model classifies LEGO bricks into different categories. The project was undertaken as part of a Data Science bootcamp and aims to contribute to applications that require LEGO brick recognition. ",
        target: "_blank",
        tags: ["Tensorflow", "GradCam", "Model Training", "CNN", "Model Evaluation"]
    },
    {
        title: "Customer Propensity to Purchase",
        links: [
            {
                name: "repo",
                url: "https://github.com/grzegorz-gomza/Portfolio_Projects/tree/main/Customer%20Behaviour%20on%20Website",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/grzegorz-gomza/Portfolio_Projects/tree/main/Customer%20Behaviour%20on%20Website/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/grzegorz-gomza/Portfolio_Projects/tree/main/Customer%20Behaviour%20on%20Website/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: buyml,
        description: "This project analyzes e-commerce customer interactions using machine learning to reveal insights into purchasing behaviors. By employing various classifiers and clustering techniques, it identifies key factors influencing customer decisions and segments behavior patterns. The use of visualizations and statistical methods like Shapley values provides a deeper understanding of model performance and feature importance. ",
        target: "_blank",
        tags: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Shapley values", "Clustering", "Classification"]
    },
    {
        title: "Punching Shear Resistance Prediction",
        links: [
            {
                name: "repo",
                url: "https://github.com/grzegorz-gomza/Portfolio_Projects/tree/main/Concrete%20Punching",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/grzegorz-gomza/Portfolio_Projects/tree/main/Concrete%20Punching/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/grzegorz-gomza/Portfolio_Projects/tree/main/Concrete%20Punching/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: punching,
        description: "The Punching Shear Resistance Prediction project is designed to leverage machine learning in predicting the punching shear resistance (Pu) for concrete slab-column connections. By analyzing various geometric and material properties, this project provides engineers with a reliable tool to assess structural integrity and prevent potential failures. The machine learning model uses different geometric and material characteristics to enhance the evaluation of structural integrity and help mitigate possible issues. ",
        target: "_blank",
        tags: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Clustering", "Classification", "Pipeline", "Feature Selection", "Feature Engineering"]
    },
    {
        title: "Chat with multiple PDFs",
        links: [
            {
                name: "repo",
                url:  "https://github.com/grzegorz-gomza/Chat_with_PDF",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/grzegorz-gomza/Chat_with_PDF/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url:  "https://github.com/grzegorz-gomza/Chat_with_PDF",
                icon: <AiFillEye/>
            }
        ],
        image: chatpdf,
        description: "This Python code implements a Streamlit application that enables users to upload multiple PDF files, ask questions about their content, and receive responsive answers through a conversational retrieval chain powered by OpenAI.",
        target: "_blank",
        tags: ["langchain", "streamlit", "openai", "RAG"]
    },
    {
        title: "Tic Tac Toe Game in C++",
        links: [
            {
                name: "repo",
                url: "https://github.com/grzegorz-gomza/Tic_Tac_Toe_C--",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/grzegorz-gomza/Tic_Tac_Toe_C--/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/grzegorz-gomza/Tic_Tac_Toe_C--/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: tictactoe,
        description: "The Tic-Tac-Toe game, available as a C++ implementation, allows two players to compete on a customizable board ranging from 3x3 to 10x10. It features dynamic board sizes, automatic winner detection, draw conditions, and input validation to ensure valid moves while displaying the board clearly after each turn. The game includes functions for board initialization, winner checking, draw detection, and player input, all designed to create an engaging and user-friendly experience for players. ",
        target: "_blank",
        tags: ["C++"]
    }
]

export default projectConfig