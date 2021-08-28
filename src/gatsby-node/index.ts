// src/gatsby-node/index.ts

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
// import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode, Actions } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template
  // for blog post
  const blogPost = path.resolve('./src/templates/blog-post-contentful.tsx');
  // for categorized blog post
  const categorizedPost = path.resolve('./src/templates/categorized-blog-post-contentful.tsx');
  // for particular wiriter's blog post
  const writerPost = path.resolve('./src/templates/writer-blog-post-contentful.tsx');

  // Get all blog posts
  const result = await graphql<{
    allContentfulPost: Pick<GatsbyTypes.Query['allContentfulPost'], 'edges' | 'distinct'>;
  }>(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
              title
              content {
                raw
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild('There was an error loading your blog posts', result.errors);
    return;
  }

  const posts = result.data!.allContentfulPost.edges;

  // Create blog posts pages
  if (posts && posts.length > 0) {
    posts.forEach((post, index) => {
      // const previousPostId = index === 0 ? null : posts[index - 1].node.id;
      // const nextPostId = index === posts.length - 1 ? null : posts[index + 1].node.id;
      createPage({
        path: `/blog/${post.node.slug}` || '/',
        component: blogPost,
        context: {
          id: post.node.id,
          slug: post.node.slug,
          // previousPostId,
          // nextPostId,
        },
      });
    });
  }

  // Get each category name
  const fetchCategoriesResult = await graphql<{
    allContentfulPost: Pick<GatsbyTypes.Query['allContentfulPost'], 'distinct'>;
  }>(
    `
      {
        allContentfulPost {
          distinct(field: category)
        }
      }
    `
  );
  if (fetchCategoriesResult.errors) {
    reporter.panicOnBuild(
      'There was an error loading categorized blog posts',
      fetchCategoriesResult.errors
    );
    return;
  }
  const categories = fetchCategoriesResult.data!.allContentfulPost.distinct;

  // Create categorized blog posts pages
  categories.forEach(category => {
    createPage({
      path: `blog/category/${category}/`,
      component: categorizedPost,
      context: {
        category,
      },
    });
  });

  // Get writer's name
  const fetchWritersResult = await graphql<{
    allContentfulPost: Pick<GatsbyTypes.Query['allContentfulPost'], 'distinct'>;
  }>(
    `
      {
        allContentfulPost {
          distinct(field: author)
        }
      }
    `
  );
  if (fetchWritersResult.errors) {
    reporter.panicOnBuild(
      "There was an error loading writer's blog posts",
      fetchWritersResult.errors
    );
    return;
  }
  const writers = fetchWritersResult.data!.allContentfulPost.distinct;

  // Create each writer's blog posts pages
  writers.forEach(writer => {
    createPage({
      path: `blog/writer/${writer}/`,
      component: writerPost,
      context: {
        writer,
      },
    });
  });
};

// export const onCreateNode: GatsbyNode['onCreateNode'] = ({
//   node,
//   actions,
//   getNode,
// }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === 'MarkdownRemark') {
//     const value = createFilePath({ node, getNode });

//     createNodeField({
//       name: 'slug',
//       node,
//       value,
//     });
//   }
// };

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
}: {
  actions: Actions;
}) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
