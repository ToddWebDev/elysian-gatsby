import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact</h2>
      <p>
        The best way to reach us is via{" "}
        <a
          href="https://www.instagram.com/_elysian_design"
          target="_blank"
          rel="noopener noreferrer"
        >
          @_elysian_design
        </a>
        &nbsp; on Instagram.
      </p>
    </Layout>
  )
}

export default ContactPage
