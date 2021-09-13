/**
 * Menu component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
// eslint-disable-next-line import/no-unresolved
import { WindowLocation } from '@reach/router';
import 'twin.macro';

const Menu: React.FC<{ location: WindowLocation<unknown> }> = location => {
  // eslint-disable-next-line no-restricted-globals
  const data = useStaticQuery<GatsbyTypes.MenuQueryQuery>(
    graphql`
      query MenuQuery {
        allContentfulPost {
          distinct(field: author)
        }
        site {
          siteMetadata {
            author {
              name
              summary
            }
            social {
              twitter
            }
            blog {
              menu {
                all
                new
                popular
                writer
                category
              }
            }
          }
        }
      }
    `
  );

  const blogMenu = data.site?.siteMetadata?.blog?.menu;
  const writers = data.allContentfulPost.distinct;
  // eslint-disable-next-line react/destructuring-assignment
  const pathName = location.location.pathname;

  return (
    <>
      <div tw="overflow-hidden mb-3 sm:mb-16">
        <ul
          tw="hidden sm:visible sm:flex justify-center items-start gap-8 mx-52 text-base font-bold"
          style={{ listStyle: 'none' }}
          id="menu"
        >
          {pathName === '/blog/all' ? (
            <li tw="bg-darkBlue transition duration-500 text-paleOrange rounded-full px-3.5 border border-darkBlue">
              {blogMenu?.all}
            </li>
          ) : (
            <Link to="/blog/all">
              <li tw="hover:bg-darkBlue transition duration-500 text-black hover:text-paleOrange rounded-full px-3.5 border border-darkBlue">
                {blogMenu?.all}
              </li>
            </Link>
          )}
          {pathName === '/blog/new' ? (
            <li tw="bg-darkBlue transition duration-500 text-paleOrange rounded-full px-3.5 border border-darkBlue">
              {blogMenu?.new}
            </li>
          ) : (
            <Link to="/blog/new">
              <li tw="hover:bg-darkBlue transition duration-500 text-black hover:text-paleOrange rounded-full px-3.5 border border-darkBlue">
                {blogMenu?.new}
              </li>
            </Link>
          )}
          {pathName === '/blog/popular' ? (
            <li tw="bg-darkBlue transition duration-500 text-paleOrange rounded-full px-3.5 border border-darkBlue">
              {blogMenu?.popular}
            </li>
          ) : (
            <Link to="/blog/popular">
              <li tw="hover:bg-darkBlue transition duration-500 text-black hover:text-paleOrange rounded-full px-3.5 border border-darkBlue">
                {blogMenu?.popular}
              </li>
            </Link>
          )}
          {pathName === '/blog/writer' ? (
            <li tw="bg-darkBlue transition duration-500 text-paleOrange rounded-full px-3.5 border border-darkBlue">
              {blogMenu?.writer}
            </li>
          ) : (
            <Link to="/blog/writer">
              <li tw="hover:bg-darkBlue transition duration-500 text-black hover:text-paleOrange rounded-full px-3.5 border border-darkBlue">
                {blogMenu?.writer}
              </li>
            </Link>
          )}
          {pathName === '/blog/category' ? (
            <li tw="bg-darkBlue transition duration-500 text-paleOrange rounded-full px-3.5 border border-darkBlue">
              {blogMenu?.category}
            </li>
          ) : (
            <Link to="/blog/category">
              <li tw="hover:bg-darkBlue transition duration-500 text-black hover:text-paleOrange rounded-full px-3.5 border border-darkBlue">
                {blogMenu?.category}
              </li>
            </Link>
          )}
        </ul>
        {/* mobile layout */}
        <div tw="overflow-hidden">
          <ul
            tw="flex justify-evenly sm:hidden visible font-bold mb-10 list-none"
            // style={{ listStyle: 'none' }}
            id="menu"
          >
            {pathName === '/blog/all' ? (
              <li tw="border-b-2　border-darkBlue">{blogMenu?.all}</li>
            ) : (
              <Link to="/blog/all">
                <li tw="text-black">{blogMenu?.all}</li>
              </Link>
            )}
            {pathName === '/blog/new' ? (
              <li tw="border-b-2　border-darkBlue">{blogMenu?.new}</li>
            ) : (
              <Link to="/blog/new">
                <li tw="text-black">{blogMenu?.new}</li>
              </Link>
            )}
            {pathName === '/blog/popular' ? (
              <li tw="border-b-2　border-darkBlue">{blogMenu?.popular}</li>
            ) : (
              <Link to="/blog/popular">
                <li tw="text-black">{blogMenu?.popular}</li>
              </Link>
            )}
            {pathName === '/blog/writer' ? (
              <li tw="border-b-2　border-darkBlue">{blogMenu?.writer}</li>
            ) : (
              <Link to="/blog/writer">
                <li tw="text-black">{blogMenu?.writer}</li>
              </Link>
            )}
            {pathName === '/blog/category' ? (
              <li tw="border-b-2　border-darkBlue">{blogMenu?.category}</li>
            ) : (
              <Link to="/blog/category">
                <li tw="text-black">{blogMenu?.category}</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
