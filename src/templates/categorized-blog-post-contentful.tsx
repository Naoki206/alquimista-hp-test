/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Menu from '../components/blog/menu';
import Layout from '../components/layout';
import SEO from '../components/blog/seo';
import CardGrid from '../components/blog/cardgrid';

// const BlogIndex = ({ data, location }) => {
const CategorizedBlogPostContentfulTemplate: React.FC<
  PageProps<GatsbyTypes.categorizedBlogPostQuery>
> = ({ data, location }) => {
  const posts = data.allContentfulPost.edges;
  const [isSelected, setIsSelected] = React.useState(0);

  return (
    <Layout location={location} blogOrNewsHeadingLetter={1} blogOrNewsTopPage>
      <SEO title="categorizes posts" />
      <Menu location={location} isSelected={isSelected} setIsSelected={setIsSelected} />
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
    allContentfulPost(filter: { category: { eq: $category }, node_locale: { eq: "ja-JP" } }) {
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
