import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2>Posts</h2>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.frontmatter.date}>
              <h3>
                <Link to={`/posts/${edge.node.frontmatter.title}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h3>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default PostsPage
