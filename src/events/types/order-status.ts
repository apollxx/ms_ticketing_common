export enum OrderStatus {
    // When the order has been created, but the
    // ticket it is trying to order has not been reseverd
    Created = 'created',

    // already reserved, order cancelled or expired
    Cancelled = 'cancelled',

    // successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    // Payment success
    Complete = 'complete'
}