import { tickets } from "../data/tickets"
import type { Ticket } from "../types/ticket"

export function getTicketById(id: number): Ticket | undefined {
    return tickets.find(t => t.id === id);
}

export function getRandomTicket(): Ticket {
    const index = Math.floor(Math.random() * tickets.length);
    return tickets[index];
}