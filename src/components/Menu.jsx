import React from 'react'

const Menu = () => {
    return (
        <div className="desktop-menu">
            <ul>
                <li>
                    <a href="/" className="title">My orders</a>
                </li>

                <li>
                    <a href="/">My account</a>
                </li>

                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
        <div className="mobile-menu">
            <ul>
                <li>
                    <a href="/">CATEGORIES</a>
                </li>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Other</a>
                </li>
                </ul>
            
                <ul>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
                </ul>
            
                <ul>
                <li>
                    <a href="/" className="email">platzi@example.com</a>
                </li>
                <li>
                    <a href="/" className="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
