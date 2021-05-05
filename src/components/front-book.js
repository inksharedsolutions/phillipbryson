import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../static/book/book-cover-min.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books" >

                        <div className="book-wraps" >
                            <img src={FrontBook} data-aos="fade-up" data-aos-duration="3000" alt="Socialism Revealed"/>
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p data-aos="fade-up" data-aos-duration="2000">
                            Socialism Revealed summarizes the history of socialist thought and socialist economic theories. It also reviews the attempts to develop socialist economies in the Soviet Union and the bloc countries, China, India, and in West European democratic countries.<br /><br />
                            Finally, it reviews the economic implications of policies under discussion by democrats and socialist activists in today's politics.
                            </p>

                            <Link className="btn-book-featured" data-aos="fade-up" data-aos-duration="3000" to="/about-the-book">
                                Read More
                            </Link>
                            

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook