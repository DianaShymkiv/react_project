import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/genres">Genres</NavLink>
            <UserInfo/>
        </div>
    );
};

export {Header};