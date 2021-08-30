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
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div tw="bg-paleOrange" data-is-root-path={isRootPath}>
        <header tw="bg-darkBlue  sticky top-0 z-10">
          <ul tw="mx-4 sm:mx-8 md:mx-16 justify-end font-bold flex text-xs md:gap-4 md:text-sm lg:gap-12 lg:text-base xl:gap-16 2xl:gap-20 h-16 items-center list-none text-paleOrange">
            <li tw="mr-auto">
              <img
                tw="w-32 sm:w-36"
                src="/alquimista_logo-02.svg"
                alt="alquimista_logo-02"
                className="hogehoge"
              />
            </li>
            {/* <Link to="/" tw="text-paleOrange hidden sm:visible">
              <li>{menu?.aboutUs}</li>
            </Link> */}
            <li tw="md:hidden　transition duration-300">
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  tw="w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => setOpen(!open)}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  tw="w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => setOpen(!open)}
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </li>

            <li tw="hidden md:block">{menu?.aboutUs}</li>
            <li tw="hidden md:block">{menu?.vision}</li>
            <li tw="hidden md:block">{menu?.service}</li>
            <li tw="hidden md:block">{menu?.blog}</li>
            <li tw="hidden md:block">{menu?.news}</li>
            <li tw="hidden md:block">{menu?.member}</li>
            <li tw="hidden md:block">{menu?.contactUs}</li>
          </ul>

          {open && (
            <ul tw="text-paleOrange p-5 list-none">
              <li tw="py-5 border-b">{menu?.aboutUs}</li>
              <li tw="py-5 border-b">{menu?.vision}</li>
              <li tw="py-5 border-b">{menu?.service}</li>
              <li tw="py-5 border-b">{menu?.blog}</li>
              <li tw="py-5 border-b">{menu?.news}</li>
              <li tw="py-5 border-b">{menu?.member}</li>
              <li tw="inline-block mt-6 mb-4 py-1 px-5 rounded-full bg-red-400 text-darkBlue">
                {menu?.contactUs}
              </li>
            </ul>
          )}
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
