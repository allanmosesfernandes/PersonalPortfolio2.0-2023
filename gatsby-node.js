const SingleBlogTemplate = require.resolve("./src/templates/blog.js");

exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allSanityBlog {
        nodes {
          Title
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const blogNodes = (result.data.allSanityBlog || {}).nodes || [];

  blogNodes.forEach((node) => {
    const { slug = {} } = node;
    createPage({
      path: `/blog/${slug.current}`,
      component: SingleBlogTemplate,
      context: { slug: slug.current },
    });
  });
};
