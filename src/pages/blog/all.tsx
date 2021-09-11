/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Menu from '../../components/blog/menu';
import Layout from '../../components/blog/layout';
import Seo from '../../components/blog/seo';
import CardGrid from '../../components/blog/cardgrid';

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogAllQuery>> = ({ data, location }) => {
  const blogTitle = data.site?.siteMetadata?.blog?.title || 'Title';
  const posts = data.allContentfulPost.edges;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={blogTitle} blogHeadingLetter blogTopPage>
        <Seo title="All posts" />
        <Menu location={location} />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified
          for the "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={blogTitle} blogHeadingLetter blogTopPage>
      <Seo title="All posts" />
      <Menu location={location} />
      <div>
        {/* @ts-ignore */}
        <CardGrid posts={posts} />
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogAll {
    site {
      siteMetadata {
        title
        blog {
          title
        }
      }
    }
    allContentfulPost(filter: { node_locale: { eq: "ja-JP" } }) {
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
