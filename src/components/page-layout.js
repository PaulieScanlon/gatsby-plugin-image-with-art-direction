import { Container, Grid, Box, Link, Text } from 'theme-ui';
import React, { Fragment } from 'react';

const PageLayout = ({ children }) => {
  return (
    <Fragment>
      <Box as="header" variant="styles.header">
        <Grid
          sx={{
            gridTemplateColumns: 'auto 1fr'
          }}
        >
          <Link
            href="https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image#withartdirection"
            target="_blank"
            rel="noopener"
          >
            <Text as="div" sx={{ fontSize: 1 }}>
              gatsby-plugin-image
            </Text>
            <Text as="div" sx={{ fontWeight: 'bold', fontSize: 3 }}>
              withArtDirection
            </Text>
          </Link>
        </Grid>
      </Box>
      <Box as="main">
        <Container>{children}</Container>
      </Box>
    </Fragment>
  );
};

export default PageLayout;
