import React from 'react'

const NewsSubsciption = () => {
    return (
        <section className="bg-danger text-light p-3 newsSub">
            <div className="container d-md-flex align-items-center justify-content-between">
                <h1 className="newsSub-text mb-3">Subscribe to our News Notification </h1>
                <div className="input-group newsSub-input mb-3">
                    <input type="text" className="form-control" placeholder="Enter Email"></input>
                    <button className="btn btn-dark" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        </section>
    )
}

export default NewsSubsciption
