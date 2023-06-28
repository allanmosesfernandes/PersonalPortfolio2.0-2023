import React from 'react';
import {TwitterTweetEmbed} from "react-twitter-embed";
import { BlogListContainer, FullWidthBlogBg } from './BlogStyles';

const FeaturedBlogs = ({ data }) => {
  console.log(data);
  return (
    <BlogListContainer className="wrapper">
      <TwitterTweetEmbed tweetId={"1672156965693272066"} />
    </BlogListContainer>
  );
};

export default FeaturedBlogs;
