/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/display-name */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import 'twin.macro';

import Layout from '../components/layout';
import ThreeNewContents from '../components/blog/threeNewContents';
import SEO from '../components/blog/seo';

const BlogPostContentfulTemplate: React.FC<PageProps<GatsbyTypes.ContentfulBlogPostBySlugQuery>> =
  ({ data, location }) => {
    const post = data.contentfulPost;
    const mdPost = data?.contentfulPost?.content?.childMarkdownRemark?.html;
    let thumbnail = data?.contentfulPost?.image?.file?.url;
    if (!thumbnail) {
      thumbnail = '/blog_alquimista_logo.jpg';
    }

    return (
      <Layout location={location} blogOrNewsContentsPage>
        <SEO title={post?.title || 'undefined'} image={thumbnail} />
        <div tw=" mx-5 sm:mx-14 md:mx-28 lg:mx-52 xl:mx-96">
          <div tw="my-16">
            <img
              tw="w-full md:h-72 lg:h-96 object-cover"
              // @ts-ignore
              src={thumbnail}
              alt={thumbnail}
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
                {/* @ts-ignore */}
                {post?.createdAt < post?.updatedAt ? (
                  <div tw="my-2">
                    <p tw="line-through text-sm sm:text-base text-gray-500 mb-0">
                      {post?.createdAt}
                    </p>
                    <p tw="text-sm sm:text-base text-gray-500 mb-0">{post?.updatedAt}</p>
                  </div>
                ) : (
                  <div tw="my-2">
                    <p tw="text-sm sm:text-base text-gray-500 mb-0">{post?.createdAt}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="post-body">
            {/* @ts-ignore */}
            <div dangerouslySetInnerHTML={{ __html: mdPost }} />
          </div>

          <div tw="flex flex-wrap mb-1.5">
            {/* @ts-ignore */}
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
          <p tw="pt-7 border-t border-gray-400 text-center md:text-2xl font-bold">?????????????????????</p>
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
      createdAt(formatString: "YYYY/MM/DD HH:mm:ss")
      updatedAt(formatString: "YYYY/MM/DD HH:mm:ss")
      category
      zennUrl
      noteUrl
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData
        file {
          url
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
