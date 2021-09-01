/* eslint-disable react/destructuring-assignment */
import React from 'react';
import 'twin.macro';
import Card from './card';

const CardGrid: React.FC<{
  posts: {
    readonly node: Pick<
      GatsbyTypes.ContentfulPost,
      'title' | 'category' | 'author' | 'slug' | 'date'
    > & {
      readonly image: GatsbyTypes.Maybe<
        Pick<GatsbyTypes.ContentfulAsset, 'title'> & {
          readonly file: GatsbyTypes.Maybe<Pick<GatsbyTypes.ContentfulAssetFile, 'url'>>;
        }
      >;
    };
  };
}> = posts => (
  <ol tw="list-none mb-0">
    {/* cards from here */}
    <div tw="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mx-10 mt-3 sm:gap-12 sm:mt-16  sm:mx-36 md:mx-28 lg:mx-32">
      {/* @ts-ignore */}
      {posts.posts.map(post => (
        // @ts-ignore
        <Card post={post} key={post?.node.slug} />
      ))}
    </div>
  </ol>
);

export default CardGrid;
