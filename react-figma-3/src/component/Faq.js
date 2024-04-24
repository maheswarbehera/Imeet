import React from 'react';

function Faq() {
    return (
        <>
            <div className="faq-bg">
                <div className="container pb-5">
                    <div className="faq-wrapper py-5">
                        <h1 className="faq-text-wrapper">Frequently asked Questions</h1>
                        <p className='des'> Here are some of the top FAQs to support you. Please do feel free to reach out to us for any
                            <br /> questions that you might have had but are not answered by the following.</p>
                    </div>

                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="custom accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What is Pickup App?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa aperiam excepturi exercitationem amet! Nulla magnam ipsum ut praesentium mollitia, impedit tempore, sed ullam sint omnis tempora vitae officiis, dolores minus.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="custom accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    How do I use Pickup App?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eaque adipisci nostrum laudantium doloribus, veniam est voluptatum laborum, libero vel odio possimus aperiam nisi aliquam voluptate pariatur fuga, saepe ea.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="custom accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    How do I book a tempo/mini truck/bike or intercity courier services online from the Porter
                                    app?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Get reliable and affordable logistics services from the Porter app by following these steps:
                                    <ol>
                                        <li>Sign in to the Porter app</li>
                                        <li>Choose the service you want - trucks, 2wheeler or intercity courier services</li>
                                        <li>Set your pick up and drop off location</li>
                                        <li>Browse through the list of available vehicles (Tata Ace, Pickup 8ft, 2wheeler etc) and pick the one that suits your moving needs</li>
                                        <li>Enter a few additional details, apply coupons to get exciting discounts, and confirm your booking.</li>
                                        <li>Sit back and relax - our verified driver partners will do the rest.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;
