import React from 'react'

const NFB = (props) => {

    return (
        <>
            <section className="web-banner" >
                <div className="container">
                    <div className="wrapper-ds">
                        <span data-aos="fade-up" data-aos-duration="2000">
                            {props.spanFirst}
                        </span>
                        <h1 data-aos="fade-up" data-aos-duration="3000">
                            {props.contextHeading}
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NFB