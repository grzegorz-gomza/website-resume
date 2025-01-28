import React from 'react'

import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { FaMedium } from "react-icons/fa"
import { SiStreamlit } from "react-icons/si";

import langgraph from "../images/langgraph.png";
import lego from "../images/lego.png";
import punching from "../images/punching.jpeg";
import tictactoe from "../images/tictactoe.png";
import chatpdf from "../images/chatpdf.png";
import buyml from "../images/buyml.png";



const projectConfig = [
    {
        title: "LangGraph AI Agent",
        links: [
            {
                name: "streamlit-app",
                url: "https://medium.com/rocket-science-team/training-a-cnn-for-lego-bricks-recognition-f285ffab3327",  
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
        target: "_blank"
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
        target: "_blank"
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
        target: "_blank"
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
        target: "_blank"
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
        target: "_blank"
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
        target: "_blank"
    }
]

export default projectConfig