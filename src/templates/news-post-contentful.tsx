/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/display-name */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import 'twin.macro';

import Layout from '../components/layout';

const BlogPostContentfulTemplate: React.FC<PageProps<GatsbyTypes.ContentfulNewsPostBySlugQuery>> =
  ({ data, location }) => {
    const post = data.contentfulNews;
    const mdPost = data?.contentfulNews?.content?.childMarkdownRemark?.html;

    return (
      <Layout location={location} blogOrNewsContentsPage>
        {/* <Seo title={post?.title || 'undefined'} /> */}
        <div tw="pb-96 sm:pb-64 mx-5 sm:mx-14 md:mx-28 lg:mx-52 xl:mx-96">
          <div tw="my-16">
            <GatsbyImage
              tw="w-full md:h-72 lg:h-96"
              // @ts-ignore
              image={post?.image?.gatsbyImageData}
              alt="aiueo"
            />
            <div tw="text-xl sm:text-3xl font-bold pt-8 pb-8">{post?.title}</div>
            <div tw="flex gap-3 items-center">
              <div>
                <p tw="text-sm sm:text-base text-gray-500 mb-0">{post?.createdAt}</p>
              </div>
            </div>
          </div>
          <div className="post-body">
            {/* @ts-ignore */}
            <div dangerouslySetInnerHTML={{ __html: mdPost }} />
          </div>
        </div>
      </Layout>
    );
  };

export default BlogPostContentfulTemplate;

export const pageQuery = graphql`
  query ContentfulNewsPostBySlug($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      title
      createdAt(formatString: "YYYY/MM/DD HH:mm:ss")
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData
      }
    }
  }
`;
