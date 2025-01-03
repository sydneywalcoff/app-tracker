
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
    dateApplied: Date;
    lastUpdated?: Date;
    jobScore: number;
    link?: string;
}

export type {
    JobProp
}