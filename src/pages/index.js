import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>The Code Practice Webapp in GatsbyJs</h1>
      <div class="list">
      {data.allWordpressPost.edges.map(({ node }) => (
        <div class="col-sm-12">
		<div class="post_block">
          <Link to={node.slug}>
            <p class="title">{node.title}</p>
          </Link>
          <div class="post-content" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
        </div>
      ))}
	  </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date],order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }`