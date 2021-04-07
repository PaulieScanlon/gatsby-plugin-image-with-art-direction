import React, { useEffect, useState } from 'react';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { Box } from 'theme-ui';

import theme from '../gatsby-plugin-theme-ui';

import useLemon from '../hooks/useLemon';

const Lemon = ({ nodes }) => {
  const lemonQuery = useLemon();
  const [frames, setFrames] = useState([]);
  const [images, setImages] = useState(null);

  useEffect(() => {
    setFrames([].concat(...new Array(30).fill(lemonQuery)));
  }, [lemonQuery]);

  useEffect(() => {
    const min = parseInt(theme.breakpoints[0], 10);

    if (frames.length > 0) {
      setImages(
        withArtDirection(
          getImage(frames[0]),
          frames.map((frame, index) => {
            return {
              media: `(max-width: ${min + index}px)`,
              image: getImage(frame)
            };
          })
        )
      );
    }
  }, [frames]);

  return (
    <Box
      sx={{
        backgroundColor: 'lemon',
        img: {
          backgroundColor: 'lemon'
        }
      }}
    >
      {images ? <GatsbyImage alt="tomato" image={images} /> : null}
    </Box>
  );
};

export default Lemon;
