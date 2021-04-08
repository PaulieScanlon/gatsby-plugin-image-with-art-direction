import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { Box } from 'theme-ui';

const Printer = () => {
  const {
    allFile: { nodes }
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "printer" }, ext: { eq: ".jpg" } }
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
      media: `print`,
      image: getImage(nodes[1])
    }
  ]);

  return <Box>{images ? <GatsbyImage alt="tree" image={images} /> : null}</Box>;
};

export default Printer;
