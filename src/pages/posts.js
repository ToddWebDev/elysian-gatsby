import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import postsStyles from "./posts.module.scss"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2>Posts</h2>
      <ol className={postsStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={postsStyles.post} key={edge.node.frontmatter.date}>
              <Link to={`/posts/${edge.node.fields.slug}`}>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default PostsPage
