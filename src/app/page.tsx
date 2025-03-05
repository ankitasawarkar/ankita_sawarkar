import ProfileContaint from "./components/profile/Profile";
import { Navbar } from "./components/navbar/Navbar";
import SSkills from "./components/media/SSkills";
import TensorFlowLogo from "./components/media/checkSkill";
import SkillsList from "./components/media/SSkills";
import Skills from "./components/media/Skills";

const skills1 = ["Tensorflow", "Keras", "PyTorch", "Python","Deeplearning"]

  const skills: string[] = [
    "Keras",
    "TensorFlow",
    "JAVA",
    "Python",
    "Spring Frameworks",
    "Hibernate",
    "HTML5",
    "CSS",
    "ReactJS",
    "FastAPI",
    "MongoDB",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
  ];


export default function Home() {
  return (
    <>
      <Navbar />
      <ProfileContaint /> 
      {/* <TensorFlowLogo  />
      <SkillsList skills = {skills} /> */}
      <Skills skills={skills} />
    </>
  );
}