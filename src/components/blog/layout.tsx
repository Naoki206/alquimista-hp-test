import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
// eslint-disable-next-line import/no-unresolved
import { WindowLocation } from '@reach/router';
import 'twin.macro';

const Layout: React.FC<{ title: string } & { location: WindowLocation<unknown> }> = ({
  location,
  title,
  children,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  // let blogHeader;

  // if (isRootPath) {
  const blogHeader = (
    <h1 tw="text-center py-12 pb-1 mt-0">
      <Link to="/">{title}</Link>
    </h1>
  );
  // } else {
  //   blogHeader = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   );
  // }

  const data = useStaticQuery<GatsbyTypes.LayoutQueryQuery>(
    graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            menu {
              iconPath
              aboutUs
              vision
              service
              blog
              news
              member
              contactUs
            }
          }
        }
      }
    `
  );

  const menu = data.site?.siteMetadata?.menu;

  return (
    <>
      <div tw="bg-paleOrange" data-is-root-path={isRootPath}>
        <header tw="bg-darkBlue sm:h-16  sticky top-0 z-10">
          <ul tw="mx-16 justify-end font-bold flex  text-xs sm:gap-2 md:gap-4 md:text-sm lg:gap-12 lg:text-base xl:gap-16 2xl:gap-20 h-full items-center list-none text-paleOrange">
            <li tw="mr-auto">
              <img
                tw="w-36"
                src="/alquimista_logo-02.svg"
                alt="alquimista_logo-02"
                className="hogehoge"
              />
            </li>
            {/* <Link to="/" tw="text-paleOrange hidden sm:visible">
              <li>{menu?.aboutUs}</li>
            </Link> */}
            <li tw="hidden sm:visible sm:flex">{menu?.aboutUs}</li>
            <li tw="hidden sm:visible sm:flex">{menu?.vision}</li>
            <li tw="hidden sm:visible sm:flex">{menu?.service}</li>
            <li tw="hidden sm:visible sm:flex">{menu?.blog}</li>
            <li tw="hidden sm:visible sm:flex">{menu?.news}</li>
            <li tw="hidden sm:visible sm:flex">{menu?.member}</li>
            <li tw="hidden sm:visible sm:flex">{menu?.contactUs}</li>
          </ul>
        </header>
        <p tw="mb-0">{blogHeader}</p>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
