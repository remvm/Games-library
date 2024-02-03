import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { useCombobox } from 'downshift';
import { useGetSearchResultsQuery } from '../../api/games';
import { SearchContext } from '../../context/searchContext';

const SearchBar = () => {
  const navigate = useNavigate();
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [debouncedInputValue] = useDebounce(searchValue, 1000);
  const [searchResults, setSearchResults] = useState([]);

  const { data: filteredGames = [] } = useGetSearchResultsQuery(debouncedInputValue);

  useEffect(() => {
    if (filteredGames.length > 0) {
      setSearchResults(filteredGames);
    }
  }, [filteredGames]);

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    reset,
  } = useCombobox({
    items: searchResults,
    itemToString: (item) => (item ? item.title : ''),
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        navigate(`/search?query=${selectedItem.title}`);
      }
    },
  });

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    reset();
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && debouncedInputValue.length > 0) {
      navigate(`/search?query=${debouncedInputValue}`);
    }
  };

  const handleButtonClick = () => {
    if (debouncedInputValue.length > 0) {
      navigate(`/search?query=${debouncedInputValue}`);
    }
  };

  return (
    <div {...getComboboxProps}>
      <input
        {...getInputProps({
          onChange: handleInputChange,
          onKeyDown: handleInputKeyDown,
        })}
        placeholder="Найти игру..."
        value={searchValue}
      />
      <button
        {...getToggleButtonProps()}
        onClick={handleButtonClick}
      >
        Поиск
      </button>
      <ul {...getMenuProps()}>
        {isOpen &&
          debouncedInputValue.length > 0 &&
          searchResults.map((item, index) => (
            <li
              {...getItemProps({ item, index })}
              key={item.id}
              style={{
                backgroundColor:
                  highlightedIndex === index ? 'lightgray' : 'white',
              }}
            >
              <Link to={`card/${item.id}`}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBar;
