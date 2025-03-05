import { library } from "@fortawesome/fontawesome-svg-core"; 
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faNpm,
  faPython,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faBolt, faDatabase, faCode, faServer } from "@fortawesome/free-solid-svg-icons";

// Mapping for social media icons
export const socialMediaIcons: Record<string, any> = {
  github: faGithub,
  linkedin: faLinkedin,
  twitter: faTwitter,
  instagram: faInstagram,
  facebook: faFacebook,
};

// Add all icons to the library once, so they can be used anywhere
library.add(
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faNpm,
  faPython,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
  faBolt,
  faDatabase,
  faCode,
  faServer
);

// Mapping for software skills icons
export const softwareSkillsIcons: Record<string, { icon: any; color: string }> = {
  html5: { icon: faHtml5, color: "#E34F26" },
  css3: { icon: faCss3, color: "#1572B6" },
  javascript: { icon: faJs, color: "#F7DF1E" },
  react: { icon: faReact, color: "#61DAFB" },
  nodejs: { icon: faNodeJs, color: "#339933" },
  npm: { icon: faNpm, color: "#CB3837" },
  python: { icon: faPython, color: "#3776AB" },
  database: { icon: faDatabase, color: "#4285F4" },
  backend: { icon: faServer, color: "#6E5494" },
  coding: { icon: faCode, color: "#E44D26" },
  bolt: { icon: faBolt, color: "#F0DB4F" },
};