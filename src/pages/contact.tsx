/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { graphql } from 'gatsby';
import 'twin.macro';

import Layout from '../components/layout';
import Seo from '../components/blog/seo';

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle} blogOrNewsTopPage>
      <Seo title="Company Profile" />
      <div tw="pb-80 h-auto w-4/5 sm:w-3/4 md:w-3/5 lg:w-1/2 mr-auto ml-auto">
        <p
          tw="text-3xl sm:text-5xl font-bold text-darkBlue text-center pt-12 pb-8 mb-0"
          style={{ fontFamily: 'Avenir Next' }}
        >
          Contact Us
        </p>
        <p tw="text-center text-sm font-bold mb-6">お問い合わせフォーム</p>
        <p tw="text-center text-xs sm:text-sm mb-8">
          下記フォームにお問い合わせ内容をご記入後、送信ボタンを押してください。
        </p>
        <form
          name="contact"
          action="/thankyou"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          tw="text-sm sm:pb-0"
        >
          <table>
            <tbody tw="font-bold">
              <tr>
                <td tw="w-1/3 border-b border-t border-darkBlue px-4 py-5">
                  <label htmlFor="company_name">会社名</label>
                </td>
                <td tw="w-8/12 border-b border-t border-darkBlue px-4 py-5">
                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    tw="placeholder-gray-500 placeholder-opacity-60 h-10 border border-darkBlue rounded-xl w-full outline-none px-2"
                    placeholder="例）株式会社令和"
                  />
                </td>
              </tr>
              <tr>
                <td tw="border-b border-darkBlue px-4 py-5">
                  <label htmlFor="name">氏名</label>
                  <span tw="text-red-600">*</span>
                </td>
                <td tw="border-b border-darkBlue px-4 py-5">
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    tw="placeholder-gray-500 placeholder-opacity-60 h-10 border border-darkBlue rounded-xl w-full outline-none px-2"
                    placeholder="例）山田太郎"
                  />
                </td>
              </tr>
              <tr>
                <td tw="border-b border-darkBlue px-4 py-5">
                  <label htmlFor="tel">電話番号</label>
                  <span tw="text-red-600">*</span>
                </td>
                <td tw="border-b border-darkBlue px-4 py-5">
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    tw="placeholder-gray-500 placeholder-opacity-60 h-10 border border-darkBlue rounded-xl w-full outline-none px-2"
                    placeholder="例）00000000000"
                  />
                </td>
              </tr>
              <tr>
                <td tw="border-b border-darkBlue px-4 py-5">
                  <label htmlFor="mail">メールアドレス</label>
                  <span tw="text-red-600">*</span>
                </td>
                <td tw="border-b border-darkBlue px-4 py-5">
                  <input
                    required
                    id="mail"
                    name="mail"
                    type="email"
                    tw="placeholder-gray-500 placeholder-opacity-60 h-10 border border-darkBlue rounded-xl w-full outline-none px-2"
                    placeholder="例）email@email.com"
                  />
                </td>
              </tr>
              <tr>
                <td tw="border-b border-darkBlue px-4 py-5">
                  <label htmlFor="content">お問い合わせ内容</label>
                  <span tw="text-red-600">*</span>
                  <label tw="hidden" htmlFor="category">
                    お問い合わせ内容
                  </label>
                </td>
                <td tw="border-b border-darkBlue px-4 py-5">
                  <select
                    name="category"
                    tw="outline-none border border-darkBlue rounded-lg mb-3 px-2 w-full"
                  >
                    <option value="">お問い合わせ内容をご選択ください</option>
                    <option value="Shopifyストア構築">Shopifyストア構築</option>
                    <option value="JAMSTACKなwebサイト制作">JAMSTACKなwebサイト制作</option>
                    <option value="BABO">BABO</option>
                    <option value="その他">その他</option>
                  </select>

                  <textarea
                    required
                    id="content"
                    name="content"
                    tw="py-3 mb-auto placeholder-gray-500 placeholder-opacity-60 border border-darkBlue rounded-xl w-full h-24 outline-none px-2"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="hidden" name="form-name" value="contact" />
          <div tw="ml-auto mr-auto">
            <input
              tw="block bg-darkBlue text-paleOrange mx-auto mt-auto font-bold text-sm px-6 py-2 text-center border-2 border-paleOrange rounded-full hover:border-lightGreen hover:bg-lightGreen transition duration-300 outline-none"
              type="submit"
              value="送信する →"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
