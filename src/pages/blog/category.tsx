/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Bio from '../../components/blog/bio';
import Layout from '../../components/blog/layout';
import Seo from '../../components/blog/seo';

// const BlogIndex = ({ data, location }) => {
const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogCategoryIndexQuery>> = ({ data, location }) => {
  const categories = data.allContentfulPost.distinct;
  const blogTitle = data.site?.siteMetadata?.blog?.title || 'Title';

  if (categories.length === 0) {
    return (
      <Layout location={location} title={blogTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the directory you specified
          for the "gatsby-source-filesystem" plugin in gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={blogTitle}>
      <Seo title="All posts" />
      <Bio location={location} />
      <div tw="pb-14">
        <div tw="flex flex-wrap gap-3 mx-5 my-3 md:mx-24 md:my-10 lg:gap-4 lg:mx-56 lg:my-14">
          {categories?.map(category => (
            <>
              <Link to={`/blog/category/${category}` || '/'}>
                <p
                  tw="py-3 mb-0 px-3 text-sm rounded-xl border-black border font-bold text-black hover:bg-darkBlue hover:text-paleOrange transition duration-200"
                  key={category}
                >
                  #{category}
                </p>
              </Link>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogCategoryIndex {
    site {
      siteMetadata {
        blog {
          title
        }
      }
    }
    allContentfulPost {
      distinct(field: category)
    }
  }
`;
