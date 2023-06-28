import { graphql } from 'gatsby';
import React from 'react';

const BlogTemplate = () => {

  return (
    <div>BlogTemplate</div>
  );
};

export default BlogTemplate;
// export const query = graphql`
//     query($id: String!) {
//         sanityBlog(_id: { eq: $id }) {
//     nodes {
//       Title
//       _rawCoverImage
//       _rawContent
//     }
// } 
// }
// `;

