import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { Box } from 'theme-ui';

import theme from '../gatsby-plugin-theme-ui';

const DesktopFirst = () => {
  const {
    allFile: { nodes }
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "desktop-first" }
          ext: { eq: ".jpg" }
        }
        sort: { fields: name, order: DESC }
      ) {
        nodes {
          name
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const images = withArtDirection(getImage(nodes[0]), [
    {
      media: `(max-width: ${parseInt(theme.breakpoints[0], 10)}px)`,
      image: getImage(nodes[1])
    }
  ]);

  return (
    <Box
      sx={{
        backgroundColor: 'desktopFirst',
        img: {
          backgroundColor: 'desktopFirst'
        }
      }}
    >
      {images ? <GatsbyImage alt="product" image={images} /> : null}
    </Box>
  );
};

export default DesktopFirst;
