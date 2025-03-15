import React from "react";
import {
  SiKeras, SiTensorflow, SiPython, SiSpring, SiHibernate, SiSwagger, SiHtml5, SiCss3, SiReact,
  SiJavascript, SiFastapi, SiSqlite, SiMongodb, SiTerraform, SiDocker, SiKubernetes, SiJenkins,
  SiPandas, SiNumpy, SiSpacy, SiOpencv, SiOpenai, SiStreamlit
} from "react-icons/si";

import { DiMsqlServer, DiMysql } from "react-icons/di";
import { FaJava, FaGithubSquare, FaBitbucket, FaAws } from "react-icons/fa";
import { getImageUrl } from "@/app/components/utils";
import Image from "next/image";

export  const skillIconMap: { [key: string]: React.ReactNode } = {

  JAVA: <FaJava style={{ color: '#007396', fontSize: '45px' }} />,

  "Spring Frameworks": <SiSpring style={{ color: '#6DB33F', fontSize: '45px' }} />,
  Hibernate: <SiHibernate style={{ color: '#4E8C2A', fontSize: '45px' }} />,

  HTML5: <SiHtml5 style={{ color: '#E34F26', fontSize: '45px' }} />,
  CSS: <SiCss3 style={{ color: '#1572B6', fontSize: '45px' }} />,
  ReactJS: <SiReact style={{ color: '#61DAFB', fontSize: '45px' }} />,
  JavaScript: <SiJavascript style={{ color: '#F7DF1E', fontSize: '45px' }} />,

  Microservices: <Image src={getImageUrl("microservice-icon.png")} className="mx-auto mb-2 " alt="Microservices"  width={45} height={45} />,
  Swagger: <SiSwagger style={{ color: '#85EA2D', fontSize: '45px' }} />,

  Python: <SiPython style={{ color: '#306998', fontSize: '45px' }}  />,
  FastAPI: <SiFastapi style={{ color: '#009688', fontSize: '45px' }} />,
  Pandas: <SiPandas style={{ color: '#150458', fontSize: '45px' }} />,
  NumPy: <SiNumpy style={{ color: '#0080C1', fontSize: '45px' }} />,
  spaCy: <SiSpacy style={{ color: '#1D6F42', fontSize: '45px' }} />,
  OpenCV: <SiOpencv style={{ color: '#5C3EE8', fontSize: '45px' }} />,
  NLP: <Image src={getImageUrl("nlp_icon.png")} className="mx-auto mb-2" alt="NLP"  width={45} height={45} />,
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

  Keras: <SiKeras style={{ color: '#D00000', fontSize: '45px' }} />,
  TensorFlow: <SiTensorflow style={{ color: '#FF6F00', fontSize: '45px' }}  />,
  LLM: <Image src={getImageUrl("llm_logo.png")}  className="mx-auto mb-2" alt="LLM"  width={45} height={45} />,
  FAISS: <Image src={getImageUrl("faiss_logo.png")} className="mx-auto mb-2 h-auto bg-gray-500 rounded-full" alt="Faiss"  width={45} height={45} />,
  LangChain: <Image src={getImageUrl("langchain_logo.png")} className="mx-auto mb-2" alt="LangChain"  width={45} height={45} />,
  OpenAI: <SiOpenai style={{ color: '#00A3E0', fontSize: '45px' }} />,
  "Deep Learning": <Image src={getImageUrl("deeplearning_ai_logo.png")} className="mx-auto mb-2 h-auto bg-gray-500 rounded-full" alt="DeepLearning"  width={45} height={45} />,
  Weaviate: <Image src={getImageUrl("weaviate_logo.png")} className="mx-auto mb-2" alt="Weaviate"  width={45} height={45} />,

};