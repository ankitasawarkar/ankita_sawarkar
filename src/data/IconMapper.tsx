import React from "react";
import {
  SiKeras, SiTensorflow, SiPython, SiSpring, SiHibernate, SiSwagger, SiHtml5, SiCss3, SiReact,
  SiJavascript, SiFastapi, SiSqlite, SiMongodb, SiTerraform, SiDocker, SiKubernetes, SiJenkins,
  SiPandas, SiNumpy, SiSpacy, SiOpencv, SiOpenai, SiStreamlit
} from "react-icons/si";

import { DiMsqlServer, DiMysql } from "react-icons/di";
import { FaJava, FaGithubSquare, FaBitbucket, FaAws } from "react-icons/fa";
import { getImageUrl } from "@/app/components/utils";

export const skillIconMap = {

  JAVA: <FaJava style={{ color: '#007396', fontSize: '45px' }} />,

  "Spring Frameworks": <SiSpring style={{ color: '#6DB33F', fontSize: '45px' }} />,
  Hibernate: <SiHibernate style={{ color: '#4E8C2A', fontSize: '45px' }} />,

  HTML5: <SiHtml5 style={{ color: '#E34F26', fontSize: '45px' }} />,
  CSS: <SiCss3 style={{ color: '#1572B6', fontSize: '45px' }} />,
  ReactJS: <SiReact style={{ color: '#61DAFB', fontSize: '45px' }} />,
  JavaScript: <SiJavascript style={{ color: '#F7DF1E', fontSize: '45px' }} />,

  Microservices: <img src={getImageUrl("microservice-icon.png")} className="mx-auto mb-2 " style={{ width: "45px" }} />,
  Swagger: <SiSwagger style={{ color: '#85EA2D', fontSize: '45px' }} />,

  Python: <SiPython size={32} color='#306998' />,
  FastAPI: <SiFastapi style={{ color: '#009688', fontSize: '45px' }} />,
  Pandas: <SiPandas style={{ color: '#150458', fontSize: '45px' }} />,
  NumPy: <SiNumpy style={{ color: '#0080C1', fontSize: '45px' }} />,
  spaCy: <SiSpacy style={{ color: '#1D6F42', fontSize: '45px' }} />,
  OpenCV: <SiOpencv style={{ color: '#5C3EE8', fontSize: '45px' }} />,
  NLP: <img src={getImageUrl("nlp_icon.png")} className="mx-auto mb-2" style={{ width: "35px" }} />,
  Streamlit: <SiStreamlit style={{ color: '#FF4B2B', fontSize: '45px' }} />,

  SQL: <SiSqlite style={{ color: '#003B57', fontSize: '45px' }} />,
  "SQL Server": <DiMsqlServer style={{ color: '#CC2927', fontSize: '45px' }} />,
  MySQL: <DiMysql style={{ color: '#00758F', fontSize: '45px' }} />,
  MongoDB: <SiMongodb style={{ color: '#47A248', fontSize: '45px' }} />,

  AWS: <FaAws style={{ color: '#FF9900', fontSize: '45px' }} />,//<BiLogoAws size={32} className='bg-gray-500' />,
  Terraform: <SiTerraform style={{ color: '#623E35', fontSize: '45px' }} />,
  Docker: <SiDocker style={{ color: '#2496ED', fontSize: '45px' }} />,
  Kubernetes: <SiKubernetes style={{ color: '#326CE5', fontSize: '45px' }} />,
  Jenkins: <SiJenkins style={{ color: '#D24939', fontSize: '45px' }} />,
  Github: <FaGithubSquare style={{ color: '#181717', fontSize: '45px' }} />,
  Bitbucket: <FaBitbucket style={{ color: '#0052CC', fontSize: '45px' }} />,

  Keras: <SiKeras size={32} style={{ color: '#D00000', fontSize: '100px' }} />,
  TensorFlow: <SiTensorflow size={32} className='fill-orange-500' />,
  LLM: <img src={getImageUrl("llm_logo.png")}  className="mx-auto mb-2" style={{ width: "45px" }} />,
  FAISS: <img src={getImageUrl("faiss_logo.png")} className="mx-auto mb-2 h-auto bg-gray-500 rounded-full"style={{ width: "45px" }} />,
  LangChain: <img src={getImageUrl("langchain_logo.png")} className="mx-auto mb-2" style={{ width: "45px" }} />,
  OpenAI: <SiOpenai style={{ color: '#00A3E0', fontSize: '45px' }} />,
  "Deep Learning": <img src={getImageUrl("deeplearning_ai_logo.png")} className="mx-auto mb-2 h-auto bg-gray-500 rounded-full" style={{ width: "45px" }} />,
  Weaviate: <img src={getImageUrl("weaviate_logo.png")} className="mx-auto mb-2" style={{ width: "45px" }} />

};