/* eslint-disable react/destructuring-assignment */
/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { Link } from 'gatsby';
// eslint-disable-next-line import/no-unresolved
// import { WindowLocation } from '@reach/router';
import 'twin.macro';

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
      {posts.posts.map(post => {
        const title = post?.node.title || post.node.slug;
        return (
          // card from here
          <li key={post?.node.slug} tw="w-full">
            <div className="group" tw="border-black mb-16 h-80 sm:h-72 md:h-80 lg:h-96">
              <div tw="group-hover:opacity-80 transition duration-300">
                <Link to={`/blog/${post.node.slug}` || '/'} itemProp="url">
                  <div tw="overflow-hidden rounded-xl">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img
                      tw="w-full h-48 sm:h-48 lg:h-60 object-cover transform group-hover:scale-110 transition duration-300"
                      alt={post.node.image?.title}
                      src={post.node.image?.file?.url}
                    />
                  </div>
                  <div tw="my-2">
                    <p tw="mb-0 text-gray-500">{post.node.date}</p>
                  </div>
                  <div tw="px-2">
                    {/* category from here */}
                    <div tw="flex flex-wrap mb-1.5">
                      {/* @ts-ignore */}
                      {post.node.category?.map(category => (
                        <p
                          tw="mr-2 mb-0 px-2 text-sm rounded-full border-gray-400 border text-gray-500 font-bold"
                          key={category}
                        >
                          {category}
                        </p>
                      ))}
                    </div>
                    <h6 tw="m-0">
                      <span tw="text-lg font-extrabold" itemProp="headline">
                        {title}
                      </span>
                    </h6>
                    {/* author from here */}
                    <div tw="flex items-center">
                      <img
                        tw="w-9 rounded-full mr-4"
                        src={`/${post.node.author}.png`}
                        alt="{post.node.author}"
                      />
                      {/* <GatsbyImage
                              // src="../../../static/Naoki.png"
                              src={`../../../static/${post.node.author}.png`}
                              alt="{post.node.author}"
                              tw="w-9 rounded-full mr-4"
                            /> */}
                      <p tw="text-gray-700 m-0 text-xs">Written By {post.node.author}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  </ol>
);

export default CardGrid;
