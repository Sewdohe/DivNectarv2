import React, { Fragment, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { useSiteMetadata } from "../../utils/use-site-metadata";
// @ts-ignore
import Gtag from "../../utils/gtag";

interface SeoProps extends PropsWithChildren{
  title: string,
  description: string,
  pathname: string,
  image: string
}

const Seo = ({ title, description, pathname, children, image }: SeoProps) => {

  const { title: defaultTitle, description: defaultDescription, image: defaultImage, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || '${siteUrl}defaultImage',
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="/images/logo.png" />
      {children}
      <Gtag />
  </>
  );
};

export default Seo;