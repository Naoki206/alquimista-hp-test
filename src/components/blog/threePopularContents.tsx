/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'twin.macro';
import Card from './card';

// const BlogIndex = ({ data, location }) => {
const ThreePopularContents: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.ThreePopularContentsQuery>(graphql`
    query ThreePopularContents {
      allContentfulPost(filter: { node_locale: { eq: "ja-JP" } }, limit: 3) {
        edges {
          node {
            title
            category
            author
            contentful_id
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
  `);

  const posts = data.allContentfulPost.edges;
  // @ts-ignore
  return (
    <ol tw="list-none mb-0 ">
      <div tw="text-left grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-12">
        {posts.map((post: { node: any }) => (
          // @ts-ignore
          <Card post={post} key={post?.node.contentful_id} />
        ))}
      </div>
    </ol>
  );
};

export default ThreePopularContents;
