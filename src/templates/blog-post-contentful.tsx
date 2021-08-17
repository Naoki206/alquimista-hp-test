/* eslint-disable react/display-name */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';

const options = {
  renderNode: {
    // eslint-disable-next-line react/display-name
    [BLOCKS.EMBEDDED_ASSET]: (node: {
      data: {
        target: {
          fixed: { src: string | undefined };
          sys: { title: string | undefined };
        };
      };
    }) => (
      <img src={node.data.target.fixed.src} alt={node.data.target.sys.title} />
    ),
  },
};

const BlogPostContentfulTemplate: React.FC<
  PageProps<GatsbyTypes.ContentfulBlogPostBySlugQuery>
> = ({ data, location }) => {
  const post = data.contentfulPost;
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
        {/* @ts-ignore */}
        <div>{post?.content?.raw && renderRichText(post.content, options)}</div>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
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
            title
          }
        }
      }
    }
  }
`;
