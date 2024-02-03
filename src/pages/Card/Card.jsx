import { useParams } from "react-router-dom";
import { useGetGamesInfoQuery } from "../../api/games";
import './style.css'

function Card() {

  const { id } = useParams();

  const {
    data: game = [],
  } = useGetGamesInfoQuery(id);

  return (
    <>
      <div>Карточка</div>
      <h2>{game.title}</h2>
      <img src={game.image} />
      <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
      <div>{game.rating}</div>
      <div>{game.release}</div>
    </>
  );
}

export default Card;
