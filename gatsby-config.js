module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'lemon',
        path: `${__dirname}/src/images/lemon`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'desktop-first',
        path: `${__dirname}/src/images/desktop-first`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'aspect-ratio',
        path: `${__dirname}/src/images/aspect-ratio`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'printer',
        path: `${__dirname}/src/images/printer`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        quality: 70,
        formats: ['auto', 'webp', 'avif'],
        placeholder: 'dominantColor'
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
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`
  ]
};
