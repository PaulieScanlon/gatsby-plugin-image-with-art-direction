import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { Box } from 'theme-ui';

const AspectRatio = () => {
  const {
    allFile: { nodes }
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "aspect-ratio" }
          ext: { eq: ".jpg" }
        }
        sort: { fields: name, order: ASC }
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
      media: `(max-width: 576px)`,
      image: getImage(nodes[1])
    }
  ]);

  return (
    <Box
      sx={{
        '.art-directed': {
          height: 'auto'
        },
        '@media (max-width: 576px)': {
          '.art-directed': {
            height: 600
          }
        }
      }}
    >
      {images ? (
        <GatsbyImage className="art-directed" alt="animals" image={images} />
      ) : null}
    </Box>
  );
};

export default AspectRatio;
