module.exports = {
  siteMetadata: {
    title: "Test Site",
    description: "Testing contentful sourced gatsby site.",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
