import { graphql } from "gatsby";
import React from "react";
import PortableBlog from "../components/BlogComponents/PortableBlog";

const BlogTemplate = ({ data }) => {
  const { Title, publishedDate, _rawContent } = data.sanityBlog;
  console.log(_rawContent);
  return (
    <div>
      <h1>{Title}</h1>
      <p>{publishedDate}</p>
      {/* <div>{_rawContent[0].children[0].text}</div> */}
      <PortableBlog portableTextContent={_rawContent} />
    </div>
  );
};

export default BlogTemplate;
export const query = graphql`
    query($id: String!) {
        sanityBlog(_id: { eq: $id }) {
            Title
            publishedDate
            _rawContent
        }
    }
    `;   

