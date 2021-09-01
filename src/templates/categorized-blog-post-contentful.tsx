/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Bio from '../components/blog/bio';
import Layout from '../components/blog/layout';
import Seo from '../components/blog/seo';
import CardGrid from '../components/blog/cardgrid';

// const BlogIndex = ({ data, location }) => {
const CategorizedBlogPostContentfulTemplate: React.FC<
  PageProps<GatsbyTypes.categorizedBlogPostQuery>
> = ({ data, location }) => {
  const blogTitle = data.site?.siteMetadata?.blog?.title || 'Title';
  const posts = data.allContentfulPost.edges;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={blogTitle} blogHeader>
        <Seo title="All posts" />
        <Bio location={location} />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified
          for the "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={blogTitle} blogHeader>
      <Seo title="All posts" />
      <Bio location={location} />
      <div>
        {/* @ts-ignore */}
        <CardGrid posts={posts} />
      </div>
    </Layout>
  );
};

export default CategorizedBlogPostContentfulTemplate;

export const pageQuery = graphql`
  query categorizedBlogPost($category: String!) {
    site {
      siteMetadata {
        title
        blog {
          title
        }
      }
    }
    allContentfulPost(
      filter: { category: { eq: $category }, node_locale: { eq: "ja-JP" } }
      sort: { order: DESC, fields: date }
    ) {
      edges {
        node {
          title
          category
          author
          slug
          date(formatString: "YYYY.MM.DD")
          image {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;
