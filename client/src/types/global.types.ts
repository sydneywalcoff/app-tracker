
interface Location {
    workStyle: string;
    officeLocation: string;
}

interface JobProp {
    _id: string;
    jobTitle: string;
    companyName: string;
    jobDescription?: string;
    location: string;
    locationObj: Location;
    status: string;
    dateApplied: string;
    lastUpdated?: string;
    jobScore: number;
    link?: string;
}

export type {
    JobProp
}