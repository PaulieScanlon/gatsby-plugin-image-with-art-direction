import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Helmet } from 'react-helmet';

const PageLayout = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        name,
        description,
        keywords,
        siteUrl,
        siteImage,
        lang,
        type
      }
    }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            description
            keywords
            siteUrl
            siteImage
            lang
            type
          }
        }
      }
    `
  );

  return (
    <Fragment>
      <Helmet>
        <html lang={lang} />

        <title>{name}</title>
        <link rel="canonical" href={siteUrl} />
        <meta name="description" content={description} />
        <meta name="image" content={`${siteUrl}/${siteImage}`} />
        <meta name="image:alt" content={description} />
        <meta name="keywords" content={keywords ? keywords.join(', ') : null} />

        {/* Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={name} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/${siteImage}`} />
        <meta property="og:image:alt" content={description} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/${siteImage}`} />
        <meta name="twitter:image:alt" content={description} />

        {/* favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${siteUrl}/images/favicon-16x16.png`}
          data-react-helmet="true"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${siteUrl}/images/favicon-32x32.png`}
          data-react-helmet="true"
        />
      </Helmet>
      {children}
    </Fragment>
  );
};

export default PageLayout;
