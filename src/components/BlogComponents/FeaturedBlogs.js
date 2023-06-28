import React from 'react';
import { BlogCard, BlogListContainer } from './BlogStyles';
import { GatsbyImage } from 'gatsby-plugin-image';

const FeaturedBlogs = ({ data }) => {
  return (
    <BlogListContainer className="wrapper">
      {
        data.map((blog) => {
          const { Title, publishedDate, slug, categories, excerpt, _id, coverImage } = blog;
          const blogImage = coverImage.asset.gatsbyImage;
          //<p>{slug.current}</p>
        
          return (
            <BlogCard key={_id} className="">
              <div className='card--left'>
                <p className="category">{categories[0].title}</p>
                <h1>{Title}</h1>
                <p>{publishedDate}</p>
                <p>{excerpt[0]?.children[0]?.text}</p>
              </div>
              <GatsbyImage image={blogImage} alt="dfdf" className='coverImage'/>
            </BlogCard>
          );
        })}
    </BlogListContainer>
  );
};

export default FeaturedBlogs;
