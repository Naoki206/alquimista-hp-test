/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Menu from '../components/blog/menu';
import Layout from '../components/layout';
import SEO from '../components/blog/seo';
import CardGrid from '../components/blog/cardgrid';

// const BlogIndex = ({ data, location }) => {
const WriterBlogPostContentfulTemplate: React.FC<PageProps<GatsbyTypes.WriterBlogPostQuery>> = ({
  data,
  location,
}) => {
  const posts = data.allContentfulPost.edges;
  const [isSelected, setIsSelected] = React.useState(0);

  if (posts.length === 0) {
    return (
      <Layout location={location} blogOrNewsHeadingLetter={1} blogOrNewsTopPage>
        <SEO title="writer's posts" />
        <Menu location={location} isSelected={isSelected} setIsSelected={setIsSelected} />
        <p>該当の記事はございません。</p>
      </Layout>
    );
  }

  return (
    <Layout location={location} blogOrNewsHeadingLetter={1} blogOrNewsTopPage>
      <SEO title="All posts" />
      <Menu location={location} isSelected={isSelected} setIsSelected={setIsSelected} />
      <div>
        {/* @ts-ignore */}
        <CardGrid posts={posts} />
      </div>
    </Layout>
  );
};

export default WriterBlogPostContentfulTemplate;

export const pageQuery = graphql`
  query WriterBlogPost($writer: String!) {
    allContentfulPost(
      filter: { author: { eq: $writer }, node_locale: { eq: "ja-JP" } }
      sort: { order: DESC, fields: updatedAt }
    ) {
      edges {
        node {
          title
          category
          author
          slug
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
