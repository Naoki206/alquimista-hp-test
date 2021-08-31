import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
// eslint-disable-next-line import/no-unresolved
// import { WindowLocation } from '@reach/router';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import 'twin.macro';

const Footer: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.FooterQueryQuery>(
    graphql`
      query FooterQuery {
        site {
          siteMetadata {
            footer {
              address
              companyName
              companyOverview
              contact
              privacyPolicy
            }
          }
        }
      }
    `
  );

  const footerData = data.site?.siteMetadata?.footer;

  return (
    <div tw="text-sm absolute bottom-0 bg-darkBlue w-full">
      <div tw="mx-5 md:mx-0 sm:flex justify-between items-center md:gap-5 md:ml-20 lg:ml-28 xl:ml-36 md:mr-24 lg:mr-36 xl:mr-64 my-10">
        <img
          tw="mx-auto sm:mx-0 w-32 mb-5 sm:mb-0 sm:w-48 lg:w-60 lg:h-24"
          src="/alquimista_logo-02.svg"
          alt="/alquimista_logo-02"
        />
        <div tw="text-center sm:text-left text-paleOrange h-full mb-0">
          <div tw="sm:flex mb-5">
            <p tw="pr-7 mb-0">{footerData?.companyOverview}</p>
            <p tw="pr-7 mb-0">{footerData?.privacyPolicy}</p>
            <p tw="pr-7 mb-0">{footerData?.contact}</p>
          </div>
          <p tw="mb-0">{footerData?.companyName}</p>
          <p tw="mb-0">{footerData?.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
