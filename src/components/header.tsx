/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
// eslint-disable-next-line import/no-unresolved
import { WindowLocation } from '@reach/router';
import 'twin.macro';

const Header: React.FC<
  { location?: WindowLocation<unknown> } & {
    blogOrNewsHeadingLetter?: number;
  } & {
    blogOrNewsContentsPage?: boolean;
  } & { blogOrNewsTopPage?: boolean } & { topPage?: boolean }
> = ({ location, blogOrNewsHeadingLetter, blogOrNewsContentsPage, blogOrNewsTopPage, topPage }) => {
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

  const [chancgeColorActive, setChancgeColorActive] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 780;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setChancgeColorActive(true);
    } else {
      setChancgeColorActive(false);
    }
  };

  const normal = {
    transition: '0.2s',
    fontFamily: 'Avenir Next',
  };
  const active = {
    transition: '0.2s',
    backgroundColor: 'rgba(242, 242, 242, var(--tw-text-opacity))',
    color: 'rgba(10, 41, 62, var(--tw-bg-opacity))',
    fontFamily: 'Avenir Next',
  };
  const normalPcText = {
    color: 'rgba(242, 242, 242, var(--tw-text-opacity))',
  };
  const activePcText = {
    color: 'rgba(10, 41, 62, var(--tw-bg-opacity))',
  };
  const normalContactUsBtn = {
    backgroundColor: 'rgba(242, 242, 242, var(--tw-text-opacity))',
    color: 'rgba(10, 41, 62, var(--tw-bg-opacity))',
  };
  const activeContactUsBtn = {
    backgroundColor: 'rgba(10, 41, 62, var(--tw-bg-opacity))',
    color: 'rgba(242, 242, 242, var(--tw-text-opacity))',
  };
  const normalSpText = {
    color: 'rgba(242, 242, 242, var(--tw-text-opacity))',
    borderColor: 'rgba(242, 242, 242, var(--tw-text-opacity))',
  };
  const activeSpText = {
    color: 'rgba(10, 41, 62, var(--tw-bg-opacity))',
    borderColor: 'rgba(10, 41, 62, var(--tw-bg-opacity))',
  };
  let bgColorChangebleStyle = chancgeColorActive ? active : normal;
  let pcTextColorChangebleStyle = chancgeColorActive ? activePcText : normalPcText;
  let spTextColorChangebleStyle = chancgeColorActive ? activeSpText : normalSpText;
  let contactUsBtnChangebleStyle = chancgeColorActive ? activeContactUsBtn : normalContactUsBtn;

  if (blogOrNewsTopPage) {
    bgColorChangebleStyle = normal;
    pcTextColorChangebleStyle = normalPcText;
    spTextColorChangebleStyle = normalSpText;
    contactUsBtnChangebleStyle = normalContactUsBtn;
  } else if (blogOrNewsContentsPage) {
    bgColorChangebleStyle = active;
    pcTextColorChangebleStyle = activePcText;
    spTextColorChangebleStyle = activeSpText;
    contactUsBtnChangebleStyle = activeContactUsBtn;
  }

  const menu = data.site?.siteMetadata?.menu;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header style={bgColorChangebleStyle} tw="bg-darkBlue sticky top-0 z-30 text-paleOrange">
        <ul tw="mx-4 sm:mx-8 md:mx-16 justify-end font-bold flex text-xs md:gap-4 md:text-sm lg:gap-12 lg:text-base xl:gap-16 2xl:gap-20 h-16 items-center list-none">
          <li tw="mr-auto">
            {blogOrNewsTopPage ? (
              <img
                tw="w-32 sm:w-36"
                src="/alquimista_logo_white.svg"
                alt="alquimista_logo_white"
                className="hogehoge"
              />
            ) : blogOrNewsContentsPage ? (
              <img
                tw="w-32 sm:w-36"
                src="/alquimista_logo_black.svg"
                alt="alquimista_logo_black"
                className="hogehoge"
              />
            ) : chancgeColorActive ? (
              <img
                tw="w-32 sm:w-36"
                src="/alquimista_logo_black.svg"
                alt="alquimista_logo_black"
                className="hogehoge"
              />
            ) : (
              <img
                tw="w-32 sm:w-36"
                src="/alquimista_logo_white.svg"
                alt="alquimista_logo_white"
                className="hogehoge"
              />
            )}
          </li>

          {/* sp hamburger menu icon */}
          <li tw="md:hidden transition duration-300">
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

          {/* pc menu */}
          {/* TODO:!toppageに変更 */}
          {blogOrNewsContentsPage && (
            <>
              <Link to="/#aboutus_section">
                <li tw="hidden md:block text-darkBlue">{menu?.aboutUs}</li>
              </Link>
              <Link to="/#vision_section">
                <li tw="hidden md:block text-darkBlue">{menu?.vision}</li>
              </Link>
              <Link to="/#service_section">
                <li tw="hidden md:block text-darkBlue">{menu?.service}</li>
              </Link>
              <Link to="/blog/all">
                <li tw="hidden md:block text-darkBlue">{menu?.blog}</li>
              </Link>
              <Link to="/#news_section">
                <li tw="hidden md:block text-darkBlue">{menu?.news}</li>
              </Link>
              <Link to="/#member_section">
                <li tw="hidden md:block text-darkBlue">{menu?.member}</li>
              </Link>
            </>
          )}
          {blogOrNewsTopPage && (
            <>
              <Link to="/#aboutus_section">
                <li tw="hidden md:block text-paleOrange">{menu?.aboutUs}</li>
              </Link>
              <Link to="/#vision_section">
                <li tw="hidden md:block text-paleOrange">{menu?.vision}</li>
              </Link>
              <Link to="/#service_section">
                <li tw="hidden md:block text-paleOrange">{menu?.service}</li>
              </Link>
              <Link to="/blog/all">
                <li tw="hidden md:block text-paleOrange">{menu?.blog}</li>
              </Link>
              <Link to="/#news_section">
                <li tw="hidden md:block text-paleOrange">{menu?.news}</li>
              </Link>
              <Link to="/#member_section">
                <li tw="hidden md:block text-paleOrange">{menu?.member}</li>
              </Link>
            </>
          )}
          {topPage && (
            <>
              <ScrollLink smooth to="aboutus_section" duration={1000} offset={-150}>
                <li tw="hidden md:block" style={pcTextColorChangebleStyle}>
                  {menu?.aboutUs}
                </li>
              </ScrollLink>
              <ScrollLink smooth to="vision_section" duration={1000} offset={-150}>
                <li tw="hidden md:block" style={pcTextColorChangebleStyle}>
                  {menu?.vision}
                </li>
              </ScrollLink>
              <ScrollLink smooth to="service_section" duration={1000} offset={-150}>
                <li tw="hidden md:block" style={pcTextColorChangebleStyle}>
                  {menu?.service}
                </li>
              </ScrollLink>
              <Link to="/blog/all">
                <li tw="hidden md:block" style={pcTextColorChangebleStyle}>
                  {menu?.blog}
                </li>
              </Link>
              <ScrollLink smooth to="news_section" duration={1000} offset={-150}>
                <li tw="hidden md:block" style={pcTextColorChangebleStyle}>
                  {menu?.news}
                </li>
              </ScrollLink>
              <ScrollLink smooth to="member_section" duration={1000} offset={-150}>
                <li tw="hidden md:block" style={pcTextColorChangebleStyle}>
                  {menu?.member}
                </li>
              </ScrollLink>
            </>
          )}
          <li tw="hidden md:block py-0.5 px-5 rounded-full" style={contactUsBtnChangebleStyle}>
            {menu?.contactUs}
          </li>
        </ul>

        {/* mobile menu */}
        {blogOrNewsTopPage
          ? open && (
              <ul tw="p-5 list-none">
                <Link to="/#aboutus_section">
                  <li tw="py-5 border-b text-paleOrange" onClick={() => setOpen(!open)}>
                    {menu?.aboutUs}
                  </li>
                </Link>
                <Link to="/#vision_section">
                  <li tw="py-5 border-b text-paleOrange" onClick={() => setOpen(!open)}>
                    {menu?.vision}
                  </li>
                </Link>
                <Link to="/#service_section">
                  <li tw="py-5 border-b text-paleOrange" onClick={() => setOpen(!open)}>
                    {menu?.service}
                  </li>
                </Link>
                <Link to="/blog/all">
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                  <li tw="py-5 border-b text-paleOrange" onClick={() => setOpen(!open)}>
                    {menu?.blog}
                  </li>
                </Link>
                <Link to="/#news_section">
                  <li tw="py-5 border-b text-paleOrange" onClick={() => setOpen(!open)}>
                    {menu?.news}
                  </li>
                </Link>
                <Link to="/#member_section">
                  <li tw="py-5 border-b text-paleOrange" onClick={() => setOpen(!open)}>
                    {menu?.member}
                  </li>
                </Link>
                <li tw="inline-block mt-6 mb-4 py-1 px-5 rounded-full bg-paleOrange text-darkBlue">
                  {menu?.contactUs}
                </li>
              </ul>
            )
          : open && (
              <ul tw="p-5 list-none">
                <ScrollLink smooth to="aboutus_section" duration={1000} offset={-630}>
                  <li
                    tw="py-5 border-b"
                    style={spTextColorChangebleStyle}
                    onClick={() => setOpen(!open)}
                  >
                    {menu?.aboutUs}
                  </li>
                </ScrollLink>
                <ScrollLink smooth to="vision_section" duration={1000} offset={-630}>
                  <li
                    tw="py-5 border-b"
                    style={spTextColorChangebleStyle}
                    onClick={() => setOpen(!open)}
                  >
                    {menu?.vision}
                  </li>
                </ScrollLink>
                <ScrollLink smooth to="service_section" duration={1000} offset={-630}>
                  <li
                    tw="py-5 border-b"
                    style={spTextColorChangebleStyle}
                    onClick={() => setOpen(!open)}
                  >
                    {menu?.service}
                  </li>
                </ScrollLink>
                <Link to="/blog/all">
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                  <li
                    tw="py-5 border-b"
                    style={spTextColorChangebleStyle}
                    onClick={() => setOpen(!open)}
                  >
                    {menu?.blog}
                  </li>
                </Link>
                <ScrollLink smooth to="news_section" duration={1000} offset={-630}>
                  <li
                    tw="py-5 border-b"
                    style={spTextColorChangebleStyle}
                    onClick={() => setOpen(!open)}
                  >
                    {menu?.news}
                  </li>
                </ScrollLink>
                <ScrollLink smooth to="member_section" duration={1000} offset={-630}>
                  <li
                    tw="py-5 border-b"
                    style={spTextColorChangebleStyle}
                    onClick={() => setOpen(!open)}
                  >
                    {menu?.member}
                  </li>
                </ScrollLink>
                <li
                  tw="inline-block mt-6 mb-4 py-1 px-5 rounded-full"
                  style={contactUsBtnChangebleStyle}
                >
                  {menu?.contactUs}
                </li>
              </ul>
            )}
      </header>
      {blogOrNewsHeadingLetter === 1 && (
        <h1 tw="text-center py-12 pb-1 mt-0">
          <Link to="/blog/all">Blog</Link>
        </h1>
      )}
      {blogOrNewsHeadingLetter === 2 && <h1 tw="text-center py-12 pb-10 mt-0">News</h1>}
    </>
  );
};

export default Header;
