/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Bio from '../../components/blog/bio';
import Layout from '../../components/blog/layout';
import Seo from '../../components/blog/seo';

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogWriterIndexQuery>> = ({ data, location }) => {
  const writers = data.allContentfulPost.distinct;
  const blogTitle = data.site?.siteMetadata?.blog?.title || 'Title';
  // const members = data.site?.siteMetadata?.member;

  return (
    <Layout location={location} title={blogTitle}>
      <Seo title="All posts" />
      <Bio location={location} />
      <div>
        <ol tw="flex flex-wrap justify-center gap-10 m-10 list-none text-center">
          {writers?.map(writer => (
            <li tw="w-40" key={writer}>
              <Link to={`/blog/writer/${writer}` || '/'}>
                <img tw="rounded-full" src={`/${writer}.png`} alt={writer} />
                <p tw="text-black">{writer}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogWriterIndex {
    site {
      siteMetadata {
        blog {
          title
        }
      }
    }
    allContentfulPost {
      distinct(field: author)
    }
  }
`;
