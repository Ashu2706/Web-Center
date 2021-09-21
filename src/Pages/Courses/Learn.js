import React from 'react'
import { ReactComponent as LearnFundamentals } from '../../assets/images/learnFundamentals.svg'
import { ReactComponent as LearnReact } from '../../assets/images/learnReact.svg'
const Learn = () => {
    return (
        <section id="learn">
            <article className="learn-fundamentals p-3 mt-3">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md order-md-2 ms-md-3">
                            <LearnFundamentals className="img-fluid"/>
                        </div>
                        <div className="col-md">
                            <h3 className="my-3">Learn the Fundamentals</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam ex consequatur nobis
                                provident laboriosam officia blanditiis mollitia nisi pariatur!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore illo unde, quas
                                illum ratione et. Sapiente, accusantium totam, quisquam dignissimos officiis, ducimus
                                assumenda praesentium culpa nulla deserunt quos tenetur?</p>
                            <a href="#" className="btn btn-white p-0">Read More <i
                                className="bi bi-chevron-compact-down"></i></a>
                        </div>
                    </div>
                </div>
            </article>

            <article className="p-3 mt-3 bg-dark text-light learn-react">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md">
                            <LearnReact className="img-fluid" />
                        </div>
                        <div className="col-md ms-md-3">
                            <h3 className="my-3">Learn React</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam ex consequatur nobis
                                provident laboriosam officia blanditiis mollitia nisi pariatur!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore illo unde, quas
                                illum ratione et. Sapiente, accusantium totam, quisquam dignissimos officiis, ducimus
                                assumenda praesentium culpa nulla deserunt quos tenetur?</p>
                            <a href="#" className="btn btn-dark p-0">Read More <i
                                className="bi bi-chevron-compact-down"></i></a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Learn
