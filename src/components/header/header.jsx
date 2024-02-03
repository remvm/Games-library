import { Link } from "react-router-dom";
import MainButton from "../main-button/main-button";
import PropTypes from 'prop-types'
import "./style.css"

function Header( {isAuth, logout} ) {
  
  return (
    <div className={'header_container'}>
      <header className={'header'}>
        <div className={'header_content'}>
          <MainButton />
          <div className={'navigation_bar'}>
            {isAuth ? (
              <>
                <Link to={""} >
                  Все игры
                </Link>
                <Link to={'user/'}>
                  Пользователь
                </Link>
              </>
            ) : (
                <Link to={""}>
                  Все игры
                </Link>
            )}
            {isAuth ? (
              <div>
                <button
                  type="button"
                  onClick={() => logout()}
                >
                  Выйти
                </button>
              </div>
            ) : (
              <div>
                <Link to={"login/"}>
                  Войти
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  isAuth: PropTypes.bool,
  logout: PropTypes.func
}

export default Header;
