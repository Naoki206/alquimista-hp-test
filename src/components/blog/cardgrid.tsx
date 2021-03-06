/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import 'twin.macro';
import NewsCard from '../news/newsCard';
import Card from './card';

const CardGrid: React.FC<{
  posts?: {
    readonly node: Pick<GatsbyTypes.ContentfulPost, 'title' | 'createdAt'> & {
      author?: string;
      category?: Array<string>;
      slug?: string;
    } & {
      readonly image: GatsbyTypes.Maybe<
        Pick<GatsbyTypes.ContentfulAsset, 'title'> & {
          readonly file: GatsbyTypes.Maybe<Pick<GatsbyTypes.ContentfulAssetFile, 'url'>>;
        }
      >;
    };
  };
  isNewsPost?: boolean;
}> = ({ posts, isNewsPost }) => (
  <ol tw="pb-80 md:pb-60 lg:pb-56 list-none mb-0">
    {/* cards from here */}
    {isNewsPost ? (
      <div tw="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 sm:gap-12 lg:mx-32 mx-5 sm:mx-4 md:mx-28 xl:mx-56">
        {/* @ts-ignore */}
        {posts.map(post => (
          <NewsCard post={post} key={post?.node.slug} />
        ))}
      </div>
    ) : (
      <div tw="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 sm:gap-12 lg:mx-32 mx-5 sm:mx-4 md:mx-28 xl:mx-44">
        {/* @ts-ignore */}
        {posts.map(post => (
          <Card post={post} key={post?.node.slug} />
        ))}
      </div>
    )}
  </ol>
);

export default CardGrid;
