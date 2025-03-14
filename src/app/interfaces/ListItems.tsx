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
    title: string,
    company: string,
    company_url: string,
    logo_path: string,
    duration: string,
    location: string,
    description: string[]
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

    title: string;
    subtitle: string;
    logo_path: string;
    certificate_link: string;
}

export interface ListCertificates {
    data: Certificate[];
}

interface ListItem {
    title: string;
    description: string[];
    skills: string[];
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