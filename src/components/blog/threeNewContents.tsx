/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'twin.macro';
import Card from './card';

// const BlogIndex = ({ data, location }) => {
const ThreeNewContents: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.ThreeNewContentsQuery>(graphql`
    query ThreeNewContents {
      allContentfulPost(
        filter: { node_locale: { eq: "ja-JP" } }
        sort: { order: DESC, fields: updatedAt }
        limit: 3
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
  `);

  const posts = data.allContentfulPost.edges;
  // @ts-ignore
  return (
    <ol tw="list-none mb-0 ">
      <div tw="text-left grid sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-12">
        {posts.map(post => (
          // @ts-ignore
          <Card post={post} key={post?.node.slug} newsOrBlog="blog" />
        ))}
      </div>
    </ol>
  );
};

export default ThreeNewContents;
