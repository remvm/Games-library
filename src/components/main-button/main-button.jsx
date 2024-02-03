import { Link } from "react-router-dom"
import "./style.css";
import Icon from '../../assets/react.svg?react'

function MainButton() {

    return (
        <Link to={import.meta.env.BASE_URL}>
            <Icon />
        </Link>
    )
}

export default MainButton