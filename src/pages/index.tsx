import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';

// const BlogIndex = ({ data, location }) => {
const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || 'Title';
  const posts = data.allContentfulPost.edges;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <ol style={{ listStyle: 'none' }}>
        {posts.map(post => {
          const title = post?.node.title || post.node.slug;

          return (
            <li key={post?.node.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <img alt={title} src={post.node.image?.file?.url} />
                  <small>{post.node.date}</small>
                  {post.node.category?.map(category => (
                    <p key={category}>{category}</p>
                  ))}
                  <small>{post.node.category}</small>
                  <h4>
                    <Link to={post.node.slug || '/'} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h4>
                  <small>Wiritten By {post.node.author}</small>
                </header>
                {/* <button tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  テスト
                </button> */}
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(filter: { node_locale: { eq: "ja-JP" } }) {
      edges {
        node {
          title
          category
          author
          slug
          date(formatString: "YYYY/MM/DD")
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
