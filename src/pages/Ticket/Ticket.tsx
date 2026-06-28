import { useNavigate, useParams } from "react-router-dom";
import { getTicketById } from "../../utils/tickets";
import { useState } from "react";
import {
    addFavoriteTicket,
    removeFavoriteTicket,
    isFavorite
} from "../../utils/favorites";
import goBackIcon from '../../assets/move-left.svg';
import './Ticket.scss';

export default function Ticket() {
    const { id } = useParams();
    const ticketId = Number(id);
    const navigate = useNavigate();
    const ticket = getTicketById(ticketId);

    const [showAnswer, setShowAnswer] = useState<number | null>(null);
    const [favorite, setFavorite] = useState(isFavorite(ticketId));

    if (!ticket) {
        return <div>Билет не найден</div>;
    }

    const toggleFavorite = () => {
        if (favorite) {
            removeFavoriteTicket(ticketId);
            setFavorite(false);
        } else {
            addFavoriteTicket(ticketId);
            setFavorite(true);
        }
    };

    const goBack = () => {
        navigate('/')
    }

    return (
        <section className="ticket-section">
            <button className="ticket-section__back-button" onClick={goBack}> 
                <img src={goBackIcon}></img> 
                На главную 
            </button>
            <div className="ticket-section__header">
                <p className="ticket-section__title">
                    Билет №{ticket.id}
                </p>

                <button
                    onClick={toggleFavorite}
                    className="ticket-section__favorite"
                >
                    {favorite ? "Удалить из избранного" : "Добавить в избранное"}
                </button>
            </div>

            {ticket.questions.map((q, i) => (
                <div key={i} className="ticket-section__text">
                    <p>Вопрос: {q}</p>

                    <button
                        onClick={() =>
                            showAnswer === i
                                ? setShowAnswer(null)
                                : setShowAnswer(i)
                        }
                        className="ticket-section__button"
                    >
                        Показать ответ
                    </button>

                    {showAnswer === i && (
                        <p className="ticket-section__answer">
                            {ticket.answers[i]}
                        </p>
                    )}
                </div>
            ))}
        </section>
    );
}