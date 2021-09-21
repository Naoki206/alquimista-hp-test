import * as React from 'react';
import { graphql } from 'gatsby';
import 'twin.macro';

import Layout from '../components/layout';
import Seo from '../components/blog/seo';

const CompanyProfile = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle} blogOrNewsTopPage>
      <Seo title="Company Profile" />
      <div tw="pb-64 sm:h-screen xl:h-110vh">
        <p
          tw="text-3xl sm:text-5xl font-bold text-darkBlue text-center pt-12 pb-8 mb-0"
          style={{ fontFamily: 'Avenir Next' }}
        >
          Company
        </p>
        <p tw="text-center font-bold mb-6">会社概要</p>
        <div tw="text-sm sm:pb-0">
          <table tw="table-fixed w-4/5 sm:w-3/4 md:w-3/5 lg:w-1/2 mr-auto ml-auto">
            <tbody tw="font-bold">
              <tr tw="">
                <td tw="w-1/3 border-b border-t border-darkBlue px-4 py-5">会社名</td>
                <td tw="w-8/12 border-b border-t border-darkBlue px-4 py-5">
                  株式会社アルケミスタ
                </td>
              </tr>
              <tr>
                <td tw="border-b border-darkBlue px-4 py-5">代表者</td>
                <td tw="border-b border-darkBlue px-4 py-5">中原健一</td>
              </tr>
              <tr>
                <td tw="border-b border-darkBlue px-4 py-5">所在地</td>
                <td tw="border-b border-darkBlue px-4 py-5">
                  〒 604-8152 <br /> 京都市中京区烏丸蛸薬師南入る手洗水町647 <br /> トキワビル4F-C
                </td>
              </tr>
              <tr>
                <td tw="border-b border-darkBlue px-4 py-5">設立</td>
                <td tw="border-b border-darkBlue px-4 py-5">20XX年X月</td>
              </tr>
              <tr>
                <td tw="border-b border-darkBlue px-4 py-5">資本金</td>
                <td tw="border-b border-darkBlue px-4 py-5">XXXX円</td>
              </tr>
              <tr>
                <td tw="border-b border-darkBlue px-4 py-5">事業内容</td>
                <td tw="border-b border-darkBlue px-4 py-5">XXXXX, XXXXX</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyProfile;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
