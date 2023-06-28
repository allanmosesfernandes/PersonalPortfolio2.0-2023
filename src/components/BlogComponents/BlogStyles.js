import styled from "styled-components";
import BlogBackground from "../../assets/images/blog/blog-bg.png";

export const BlogListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    padding: 2rem 0;
    width: 100%;
    font-family: "Fira Code", monospace;

`;

export const BlogCard = styled.div`
  display: flex;
  width: 100%;
  .category {
    font-size: 1.2rem;  
    background-color: var(--base-orange);
    width: fit-content;
    padding: 0.5rem;
    border-radius: 20px;
    opacity: 0.8;
    .card--left {
        width: 75%;
    }
    .coverImage {
        margin-left: auto;
    }
`;

export const FullWidthBlogBg = styled.div`
    background: #000;
    width: 100%;
    background-image: url(${BlogBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 300px;
    z-index: -1;
`;