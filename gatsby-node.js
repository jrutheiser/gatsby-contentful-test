const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            slug
            title
            content {
              raw
            }
          }
        }
      }
    }
  `);

  result.data.allContentfulPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: node,
    });
  });
}