import React from 'react'
import { ReactComponent as BannerImage } from '../../assets/images/banner/img1.svg'
const Banner = () => {
    return (
        <section className="bg-dark text-light p-3 text-center text-sm-start banner">
            <div className="container d-sm-flex align-items-center justify-content-between">
                <div className="banner-content mb-sm-3">
                    <h1 className="mt-4">Become a <span className="text-danger">Web Developer</span></h1>
                    <p className="mt-3 mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, quibusdam. Totam, asperiores?
                        Consequuntur error sequi accusantium quasi, amet delectus perferendis.
                    </p>
                    <button className="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#enroll-now">Enroll
                        Now</button>
                </div>
                <div className="banner-img my-3">
                    <BannerImage className="img-fluid d-none d-sm-block"></BannerImage>
                    
                </div>
            </div>
        </section>
    )
}

export default Banner
