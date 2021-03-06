/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Layout from '../../components/layout';
import SEO from '../../components/blog/seo';
import CardGrid from '../../components/blog/cardgrid';

const NewsIndex: React.FC<PageProps<GatsbyTypes.NewsIndexQuery>> = ({ data, location }) => {
  const posts = data.allContentfulNews.edges;

  if (posts.length === 0) {
    return (
      <Layout location={location} blogOrNewsHeadingLetter={2} blogOrNewsTopPage>
        <SEO title="News posts" />
        <p>まだ記事がありません。</p>
      </Layout>
    );
  }

  return (
    <Layout location={location} blogOrNewsHeadingLetter={2} blogOrNewsTopPage>
      <SEO title="News posts" />
      <div>
        {/* @ts-ignore */}
        <CardGrid posts={posts} isNewsPost />
      </div>
    </Layout>
  );
};

export default NewsIndex;

export const pageQuery = graphql`
  query NewsIndex {
    allContentfulNews(filter: { node_locale: { eq: "ja-JP" }, title: { ne: "dummy" } }) {
      edges {
        node {
          slug
          zennUrl
          noteUrl
          title
          createdAt(formatString: "YYYY.MM.DD")
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
