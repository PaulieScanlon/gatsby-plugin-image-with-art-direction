import { graphql, useStaticQuery } from 'gatsby';

const useLemon = () => {
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

  return nodes;
};

export default useLemon;
