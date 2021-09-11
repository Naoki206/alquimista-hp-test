/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/display-name */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'twin.macro';

import Layout from '../components/blog/layout';
import ThreeNewContents from '../components/blog/threeNewContents';

const options = {
  renderNode: {
    // eslint-disable-next-line react/display-name
    [BLOCKS.EMBEDDED_ASSET]: (node: {
      data: {
        target: {
          // fixed: { src: string | undefined };
          title: string;
        };
      };
    }) => (
      <GatsbyImage
        // @ts-ignore
        image={getImage(node.data.target)}
        alt={node.data.target.title}
      />
      // <img src={node.data.target.fixed.src} alt={node.data.target.sys.title} />
    ),
  },
};

const BlogPostContentfulTemplate: React.FC<PageProps<GatsbyTypes.ContentfulBlogPostBySlugQuery>> =
  ({ data, location }) => {
    const post = data.contentfulPost;
    return (
      <Layout location={location} title="Blog" blogContentsPage>
        {/* <Seo title={post?.title || 'undefined'} /> */}
        <div tw=" mx-5 sm:mx-14 md:mx-28 lg:mx-52 xl:mx-96">
          <div tw="my-16">
            <GatsbyImage
              tw="w-full md:h-72 lg:h-96"
              // @ts-ignore
              image={post?.image?.gatsbyImageData}
              alt="aiueo"
              placeholder="blurred"
            />
            <div tw="text-xl sm:text-3xl font-bold pt-8 pb-8">{post?.title}</div>
            <div tw="flex gap-3 items-center">
              <img
                tw="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
                src={`/${post?.author}.png`}
                alt="{post.node.author}"
              />
              <div>
                <p tw="text-sm sm:text-base text-gray-700 m-0">Written By {post?.author}</p>
                <p tw="text-sm sm:text-base text-gray-500 mb-0">{post?.date}</p>
              </div>
            </div>
          </div>

          {/* @ts-ignore */}
          <div>{post?.content?.raw && renderRichText(post.content, options)}</div>
          <div tw="flex flex-wrap mb-1.5">
            {post?.category?.map(category => (
              <p
                tw="mr-2 mb-0 px-2 text-sm rounded-full border-gray-400 border text-gray-500 font-bold"
                key={category}
              >
                {category}
              </p>
            ))}
          </div>
        </div>
        <div tw="mx-5 mt-3 sm:mt-16 sm:mx-10 md:mx-14 lg:mx-32">
          <p tw="pt-7 border-t border-gray-400 text-center md:text-2xl font-bold">おすすめの記事</p>
          <div tw="pb-80 md:pb-60 lg:pb-56 ">
            <ThreeNewContents />
          </div>
        </div>
      </Layout>
    );
  };

export default BlogPostContentfulTemplate;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      author
      date(formatString: "YYYY/MM/DD HH:mm:ss")
      category
      content {
        raw
        references {
          ... on ContentfulAsset {
            id
            contentful_id
            __typename
            title
            fixed(width: 1600) {
              width
              height
              src
            }
            title
            gatsbyImageData(formats: AUTO)
          }
        }
      }
      image {
        gatsbyImageData
      }
    }
  }
`;
