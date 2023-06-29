import React from 'react';
import { Helmet } from "react-helmet";


const SEO = ({ children, location, description, title, image}) => {
  return (
    <Helmet titleTemplate={`%s - Allan Fernandes`}>
      <html lang="en" />
      <title>{title}</title>
    </Helmet>
  );
}; 

export default SEO;