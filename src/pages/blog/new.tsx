/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Menu from '../../components/blog/menu';
import Layout from '../../components/layout';
import SEO from '../../components/blog/seo';
import CardGrid from '../../components/blog/cardgrid';

// const BlogIndex = ({ data, location }) => {
const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogNewQuery>> = ({ data, location }) => {
  const posts = data.allContentfulPost.edges;
  const [isSelected, setIsSelected] = React.useState(2);

  if (posts.length === 0) {
    return (
      <Layout location={location} blogOrNewsHeadingLetter={1} blogOrNewsTopPage>
        <SEO title="New posts" />
        <Menu location={location} isSelected={isSelected} setIsSelected={setIsSelected} />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified
          for the "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} blogOrNewsHeadingLetter={1} blogOrNewsTopPage>
      <SEO title="New posts" />
      <Menu location={location} isSelected={isSelected} setIsSelected={setIsSelected} />
      <div>
        {/* @ts-ignore */}
        <CardGrid posts={posts} />
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogNew {
    allContentfulPost(
      filter: { node_locale: { eq: "ja-JP" }, title: { ne: "dummy" } }
      sort: { order: DESC, fields: updatedAt }
    ) {
      edges {
        node {
          title
          category
          author
          slug
          zennUrl
          noteUrl
          updatedAt(formatString: "YYYY.MM.DD")
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
