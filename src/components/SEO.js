import React from 'react';
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ children, location, description, title, image}) => {
//write static query to fetch data from graphql
//use siteMetadata to get data
  const { site } = useStaticQuery(graphql`
    query  {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);


  return (
    <Helmet titleTemplate={`%s - Allan Fernandes`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Meta Tags*/}
      <meta name="description" content={site.siteMetadata.description}/>
      <meta name="theme-color" content="#F9A600" />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/logo.png"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content={site.siteMetadata.title} key="ogsitename" />
      <meta property="og:description" content={description} key="ogdesc" />
    </Helmet>
  );
}; 

export default SEO;