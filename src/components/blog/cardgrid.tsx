/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import 'twin.macro';
import Card from './card';

const CardGrid: React.FC<{
  posts?: {
    readonly node: Pick<GatsbyTypes.ContentfulPost, 'title' | 'createdAt'> & {
      author?: string;
      category?: Array<string>;
      contentful_id?: string;
    } & {
      readonly image: GatsbyTypes.Maybe<
        Pick<GatsbyTypes.ContentfulAsset, 'title'> & {
          readonly file: GatsbyTypes.Maybe<Pick<GatsbyTypes.ContentfulAssetFile, 'url'>>;
        }
      >;
    };
  };
  isNewsPost?: boolean;
  newsOrBlog?: string;
}> = ({ posts, isNewsPost, newsOrBlog }) => (
  <ol tw="pb-80 md:pb-60 lg:pb-56 list-none mb-0">
    {/* cards from here */}
    <div tw="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mx-10 sm:gap-12 sm:mx-36 md:mx-28 lg:mx-32">
      {/* @ts-ignore */}
      {posts.map(post => (
        <Card
          // @ts-ignore
          newsOrBlog={newsOrBlog}
          // @ts-ignore
          isNewsPost={isNewsPost}
          post={post}
          key={post?.node.contentful_id}
        />
      ))}
    </div>
  </ol>
);

export default CardGrid;
