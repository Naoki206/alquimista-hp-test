import * as React from 'react';
import { graphql, Link } from 'gatsby';
import 'twin.macro';

import Layout from '../components/layout';
import Seo from '../components/blog/seo';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle} blogOrNewsTopPage>
      <Seo title="404: Not Found" />
      <div tw="pb-80 h-auto w-4/5 sm:w-8/12 md:w-1/2 lg:w-2/5 xl:w-4/12  mr-auto ml-auto text-center">
        <p tw="text-4xl md:text-5xl font-bold mt-16" style={{ fontFamily: 'Avenir Next' }}>
          404 Not Found
        </p>
        <p tw="my-8 font-bold text-lg">お問い合わせフォーム</p>
        <p tw="text-sm md:text-base">
          申し訳ございません。ページが見つかりませんでした。
          <br />
          お探しのページはいずれかの理由により見つかりませんでした。
        </p>
        <div tw="text-center text-sm md:text-base">
          <ul tw="text-left mr-auto ml-auto">
            <li>ページのURLが変更された可能性があります。</li>
            <li>ページが削除された可能性があります。</li>
            <li>アドレス(URL)をタイプミスしている可能性があります。</li>
          </ul>
        </div>
        <div tw="ml-auto mr-auto" style={{ fontFamily: 'Avenir Next' }}>
          <Link to="/">
            <button
              type="button"
              tw="my-12 block bg-darkBlue text-paleOrange mx-auto font-bold text-sm px-10 py-2 text-center border-2 border-paleOrange rounded-full hover:border-lightGreen hover:bg-lightGreen transition duration-300 outline-none"
            >
              TOP&nbsp;&nbsp;&nbsp;&nbsp;→
            </button>
          </Link>
        </div>
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
