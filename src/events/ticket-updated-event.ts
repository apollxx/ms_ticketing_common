import { Subjects } from "./subjects";

export interface TicketUpdateddEvent {
    subject: Subjects.TicketUpdated;
    data: {
        id: string
        version: number
        title: string
        price: number
        userdId: string
        orderId?: string;
    }
}