import * as React from 'react';
import { graphql, Link } from 'gatsby';
import 'twin.macro';

import SEO from '../components/blog/seo';
import Footer from '../components/footer';

const ThankyouPage = () => (
  <div
    tw="relative h-full pb-350px md:pb-96 bg-mildDarkBlue text-paleOrange "
    style={{ fontFamily: 'Noto Sans JP' }}
  >
    <SEO title="404: Not Found" />
    <div tw=" w-4/5 sm:w-8/12 md:w-1/2 lg:w-2/5 xl:w-4/12  mr-auto ml-auto text-center">
      <img
        tw="w-32 sm:w-48 pt-12 mr-auto ml-auto"
        src="/alquimista_logo_white.svg"
        alt="alquimista_logo_white"
        className="hogehoge"
      />
      <p tw="text-4xl md:text-5xl font-bold py-16 mb-0" style={{ fontFamily: 'Avenir Next' }}>
        Thank You
      </p>
      <p tw="mb-8 font-bold text-lg">お問い合わせ完了</p>
      <p tw="text-sm md:text-base">
        お問い合わせいただき誠にありがとうございました。
        <br />
        順次、担当者よりご連絡させていただきます。
        <br />
        恐れ入りますが、しばらくお待ちください。
      </p>

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
    {/* <div tw="h-96"> </div> */}
    <Footer />
  </div>
);

export default ThankyouPage;
