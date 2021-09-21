import React from 'react'

const FAQ = () => {
    return (
        <section id="faq" className="p-3 mt-3">
            <div className="container">
                <h3 className="text-center mb-3">Frequently Asked Questions</h3>
                <div className="accordion accordion-flush" id="questions">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-1">
                                What do I need to know?
                            </button>
                        </h2>
                        <div id="question-1" className="accordion-collapse collapse" data-bs-parent="#questions">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi non architecto
                                asperiores dolore, perspiciatis, inventore eos commodi reiciendis aut placeat eveniet
                                enim fuga omnis tempore, voluptatibus accusamus adipisci impedit praesentium soluta
                                tenetur. Cumque molestias vero id, consectetur libero perspiciatis.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-2">
                                Do you help me prepare for job interviews?
                            </button>
                        </h2>
                        <div id="question-2" className="accordion-collapse collapse" data-bs-parent="#questions">
                            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                                modi non architecto
                                asperiores dolore, perspiciatis, inventore eos commodi reiciendis aut placeat eveniet
                                enim fuga omnis tempore, voluptatibus accusamus adipisci impedit praesentium soluta
                                tenetur. Cumque molestias vero id, consectetur libero perspiciatis.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-3">
                                Where are you located?
                            </button>
                        </h2>
                        <div id="question-3" className="accordion-collapse collapse" data-bs-parent="#questions">
                            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                                modi non architecto
                                asperiores dolore, perspiciatis, inventore eos commodi reiciendis aut placeat eveniet
                                enim fuga omnis tempore, voluptatibus accusamus adipisci impedit praesentium soluta
                                tenetur. Cumque molestias vero id, consectetur libero perspiciatis.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-4">
                                What is Web Center?
                            </button>
                        </h2>
                        <div id="question-4" className="accordion-collapse collapse" data-bs-parent="#questions">
                            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                                modi non architecto
                                asperiores dolore, perspiciatis, inventore eos commodi reiciendis aut placeat eveniet
                                enim fuga omnis tempore, voluptatibus accusamus adipisci impedit praesentium soluta
                                tenetur. Cumque molestias vero id, consectetur libero perspiciatis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
