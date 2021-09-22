import * as React from 'react';
import { graphql, Link } from 'gatsby';
import 'twin.macro';

import Layout from '../components/layout';
import Seo from '../components/blog/seo';

const PrivacyPolicyPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle} blogOrNewsTopPage>
      <Seo title="404: Not Found" />
      <div tw="pb-80 h-auto w-4/5 sm:w-8/12 md:w-9/12 mr-auto ml-auto text-center">
        <p tw="text-4xl md:text-5xl font-bold mt-16" style={{ fontFamily: 'Avenir Next' }}>
          Privacy Policy
        </p>
        <p tw="my-12 font-bold text-lg">プライバシーポリシー</p>
        <p tw="text-sm md:text-base font-semibold">
          株式会社アルケミスタは、以下の方針に基づき個人情報の保護に努めます。
        </p>
        <div tw="text-center text-sm md:text-base font-semibold">
          <div tw="mb-12">
            <p tw="mb-4 text-2xl">第1条</p>
            <p>
              当社は個人の人格尊重の理念のもとに関係法等を遵守し、
              実施するあらゆる事業において個人情報を新調に取り扱います。
            </p>
          </div>
          <div tw="mb-12">
            <p tw="mb-4 text-2xl">第2条</p>
            <p>当社は個人情報を適正な方法で取得します。</p>
          </div>
          <div tw="mb-12">
            <p tw="mb-4 text-2xl">第3条</p>
            <p>
              当社は個人情報の利用目的をできる限り特定するとともに、その利用目的の範囲でのみ個人情報を利用します。
            </p>
          </div>
          <div tw="mb-12">
            <p tw="mb-4 text-2xl">第4条</p>
            <p>
              当社はあらかじめ明示した範囲及び法令等の規定に基づく場合を除いて、個人情報を事前に本人の同意を得ることなく外部に提供しません。
            </p>
          </div>
          <div tw="mb-12">
            <p tw="mb-4 text-2xl">第5条</p>
            <p>
              当社は個人情報を正確な状態に保つとともに、漏えい、滅失、き損などを防止するため適切な措置を講じます。
            </p>
          </div>
          <div tw="mb-12">
            <p tw="mb-4 text-2xl">第6条</p>
            <p>
              当社は本人が自己の個人情報について、開示、訂正、追加、削除、利用停止を求める権利を有していることを確認し、これらの申出があった場合には速やかに対応します。
            </p>
          </div>
          <div tw="mb-12">
            <p tw="mb-4 text-2xl">第7条</p>
            <p>当社は個人情報の取り扱いに関する苦情があったときは、適切かる速やかに対応します。</p>
          </div>
          <div tw="mb-12">
            <p tw="mb-4 text-2xl">第8条</p>
            <p>
              当社は個人情報を保護するために適切な管理体制を講じるとともに、役職員の個人情報保護に関する意識啓発に努めます。
            </p>
          </div>
          <div>
            <p tw="mb-4 text-2xl">第9条</p>
            <p>
              当社はこの方針を実行するために個人情報保護規程を定め、これを当社職員に周知徹底し確実に実施します。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
