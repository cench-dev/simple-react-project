const FAVORITES_KEY = "favoriteTickets";

export function getFavoriteTickets(): number[] {
    const data = localStorage.getItem(FAVORITES_KEY);

    if (!data) {
        return [];
    }

    return JSON.parse(data);
}

export function addFavoriteTicket(id: number) {
    const data = getFavoriteTickets();

    if (!data.includes(id)) {
        data.push(id);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(data));
    }
}

export function removeFavoriteTicket(id: number) {
    let data = getFavoriteTickets();
    const updated = data.filter(item => item !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}

export function isFavorite(id: number): boolean {
    const data = getFavoriteTickets();
    return data.includes(id);
}