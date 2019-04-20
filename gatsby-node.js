const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("./src/templates/post.js")
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  const result = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulPost.edges.forEach(edge => {
    createPage({
      component: postTemplate,
      path: `/posts/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
