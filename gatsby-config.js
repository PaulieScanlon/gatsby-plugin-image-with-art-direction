module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'lemon',
        path: `${__dirname}/src/frames/lemon`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        quality: 70,
        formats: ['auto', 'webp', 'avif'],
        placeholder: 'dominantColor',
        width: 200
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/page-layout.js')
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`
  ]
};
