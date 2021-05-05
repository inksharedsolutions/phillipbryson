import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/non-front-banner';
import BookInfo from '../components/book-info/book-info'
import Book1 from '../static/book/book-cover-min.png'
import { DiscussionEmbed } from "disqus-react"

const Book = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'phillip-bryson',
        config: { identifier: 12, slug }
    }

    return(
        <Layout>
            <Helmet title="Book | Phillip Bryson"/>
            <Nav pathExt={props.path} />
            <Banner
                spanFirst={`About The`}
                contextHeading={`Book`} />

            <main className="wrapperMain">
                <div
                    className="container"
                    id="book-containers" >

                    <BookInfo
                        data={{
                            title: `Socialism Revealed`,
                            spanFirst: `WHY SOCIALISM'S ISSUES HAVE NEVER PERMITTED SUCCESS IN A REAL ECONOMY`,
                            imgSrc: Book1,
                            id: 'the_gifted_one',
                            content:
                                `
                                    <p>
                                    Socialism Revealed summarizes the history of socialist thought and socialist economic theories. It also reviews the attempts to develop socialist economies in the Soviet Union and the bloc countries, China, India, and in West European democratic countries. Finally, it reviews the economic implications of policies under discussion by democrats and socialist activists in today's politics.
                                    </p>

                                    <p>
                                    Previously, Professor Bryson combined a detailed three-volume treaty on socialist and Marxist theories, central economic planning in several countries, and the Obama-era efforts to "transform" our economy into a single, encyclopedic, comprehensive work. That book is entitled Socialism: Origins, Expansion, Decline, and the Attempted Revival in the United States. This current brief sequel, Socialism Revealed, summarizes and updates the previously long and detailed book.
                                    </p>

                                    <p>
                                    Phillip J. Bryson is a professor of economics emeritus, having retired from the Marriott School of Management at Brigham Young University. He also taught at the University of Arizona and at Ohio State University, where he received a PhD in economics.
                                    </p>

                                    <p>
                                    In a career extending beyond forty years, he published well over one hundred academic papers and ten books. His publications have almost exclusively focused on issues of socialist economic theories and economies.
                                    </p>

                                    <p>
                                    He and his wife, Pat, live near McKinney, Texas, when it's cold and in Provo, Utah, when it's warm. They spend time with their seven children, twenty-five grandchildren, and eleven great grandchildren.
                                    </p>
                                            
                                `,

                            ebooks: {
                                stratton: 'https://www.stratton-press.com/books/socialism-revealed-why-socialisms-issues-have-never-permitted-success-in-a-real-economy/',
                                barnes: 'https://www.barnesandnoble.com/w/socialism-revealed-phillip-bryson/1137152737?ean=9781648950513',
                                amazon: 'https://www.amazon.com/Socialism-Revealed-Socialisms-Permitted-Success-ebook/dp/B089TBT6B7/ref=sr_1_1?dchild=1&keywords=9781648950513&qid=1591741983&sr=8-1',
                            },
                            paperback: {
                                amazon: 'https://www.amazon.com/Socialism-Revealed-Socialisms-Permitted-Success/dp/1648950507/ref=sr_1_1?dchild=1&keywords=978-1648950506&qid=1606803015&sr=8-1',
                                barnes: 'https://www.barnesandnoble.com/w/socialism-revealed-phillip-bryson/1137152737?ean=9781648950506',
                                booksamillion: 'https://www.booksamillion.com/p/Socialism-Revealed/Phillip-Bryson/9781648950506?id=8058437897017',
                            }
                        }}
                    />

                    <div className="commentSection" >
                        <div id="disqus_thread">
                            <DiscussionEmbed {...disqusConfig} />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Book;