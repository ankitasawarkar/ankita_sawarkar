import React from "react";
import { SiKeras, SiTensorflow, SiJava, SiPython, SiSpring, SiHibernate, SiHtml5, SiCss3, SiReact, SiFastapi, SiMongodb, SiTerraform, SiDocker, SiKubernetes } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLogoAws } from "react-icons/bi";

// Mapping of skills to icons
const skillIconMap = {
  Keras: <SiKeras size={32} className='fill-orange-500' />,
  TensorFlow: <SiTensorflow size={32} className='fill-orange-500' />,
  JAVA: <FaJava size={32} className='fill-orange-500'/>,
  Python: <SiPython size={32} className='fill-orange-500'/>,
  "Spring Frameworks": <SiSpring size={32} className='fill-orange-500'/>,
  Hibernate: <SiHibernate size={32} className='fill-orange-500'/>,
  HTML5: <SiHtml5 size={32} className='fill-orange-500'/>,
  CSS: <SiCss3 size={32} className='fill-orange-500'/>,
  ReactJS: <SiReact size={32} className='fill-orange-500'/>,
  FastAPI: <SiFastapi size={32} className='fill-orange-500'/>,
  SQL: <SiMongodb size={32} className='fill-orange-500'/>, // You can choose an appropriate icon here
  MongoDB: <SiMongodb size={32} className='fill-orange-500'/>,
  AWS: <BiLogoAws size={32} className='bg-gray-500' />,
  Terraform: <SiTerraform size={32} className='fill-orange-500'/>,
  Docker: <SiDocker size={32} className='fill-orange-500'/>,
  Kubernetes: <SiKubernetes size={32} className='fill-orange-500'/>,
};

// Main component
function SkillsList({ skills }) {
  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index} className="skill-icon">
          {skillIconMap[skill] || <span>{skill} icon not available</span>}
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
