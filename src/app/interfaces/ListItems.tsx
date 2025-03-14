interface Project {
    title: string;
    description: string[];
    link: string;
    logo_path: string;
    creation_on: string;
    skills: string[];
}

export interface ListProject {
    data: Project[]
}

interface Experience {
    title: String,
    company: String,
    company_url: String,
    logo_path: String,
    duration: String,
    location: String,
    description: String[]
}

export interface ListExperiences {
    experiences?: Experience[]
}

interface Degree {
    logo_path?: string;
    alt_name: string;
    title: string;
    subtitle: string;
    duration: string;
    descriptions: string[];
    website_link?: string;
};

export interface ListDegrees {
    data: Degree[];
}

interface Certificate {

    title: String;
    subtitle: String;
    logo_path: String;
    certificate_link: String;
}

export interface ListCertificates {
    data: Certificate[];
}

interface ListItem {
    title: string;
    imageName: string;
    description: string[];
    skills: string[];
    skills_old: Skills[];
}

export interface ListItemsProps {
    data: ListItem[];
}

interface Skills {
    skillName: string;
    fontAwesomeIcon: string;
}

// Utility function to chunk an array into smaller arrays of a specified size
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}