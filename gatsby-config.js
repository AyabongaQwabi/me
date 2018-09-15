module.exports = {
  siteMetadata: {
    title: 'Ayabonga Qwabbi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu\:700`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    }],
}
