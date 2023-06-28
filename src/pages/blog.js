import { graphql } from "gatsby";
import React from "react";
import FeaturedBlogs from "../components/BlogComponents/FeaturedBlogs";

const Blog = ({ data }) => {
  const BlogData = data.allSanityBlog.nodes;
  return (
    <>
      <FeaturedBlogs data = { BlogData }/>
    </>
  );
};

export default Blog;
export const blogQuery = graphql`
  query MyQuery {
    allSanityBlog {
      nodes {
        Title
        publishedDate
        slug {
          current
        }
        categories {
          title
        }
        excerpt {
          children {
            text
          }
        }
      }
    }
  }
`;