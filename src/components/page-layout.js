import React, { Fragment } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Container, Grid, Box, Link, Text } from 'theme-ui';

const PageLayout = ({ children }) => {
  return (
    <Fragment>
      <Box as="header" variant="styles.header">
        <Grid
          sx={{
            gridTemplateColumns: 'auto 1fr'
          }}
        >
          <Link as={GatsbyLink} to="/">
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
