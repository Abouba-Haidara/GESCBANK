export interface Client {
    id: number;
    firstName: string;
    lastName: string;
    telephone: string;
    email?: string;
    birthday: Date;
}