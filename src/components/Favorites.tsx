import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFavoriteTickets } from "../utils/favorites"
import { getTicketById } from "../utils/tickets";
import starIcon from ".././assets/star.svg"
import './Favorites.scss'

export default function Favorites() {
    const [tickets, setTickets] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const favoriteIds = getFavoriteTickets();

        const favoriteTickets = favoriteIds
            .map((id) => getTicketById(id))
            .filter(Boolean);

        setTickets(favoriteTickets);
    }, []);

    if (tickets.length === 0) {
        return <p>Пока нет избранных билетов</p>;
    }

    return (
        <div className="favorites-block">
            <div className="favorites-block__header">
                <img src={starIcon}></img>
                <h2>Избранное</h2>
            </div>

            {tickets.map((ticket) => (
                <div
                    key={ticket.id}
                    onClick={() => navigate(`/ticket/${ticket.id}`)}
                    className="favorites-block__ticket"
                >
                    Билет №{ticket.id}
                </div>
            ))}
        </div>
    );
}