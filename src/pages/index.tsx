/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Menu from '../components/blog/menu';
import Layout from '../components/blog/layout';
import Seo from '../components/blog/seo';

// const BlogIndex = ({ data, location }) => {
const BlogIndex: React.FC<PageProps<GatsbyTypes.TopIndexQuery>> = ({ data, location }) => {
  const blogTitle = data.site?.siteMetadata?.blog?.title || 'Title';
  const posts = data.allContentfulPost.edges;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={blogTitle} blogHeader headerBackGround>
        <Seo title="All posts" />
        {/* <Menu location={location} /> */}
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified
          for the "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={blogTitle} blogHeader headerBackGround>
      <Seo title="All posts" />
      {/* <Menu location={location} /> */}
      <div>
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
                      <Link to={post.node.slug || '/'} itemProp="url">
                        <div tw="overflow-hidden rounded-xl">
                          <img
                            tw="w-full h-48 sm:h-48 lg:h-60 object-cover transform group-hover:scale-110"
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
                            <p tw="text-gray-700 m-0 text-xs">Wiritten By {post.node.author}</p>
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
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query TopIndex {
    site {
      siteMetadata {
        title
        blog {
          title
        }
      }
    }
    allContentfulPost(
      filter: { node_locale: { eq: "ja-JP" } }
      sort: { order: DESC, fields: date }
    ) {
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
