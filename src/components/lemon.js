import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { Box } from 'theme-ui';

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
    []
      .concat(...new Array(29).fill(nodes))
      .map((frame, index) => {
        return {
          media: `(min-width: ${576 + index}px)`,
          image: getImage(frame)
        };
      })
      .reverse()
  );

  return (
    <Box>{images ? <GatsbyImage alt="lemon" image={images} /> : null}</Box>
  );
};

export default Lemon;
