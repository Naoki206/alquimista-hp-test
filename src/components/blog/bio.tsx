/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
// eslint-disable-next-line import/no-unresolved
import { WindowLocation } from '@reach/router';
// import tw, { styled } from 'twin.macro';
import 'twin.macro';

const Bio: React.FC<{ location: WindowLocation<unknown> }> = location => {
  // eslint-disable-next-line no-restricted-globals
  const data = useStaticQuery<GatsbyTypes.BioQueryQuery>(
    graphql`
      query BioQuery {
        allContentfulPost {
          distinct(field: author)
        }
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50, quality: 95) {
              ...GatsbyImageSharpFixed
            }
          }
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
  const isWriterOpen = true;
  // const isCategoryOpen = false;
  const writers = data.allContentfulPost.distinct;
  // eslint-disable-next-line react/destructuring-assignment
  const pathName = location.location.pathname;

  return (
    <>
      <div tw="overflow-hidden">
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
          {isWriterOpen ? (
            <li tw=" transition duration-500 rounded-lg pl-3.5 pr-1 border border-darkBlue">
              {blogMenu?.writer}
              {writers.map(writer => (
                <div className="group" tw="flex items-center ml-1 mb-1" key={writer}>
                  <img tw="w-5 rounded-full mr-2" src={`/${writer}.png`} alt="{writer}" />
                  <p
                    tw="mb-0 text-sm group-hover:text-lightGreen transition duration-200"
                    key={writer}
                  >
                    {writer}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // className="h-5 w-5"
                    viewBox="0 0 20 20"
                    // fill="currentColor"
                    tw="w-6 ml-2 fill-current text-paleOrange group-hover:text-lightGreen transition duration-200"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ))}
            </li>
          ) : (
            <li tw="hover:bg-darkBlue transition duration-500 hover:text-paleOrange rounded-full px-3.5 border border-darkBlue">
              <div tw="flex items-center">
                {blogMenu?.writer}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  tw="w-5 pl-1 pt-0.5 fill-current text-green-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
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
        <div tw="overflow-hidden">
          <ul
            tw="flex justify-evenly sm:hidden visible font-bold mb-10"
            style={{ listStyle: 'none' }}
            id="menu"
          >
            <li>{blogMenu?.all}</li>
            <li>{blogMenu?.new}</li>
            <li>{blogMenu?.popular}</li>
            <li>{blogMenu?.writer}</li>
            <li>{blogMenu?.category}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Bio;
