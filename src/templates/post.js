import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
      body {
        json
      }
    }
  }
`

const Post = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <h1>{props.data.contentfulPost.title}</h1>
      <p>{props.data.contentfulPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulPost.body.json, options)}
    </Layout>
  )
}

export default Post
