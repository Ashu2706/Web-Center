import React from 'react'

const Footer = () => {
    return (
        <footer>
        <div className="p-4 bg-dark text-white text-center position-relative">
            <div className="container">
                <p className="lead">Copyright &copy; 2021 Web Center</p>
                <a href="#" className="position-absolute bottom-0 end-0 p-4">
                    <i className="bi bi-arrow-up-circle h3"></i>
                </a>
            </div>
        </div>
        </footer>
    )
}

export default Footer
