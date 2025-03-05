import React from "react";
import { SiKeras, SiTensorflow, SiPython, SiSpring, SiHibernate, SiHtml5, SiCss3, SiReact, SiFastapi, SiMongodb, SiTerraform, SiDocker, SiKubernetes } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLogoAws } from "react-icons/bi";
import { getImageUrl } from "@/app/components/utils";

function PythonLogo() {
    return (
    
        <div className="bg-white rounded-md p-2 inline-block">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="fill-red-700 h-8 w-8"
  >
    <path
      fillRule="evenodd"
      d="M9 6a3 3 0 016 0v1h3a3 3 0 013 3v7a3 3 0 01-3 3H6a3 3 0 01-3-3V10a3 3 0 013-3h3V6zm1-1a5 5 0 00-5 5v7a5 5 0 005 5h12a5 5 0 005-5V10a5 5 0 00-5-5H10z"
      clipRule="evenodd"
    />
  </svg>
</div>
    );
}
export const skillIconMap = {
    Keras: <SiKeras size={32} className="stroke-red-900 stroke-2" />,
    TensorFlow: <SiTensorflow size={32} className='fill-orange-500' />,
    JAVA: <FaJava size={32} className='fill-orange-500' />,
    Python: <SiPython size={32} className="stroke-red-900 stroke-2 bg-white" />,
    "Spring Frameworks": <SiSpring size={32} className='fill-orange-500' />,
    Hibernate: <SiHibernate size={32} className='fill-orange-500' />,
    HTML5: <SiHtml5 size={32} className='fill-orange-500' />,
    CSS: <SiCss3 size={32} className='fill-orange-500' />,
    ReactJS: <SiReact size={32} className='fill-orange-500' />,
    FastAPI: <SiFastapi size={32} className='fill-orange-500' />,
    SQL: <SiMongodb size={32} className='fill-orange-500' />, // You can choose an appropriate icon here
    MongoDB: <SiMongodb size={32} className='fill-orange-500' />,
    AWS: <BiLogoAws size={32} className='bg-gray-500' />,
    Terraform: <SiTerraform size={32} className='fill-orange-500' />,
    Docker: <SiDocker size={32} className='fill-orange-500' />,
    Kubernetes: <SiKubernetes size={32} className='fill-orange-500' />,
    LLM: <img src={getImageUrl("llm_logo.png")} className="mx-auto mb-2 " />,
    //Docker: <img src={getImageUrl("docker_logo.png")} className="mx-auto mb-2  max-h-[100px]" />,
    FAISS: <img src={getImageUrl("faiss_logo.png")} className="mx-auto mb-2  " />,
    LangChain: <img src={getImageUrl("langchain_logo.png")} className="mx-auto mb-2  " />,
    OpenAI: <img src={getImageUrl("openai_logo.png")} className="mx-auto mb-2 " />,
    "Deep Learning": <img src={getImageUrl("deeplearning_ai_logo.png")} className="max-w-[6%] h-auto bg-gray-500 rounded-full" />

};