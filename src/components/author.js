import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../static/author/author-photo.png'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                        I grew up in Bountiful, Utah, went to the University of Utah. After my sophomore year, I went for a 30 month mission to North Germany and Berlin for the Church of Jesus Christ of Latter-day Saints. <br /><br />
                        On my return, I married Patricia Anderson, then went on to graduate from the University of Utah, as my wife had previously done.
                        </p>

                        <h1 className="author-name-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <span>Phillip</span>
                            <span>Bryson</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>
                        <Link className="btn-book-featured" data-aos="fade-up" data-aos-duration="3000" to="/about-the-author">
                            Read More
                        </Link>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;