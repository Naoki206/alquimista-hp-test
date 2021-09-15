import * as React from 'react';
import { graphql } from 'gatsby';
import 'twin.macro';

import Layout from '../components/layout';
import Seo from '../components/blog/seo';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle} blogOrNewsTopPage>
      <Seo title="404: Not Found" />
      <div tw="h-screen flex pl-8 pt-3">
        <h1>指定されたページは存在しません</h1>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
