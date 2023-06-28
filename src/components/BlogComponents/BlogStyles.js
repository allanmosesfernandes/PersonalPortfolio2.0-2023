import styled from "styled-components";
import BlogBackground from "../../assets/images/blog/blog-bg.png";

export const BlogListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    padding: 2rem 0;
    width: 100%;
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