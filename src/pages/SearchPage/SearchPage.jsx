import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetSearchResultsQuery } from '../../api/games';
import { Link } from 'react-router-dom';

function SearchResultsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [searchResults, setSearchResults] = useState([]);

  const { data: apiResults = [] } = useGetSearchResultsQuery(query);

  useEffect(() => {
    setSearchResults(apiResults);
  }, [apiResults]);

  if (!Array.isArray(searchResults)) {
    return null;
  }

  return (
    <div>
      <h2>Результаты поиска для &quot;{query}&quot;</h2>
      <div>
        {searchResults.map((game) => (
          <div key={game.id}>
            <Link to={`card/${game.id}`}>
              <span>{game.title}</span>
              <img src={game.image} alt={game.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsPage;
