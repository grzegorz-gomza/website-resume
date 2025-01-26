import {BiGitRepoForked} from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import {FaMedium} from "react-icons/fa"
import {ImBook} from "react-icons/im";


import langgraph from "../images/langgraph.png"
import lego from "../images/lego.png"
import punching from "../images/punching.jpeg"

import React from 'react'

const projectConfig = [
    {
        title: "LangGraph AI Agent",
        links: [
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
                name: "repo",
                url: "https://github.com/grzegorz-gomza/Portfolio_Projects/tree/main/Lego%20recognition",
                icon: <AiFillGithub/>
            },
            {
                name: "medium",
                url: "https://medium.com/rocket-science-team/training-a-cnn-for-lego-bricks-recognition-f285ffab3327",  
                icon: <FaMedium/>
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
    }
]

export default projectConfig