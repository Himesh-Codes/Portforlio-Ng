export interface IContactDetails{
    mailId: string;
    address: string;
    phone: string;
}

export enum IContactField{
    mailId = "Mail",
    address = "Address",
    phone = "Phone Number"
}

export type contactType = "phone" | "address" | "mailId";