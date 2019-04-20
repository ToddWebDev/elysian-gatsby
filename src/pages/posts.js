import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import postsStyles from "./posts.module.scss"

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2>Posts</h2>
      <ol className={postsStyles.posts}>
        {data.allContentfulPost.edges.map(edge => {
          return (
            <li className={postsStyles.post} key={edge.node.publishedDate}>
              <Link to={`/posts/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default PostsPage
