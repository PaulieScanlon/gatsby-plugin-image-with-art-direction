import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link, Grid, Box, Card, Heading, Text, Image, Button } from 'theme-ui';

const ClickableCard = ({ to, thumbnail, title, body }) => {
  return (
    <Card>
      <Link as={GatsbyLink} to={`/${to}`}>
        <Box variant="cards.body">
          <Grid
            sx={{
              alignItems: 'flex-end',
              gridTemplateColumns: ['1fr', '1fr auto'],
              gap: [4, 4, 2]
            }}
          >
            <Grid
              sx={{
                alignItems: 'center',
                gridTemplateColumns: 'auto 1fr'
              }}
            >
              <Image alt="lemon-thumbnail" src={`./images/${thumbnail}.jpg`} />
              <Box>
                <Heading as="h3" variant="styles.h3">
                  {title}
                </Heading>
                <Text>{body}</Text>
              </Box>
            </Grid>
            <Box>
              <Button
                sx={{
                  width: ['100%', 'auto']
                }}
              >
                VIEW EXAMPLE
              </Button>
            </Box>
          </Grid>
        </Box>
      </Link>
    </Card>
  );
};

export default ClickableCard;
