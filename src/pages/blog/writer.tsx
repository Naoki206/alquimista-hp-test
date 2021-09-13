/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Menu from '../../components/blog/menu';
import Layout from '../../components/blog/layout';
import Seo from '../../components/blog/seo';
import MemberGrid from '../../components/common/memberGrid';

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogWriterIndexQuery>> = ({ data, location }) => {
  const writers = data.site?.siteMetadata?.member?.engineer;
  const blogTitle = data.site?.siteMetadata?.blog?.title;

  return (
    <Layout location={location} title={blogTitle} blogHeadingLetter blogTopPage>
      <Seo title="All posts" />
      <Menu location={location} />
      <div tw="text-center pb-1120px sm:pb-1 h-screen mx-8 sm:mx-40 xl:mx-56">
        <MemberGrid members={writers} isBlogWriters />
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogWriterIndex {
    site {
      siteMetadata {
        member {
          engineer {
            description
            name
            role
            twitter
          }
        }
        blog {
          title
        }
      }
    }
  }
`;
