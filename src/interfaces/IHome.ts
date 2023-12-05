export interface IHome {
    _id: string;
    title: string;
    intro: string;
    services: {
        serviceType: string;
        description: string;
    }[];
}