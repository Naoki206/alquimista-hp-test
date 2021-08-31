/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/display-name */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import 'twin.macro';

import Bio from '../components/blog/bio';
import Layout from '../components/blog/layout';
import Seo from '../components/blog/seo';

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
    const posts = data.allContentfulPost.edges;
    return (
      <Layout location={location} title={post?.title || 'undefined'}>
        <Seo title={post?.title || 'undefined'} />
        <div tw="lg:mx-44">
          <div tw=" xl:mx-40 ">
            <GatsbyImage
              tw="w-full h-96 rounded-xl"
              image={post?.image?.gatsbyImageData}
              alt="aiueo"
              placeholder="blurred"
            />
          </div>

          <div tw="flex gap-3">
            <img tw="w-9 rounded-full mr-4" src={`/${post?.author}.png`} alt="{post.node.author}" />
            <div>
              <p tw="text-gray-700 m-0 text-xs">Written By {post?.author}</p>
              <p>{post?.date}</p>
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
        <div>
          <p>おすすめの記事</p>
          <ol style={{ listStyle: 'none' }}>
            {/* cards from here */}
            <div tw="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mx-10 mt-3 sm:gap-12 sm:mt-16  sm:mx-36 md:mx-28 lg:mx-32">
              {posts.map(post => {
                const title = post?.node.title || post.node.slug;
                return (
                  // card from here
                  <li key={post?.node.slug} tw="w-full">
                    <div className="group" tw="border-black mb-16 h-80 sm:h-72 md:h-80 lg:h-96">
                      <div tw="group-hover:opacity-80 transition duration-300">
                        <Link to={`/blog/${post.node.slug}` || '/'} itemProp="url">
                          <div tw="overflow-hidden rounded-xl">
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
        </div>

        {/* <footer>
          <Bio location={location} />
        </footer> */}
      </Layout>
    );
  };

export default BlogPostContentfulTemplate;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      author
      date(formatString: "YYYY.MM.DD")
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
    allContentfulPost(limit: 3) {
      edges {
        node {
          title
          category
          author
          slug
          date(formatString: "YYYY.MM.DD")
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
`;
