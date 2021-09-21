import React from 'react'
export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-danger py-3">
                <div className="container">
                    <a href="#" className="navbar-brand fw-bold">Web Center</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#learn" className="nav-link text-light px-md-3">Cousrses</a>
                            </li>
                            <li className="nav-item">
                                <a href="#faq" className="nav-link text-light px-md-3">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a href="#instructors" className="nav-link text-light px-md-3">Instructors</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact-us" className="nav-link text-light ps-md-3">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
