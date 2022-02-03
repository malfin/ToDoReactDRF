import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="d-flex flex-wrap justify-content-center p-3">
            <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4">ToDoList</span>
            </Link>
            <ul className="nav nav-pills">
                <li className="nav-item"><Link to={"/add"} className="nav-link">Добавить задачу</Link></li>
                <li className="nav-item"><Link to={"/logout"} className="nav-link">Выйти</Link></li>
            </ul>
            <ul className="nav nav-pills">
                <li className="nav-item"><Link to={"/login"} className="nav-link">Авторизоваться</Link></li>
            </ul>

        </header>
    )
}
export default Header