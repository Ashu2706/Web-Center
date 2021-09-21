import React from 'react'

const BoxCard = () => {
    return (
        <section className="boxes p-3 mt-3">
        <div className="container">
            <div className="row text-center gy-3">
                <div className="col-md">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            <h1 className="card-icon mb-3"><i className="bi bi-laptop"></i></h1>
                            <h4 className="card-title mb-3">Online</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                tempora ab commodi, unde aut tempore reiciendis modi.</p>
                            <a href="#" className="btn btn-danger">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            <h1 className="card-icon mb-3"><i className="bi bi-people-fill"></i></h1>
                            <h4 className="card-title mb-3">In Person</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                tempora ab commodi, unde aut tempore reiciendis modi.</p>
                            <a href="#" className="btn btn-danger">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            <h1 className="card-icon mb-3"><i className="bi bi-person-bounding-box"></i></h1>
                            <h4 className="card-title mb-3">Hybrid</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                tempora ab commodi, unde aut tempore reiciendis modi.</p>
                            <a href="#" className="btn btn-danger">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BoxCard
