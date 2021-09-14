/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Menu from '../../components/blog/menu';
import Layout from '../../components/blog/layout';
import Seo from '../../components/blog/seo';
import CardGrid from '../../components/blog/cardgrid';

// const BlogIndex = ({ data, location }) => {
const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogPopularQuery>> = ({ data, location }) => {
  const posts = data.allContentfulPost.edges;
  const [isSelected, setIsSelected] = React.useState(3);

  if (posts.length === 0) {
    return (
      <Layout location={location} blogOrNewsHeadingLetter={1} blogOrNewsTopPage>
        <Seo title="All posts" />
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
      <Seo title="All posts" />
      <Menu location={location} isSelected={isSelected} setIsSelected={setIsSelected} />
      <div>
        {/* @ts-ignore */}
        <CardGrid posts={posts} newsOrBlog="blog" />
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogPopular {
    allContentfulPost(filter: { node_locale: { eq: "ja-JP" } }) {
      edges {
        node {
          title
          category
          author
          contentful_id
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
