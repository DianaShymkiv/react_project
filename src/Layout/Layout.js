import {Outlet} from 'react-router-dom';

import css from "./Layout.module.css"
import {Header} from "../components";

const Layout = () => {
    return (
        <div className={css.wrapper}>
            <Header/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
            <footer>@ReactRouterDOM</footer>
        </div>
    );
};

export {Layout};