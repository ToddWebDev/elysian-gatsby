import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h2>Home. Reimagined.</h2>
      <p>
        Need a new home experience?{" "}
        <Link to="/contact">Contact Elysian Design</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
