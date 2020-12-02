import React from "react"

import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Nav from '../components/navigation';
import Banner from '../components/banner';
import MidBook from "../components/front-book"
import Author from "../components/author"

const IndexPage = (props) => (
  <Layout>
    <Helmet title="Home | Phillip Bryson"/>
    <Nav pathExt={props.path} />
    <Banner /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <MidBook />
    <Author />
  </Layout>
)

export default IndexPage
