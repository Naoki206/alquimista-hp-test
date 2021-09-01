/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'gatsby';

import 'twin.macro';

const Card: React.FC<{
  post: {
    node: {
      slug: string;
      image: { title: string | undefined; file: { url: string | undefined } };
      date: string;
      category: Array<string>;
      title: string;
      author: string;
    };
  };
}> = post => (
  <li tw="w-full">
    <div className="group" tw="border-black mb-16 h-80 sm:h-72 md:h-80 lg:h-96">
      <div tw="group-hover:opacity-80 transition duration-300">
        <Link to={`/blog/${post.post.node.slug}` || '/'} itemProp="url">
          <div tw="relative overflow-hidden rounded-xl">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              tw="w-full h-48 sm:h-48 lg:h-60 object-cover transform group-hover:scale-110 transition duration-300"
              alt={post.post.node.image?.title}
              src={post.post.node.image?.file?.url}
            />
            <p tw="hidden group-hover:block bg-lightGreen bg-opacity-75 hover:bg-opacity-100 rounded-full px-5 py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-50">
              Noteで読む
            </p>
          </div>
          <div tw="my-2">
            <p tw="mb-0 text-gray-500">{post.post.node.date}</p>
          </div>
          <div tw="px-2">
            <div tw="flex flex-wrap mb-1.5">
              {/* @ts-ignore */}
              {post.post.node.category?.map(category => (
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
                {post?.post.node.title}
              </span>
            </h6>
            <div tw="flex items-center">
              <img
                tw="w-9 rounded-full mr-4"
                src={`/${post.post.node.author}.png`}
                alt="{post.node.author}"
              />
              {/* <GatsbyImage
                              // src="../../../static/Naoki.png"
                              src={`../../../static/${post.node.author}.png`}
                              alt="{post.node.author}"
                              tw="w-9 rounded-full mr-4"
                            /> */}
              <p tw="text-gray-700 m-0 text-xs">Written By {post.post.node.author}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </li>
);

export default Card;
