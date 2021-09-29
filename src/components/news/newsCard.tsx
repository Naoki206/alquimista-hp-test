/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'gatsby';

import 'twin.macro';

const NewsCard: React.FC<{
  post: {
    node: {
      contentslugful_id: string;
      image: { title: string | undefined; file: { url: string | undefined } };
      updatedAt: string;
      category?: Array<string>;
      title: string;
      author?: string;
      slug: string;
      zennUrl?: string;
      noteUrl?: string;
    };
  };
}> = ({ post }) => {
  const { zennUrl } = post.node;
  const { noteUrl } = post.node;

  return (
    <li tw="w-full">
      <div className="group" tw="border-black h-80 sm:h-72 md:h-80 lg:h-96 box-content">
        <div tw="group-hover:opacity-80 transition duration-300">
          <div tw="relative overflow-hidden rounded-xl">
            <Link to={`/news/${post.node.slug}` || '/'} itemProp="url">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              {post.node.image ? (
                <>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img
                    tw="w-full h-48 sm:h-48 lg:h-60 object-cover transform group-hover:scale-110 transition duration-300"
                    alt={post.node.image?.title}
                    src={post.node.image?.file?.url}
                  />
                </>
              ) : (
                <>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img
                    tw="w-full h-48 sm:h-48 lg:h-60 object-cover transform group-hover:scale-110 transition duration-300"
                    alt="blog_alquimista_logo.jpg"
                    src="/blog_alquimista_logo.jpg"
                  />
                </>
              )}
            </Link>

            {zennUrl && (
              <a href={zennUrl}>
                <div tw="hidden sm:group-hover:block bg-zennColor bg-opacity-75 hover:bg-opacity-100 rounded-full px-2.5 py-2.5 text-blue-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div tw="flex justify-center items-center">
                    <img tw="w-4 mr-1" src="/zenn_logo.svg" alt="/note_logo.svg" />
                    <p tw="text-sm mb-0.5">zennで読む</p>
                  </div>
                </div>
              </a>
            )}
            {noteUrl && (
              <a href={noteUrl}>
                <div tw="hidden sm:group-hover:block bg-lightGreen bg-opacity-75 hover:bg-opacity-100 rounded-full px-2.5 py-2.5 text-blue-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div tw="flex justify-center items-center">
                    <img tw="w-6" src="/note_logo.svg" alt="/note_logo.svg" />
                    <p tw="text-sm mb-0.5">noteで読む</p>
                  </div>
                </div>
              </a>
            )}
          </div>
          <Link to={`/news/${post.node.slug}` || '/'} itemProp="url">
            <div tw="my-2">
              <p tw="mb-0 text-gray-500">{post.node.updatedAt}</p>
            </div>
            <div tw="px-2">
              <h6 tw="m-0">
                <span
                  tw="group-hover:text-lightGreen transition duration-300 text-lg font-extrabold"
                  itemProp="headline"
                >
                  {post?.node.title}
                </span>
              </h6>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default NewsCard;
