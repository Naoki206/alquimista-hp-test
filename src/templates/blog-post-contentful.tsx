import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';

const options = {
  renderNode: {
    // eslint-disable-next-line react/display-name
    [BLOCKS.EMBEDDED_ASSET]: node => {
      console.log(node);
      return (
        <img
          src={node.data.target.fixed.src}
          alt={node.data.target.sys.title}
        />
      );
    },
  },
};

const BlogPostContentfulTemplate: React.FC<
  PageProps<GatsbyTypes.ContentfulBlogPostBySlugQuery>
> = ({ data, location }) => {
  const post = data.contentfulPost;
  // const siteTitle = data.site?.siteMetadata?.title || 'Title';
  // const { previous, next } = data;

  return (
    <Layout location={location} title={post?.title || 'undefined'}>
      <Seo title={post?.title || 'undefined'} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post?.title}</h1>
          <p>{post?.date}</p>
        </header>
        {/* <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        /> */}
        {/* <div>{post?.content?.raw}</div> */}
        <div>{post?.content?.raw && renderRichText(post.content, options)}</div>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
};

export default BlogPostContentfulTemplate;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      author
      date
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
          }
        }
      }
    }
  }
`;
