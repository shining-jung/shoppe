import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import style from "../css/Header.module.css";

const Header = () => {
    const [isNavOn, setIsNavOn] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
        setIsNavOn(!isNavOn);
    };
    useEffect(() => {
        document.body.style.overflowY = isNavOn ? "hidden" : "auto";
    }, [isNavOn]);

    useEffect(() => {
        setIsNavOn(false);
    }, [location]);

    return (
        <header className={`${style.header}  ${isNavOn ? style.on : ""} mw`}>
            <h1>
                <Link
                    to="/"
                    onClick={() => {
                        setIsNavOn(false);
                    }}>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
                </Link>
            </h1>
            <nav>
                <Link to="/shopall">Shop</Link>
                <Link to="/">Blog</Link>
                <Link to="/company/ceo">Our Story</Link>
            </nav>
            <div>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/img/ic_glass.svg`} alt="icon-glass" />
                </Link>
                <Link to="/cart">
                    <img src={`${process.env.PUBLIC_URL}/img/ic_cart.svg`} alt="icon-cart" />
                </Link>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/img/ic_user.svg`} alt="icon-user" />
                </Link>
            </div>
            <button className={style.ham} onClick={toggleNav}></button>
        </header>
    );
};

export default Header;
