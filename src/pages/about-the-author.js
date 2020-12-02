import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/non-front-banner';
import AuthorImg from '../static/author/author-photo.png'

const Author = (props) => {
    return(
        <>
            <Layout>
                <Helmet title="Author | Phillip Bryson"/>
                <Nav pathExt={props.path} />
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div>

                            <div className="heading-quote">
                                <h4>

                                </h4>
                                <span className="ata-span-fx">
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            I grew up in Bountiful, Utah, went to the University of Utah. After my sophomore year, I went for a 30 month mission to North Germany and Berlin for The Church of Jesus Christ of Latter-day Saints.
                            </p>
                            <p>
                            On my return, I married Patricia Anderson, then went on to graduate from the University of Utah, as my wife had previously done. We moved to Columbus, Ohio and I received a PhD in Economics in 1967. We then moved to the University of Arizona in Tucson, where I worked as an Assistant, then Associate Professor before becoming a full professor in 1977.
                            </p>
                            <p>
                            From Tucson we travelled several times to Europe for my research. I was studying and writing about socialist economies, the German Democratic Republic and the Soviet Union, as well as about theories of socialist economics.
                            </p>
                            <p>
                            In 1988 I left Arizona to become a professor at Brigham Young University in Provo, Utah, and I taught and published books and articles almost exclusively on socialist topics. I traveled, frequently with my family, to various places in Europe where I continued to research socialist economies and theories until my retirement from BYU in 2010. At that point, the US was beginning in some quarters to display affection for socialism. I was worried about America’s future if socialists were to take over our country, so I decided to publish some of what I had learned about socialism’s issues.
                            </p>
                            <p>
                            This book Socialism Revealed: Why Socialism’s Issues Have Never Permitted Success in a Real Economy is a sequel to a much larger book I published in 2015, Socialism: Origins, Expansion, Decline and the Attempted Revival in the United States. I produced this sequel because I wanted to provide a shorter read for a generation that spends more time with a device than with reading. I also wanted to update the earlier work by reviewing the socialist policies proposed by socialist candidates in the 2020 election.
                            </p>

                            <q>
                            The scope of Bryson’s treatment is dizzying, the erudition nearly unbelievable, and his scholarly rigor impressive. . . This is a magisterial work, encyclopedic and astute.
                            </q>
                            
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Phillip Bryson</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Author;
