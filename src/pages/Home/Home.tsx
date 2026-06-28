import { getRandomTicket } from "../../utils/tickets";
import { useNavigate } from "react-router-dom";
import bookIcon from "../.././assets/book-text.svg";
import dicesIcon from "../.././assets/dices.svg";
import Favorites from "../../components/Favorites";
import './Home.scss'
export default function Home() {
    const navigate = useNavigate();
    const openRandom = () => {
        const ticket = getRandomTicket();
        navigate(`/ticket/${ticket.id}`);
    }

    const openById = () => {
        const input = document.getElementById('ticketId') as HTMLInputElement;
        const id = Number(input.value);

        if (!id) {
            return;
        }

        navigate(`/ticket/${id}`);
    }
    return (
        <>
            <section className="home-section">
                <div className="home-section__favorites">
                    <Favorites />
                </div>
                <div className="home-header">
                    <h1>welcome!</h1>
                    <img src={bookIcon}></img>
                </div>
                <div className="home-meta">
                    <p className="home-meta__text">Сделай подготовку к экзаменам приятнее!</p>
                    <p className="home-meta__text">Вводи номер билета или нажимай на "Получить случайный билет" и начинай подготовку</p>
                </div>
                <div className="home-random-ticket">
                    <button onClick={openRandom} className="home-random-ticket__button">
                        Получить случайный билет
                        <img src={dicesIcon}></img>
                    </button>
                </div>
                <div className="home-ticket">
                    <input id="ticketId" placeholder="Введите номер билета" className="home-ticket__input"/>
                    <button onClick={openById} className="home-ticket__button">Открыть</button>
                </div>
            </section>
        </>
    )
}