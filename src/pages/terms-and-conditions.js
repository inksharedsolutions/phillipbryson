import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Parser from 'html-react-parser';

import Layout from "../components/layout"
import Nav from '../components/navigation'
import Banner from '../components/non-front-banner';
import { Helmet } from "react-helmet"

const Terms = (props) => {

  const FetchMarkDown = useStaticQuery(graphql`
		 query TermsAndConditionsPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/terms-and-conditions.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
  `)
  
  const data = { ...FetchMarkDown.markdownRemark };

  return (
    <Layout>
      <Helmet title="Terms and Conditions | Phillip Bryson"/>
      <Nav pathExt={props.path} />
      <Banner
        spanFirst={`Terms and`}
        contextHeading={`Conditions`} />
      <div className="container">
        <div id="terms-and-conditions-content">
          <div className="">
            {Parser(data.html)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Terms;
