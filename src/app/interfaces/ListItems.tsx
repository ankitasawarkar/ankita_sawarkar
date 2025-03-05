
export  interface ListItem {
    title: string;
    imageName: string;
    description: string[];
    skills: string[];
    skills_old: Skills[];
}

export  interface ListItemsProps {
    data: ListItem[];
}

export  interface Skills {
    skillName: string;
    fontAwesomeIcon: string;
}

export interface SoftwareSkillsProps {
    skills: Skills[];
}