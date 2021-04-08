import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { Box } from 'theme-ui';

import theme from '../gatsby-plugin-theme-ui';
const min = parseInt(theme.breakpoints[0], 10);

const Lemon = () => {
  const {
    allFile: { nodes }
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "lemon" }, ext: { eq: ".jpg" } }
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

  const images = withArtDirection(
    getImage(nodes[0]),
    [].concat(...new Array(29).fill(nodes)).map((frame, index) => {
      return {
        media: `(max-width: ${min + index}px)`,
        image: getImage(frame)
      };
    })
  );

  return (
    <Box>{images ? <GatsbyImage alt="tomato" image={images} /> : null}</Box>
  );
};

export default Lemon;
