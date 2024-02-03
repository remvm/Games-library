import SearchBar from "../../components/search-form/search-form";
import { useGetGamesQuery } from "../../api/games";
import { Link } from "react-router-dom";
import "./style.css"

function MainPage() {

  const {
    data: gameList = [],
  } = useGetGamesQuery();

  return (
    <>
      <SearchBar gameList={gameList}/>
      <div className="game_list">
        {gameList.map(game => (
            <div key={game.id} className="game_item">
              <Link to={`card/${game.id}`}>
                <span>{game.title}</span>
                
                <img src={game.image}/>
              </Link>  
            </div>
        ))}
      </div>
    </>
  );
}

export default MainPage;
