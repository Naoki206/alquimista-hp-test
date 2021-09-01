/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
// eslint-disable-next-line import/no-unresolved
import { WindowLocation } from '@reach/router';
import 'twin.macro';

const Header: React.FC<
  { title: string } & { location: WindowLocation<unknown> } & { blogHeader: boolean } & {
    headerBackGround: boolean;
  }
> = ({ location, title, blogHeader, headerBackGround }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  // const isRootPath = location.pathname === rootPath;

  const data = useStaticQuery<GatsbyTypes.HeaderQueryQuery>(
    graphql`
      query HeaderQuery {
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
      <header tw="bg-darkBlue sticky top-0 z-10 text-paleOrange">
        <ul tw="mx-4 sm:mx-8 md:mx-16 justify-end font-bold flex text-xs md:gap-4 md:text-sm lg:gap-12 lg:text-base xl:gap-16 2xl:gap-20 h-16 items-center list-none">
          <li tw="mr-auto">
            <img
              tw="w-32 sm:w-36"
              src="/alquimista_logo-02.svg"
              alt="alquimista_logo-02"
              className="hogehoge"
            />
          </li>
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
          <ul tw="p-5 list-none line-break[inherit]　inherits[]">
            <li tw="py-5 border-b text-paleOrange">{menu?.aboutUs}</li>
            <li tw="py-5 border-b text-paleOrange">{menu?.vision}</li>
            <li tw="py-5 border-b text-paleOrange">{menu?.service}</li>
            <Link to="/blog/all">
              {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
              <li tw="py-5 border-b text-paleOrange" onClick={() => setOpen(!open)}>
                {menu?.blog}
              </li>
            </Link>
            <li tw="py-5 border-b text-paleOrange">{menu?.news}</li>
            <li tw="py-5 border-b text-paleOrange">{menu?.member}</li>
            <li tw="inline-block mt-6 mb-4 py-1 px-5 rounded-full bg-red-400 text-darkBlue">
              {menu?.contactUs}
            </li>
          </ul>
        )}
      </header>
      {blogHeader && (
        <h1 tw="text-center py-12 pb-1 mt-0">
          <Link to="/blog/all">{title}</Link>
        </h1>
      )}
    </>
  );
};

export default Header;
