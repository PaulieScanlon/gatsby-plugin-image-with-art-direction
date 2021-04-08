import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link } from 'theme-ui';

const BackButton = () => {
  return (
    <Link as={GatsbyLink} variant="styles.back" to="/">
      <span role="img" aria-label="Backhand Index Pointing Left">
        👈
      </span>{' '}
      Back
    </Link>
  );
};

export default BackButton;
