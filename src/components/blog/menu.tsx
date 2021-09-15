/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

const Menu: React.FC<
  { location: WindowLocation<unknown> } & { isSelected: number } & {
    setIsSelected: React.Dispatch<React.SetStateAction<number>>;
  }
> = ({ location, isSelected, setIsSelected }) => {
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
  // eslint-disable-next-line no-restricted-globals
  const data = useStaticQuery<GatsbyTypes.MenuQueryQuery>(
    graphql`
      query MenuQuery {
        allContentfulPost {
          distinct(field: category)
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
  const categories = data.allContentfulPost.distinct;
  // eslint-disable-next-line react/destructuring-assignment

  return (
    <>
      <div tw="overflow-hidden mb-3 sm:mb-16">
        <ul
          tw="hidden sm:visible sm:flex justify-center items-start gap-8 mx-52 text-base font-bold"
          style={{ listStyle: 'none' }}
          id="menu"
        >
          {isSelected === 1 ? (
            <li tw="bg-darkBlue transition duration-500 text-paleOrange rounded-full px-3.5 border border-darkBlue">
              {blogMenu?.all}
            </li>
          ) : (
            <Link to="/blog/all">
              <li
                tw="hover:bg-darkBlue transition duration-500 text-black hover:text-paleOrange rounded-full px-3.5 border border-darkBlue"
                onClick={() => setIsSelected(1)}
              >
                {blogMenu?.all}
              </li>
            </Link>
          )}
          {isSelected === 2 ? (
            <li tw="bg-darkBlue transition duration-500 text-paleOrange rounded-full px-3.5 border border-darkBlue">
              {blogMenu?.new}
            </li>
          ) : (
            <Link to="/blog/new">
              <li
                tw="hover:bg-darkBlue transition duration-500 text-black hover:text-paleOrange rounded-full px-3.5 border border-darkBlue"
                onClick={() => setIsSelected(2)}
              >
                {blogMenu?.new}
              </li>
            </Link>
          )}
          {isSelected === 3 ? (
            <li tw="bg-darkBlue transition duration-500 text-paleOrange rounded-full px-3.5 border border-darkBlue">
              {blogMenu?.popular}
            </li>
          ) : (
            <Link to="/blog/popular">
              <li
                tw="hover:bg-darkBlue transition duration-500 text-black hover:text-paleOrange rounded-full px-3.5 border border-darkBlue"
                onClick={() => setIsSelected(3)}
              >
                {blogMenu?.popular}
              </li>
            </Link>
          )}
          {isSelected === 4 ? (
            <li tw="bg-darkBlue transition duration-500 text-paleOrange rounded-full px-3.5 border border-darkBlue">
              {blogMenu?.writer}
            </li>
          ) : (
            <Link to="/blog/writer">
              <li
                tw="hover:bg-darkBlue transition duration-500 text-black hover:text-paleOrange rounded-full px-3.5 border border-darkBlue"
                onClick={() => setIsSelected(4)}
              >
                {blogMenu?.writer}
              </li>
            </Link>
          )}
          {isCategoryOpen ? (
            <li
              tw="bg-darkBlue transition duration-500 text-paleOrange rounded-full px-3.5 border border-darkBlue"
              onClick={() => setIsCategoryOpen(true)}
            >
              {blogMenu?.category}
            </li>
          ) : (
            <li
              tw="hover:bg-darkBlue transition duration-500 text-black hover:text-paleOrange rounded-full px-3.5 border border-darkBlue"
              onClick={() => {
                setIsCategoryOpen(true);
                setIsSelected(0);
              }}
            >
              {blogMenu?.category}
            </li>
          )}
        </ul>
        {/* mobile layout */}
        <div tw="overflow-hidden">
          <ul
            tw="flex justify-evenly sm:hidden visible font-bold mb-10 list-none"
            // style={{ listStyle: 'none' }}
            id="menu"
          >
            {isSelected === 1 ? (
              <li tw="border-b-2　border-darkBlue">{blogMenu?.all}</li>
            ) : (
              <Link to="/blog/all">
                <li tw="text-black">{blogMenu?.all}</li>
              </Link>
            )}
            {isSelected === 2 ? (
              <li tw="border-b-2　border-darkBlue">{blogMenu?.new}</li>
            ) : (
              <Link to="/blog/new">
                <li tw="text-black">{blogMenu?.new}</li>
              </Link>
            )}
            {isSelected === 3 ? (
              <li tw="border-b-2　border-darkBlue">{blogMenu?.popular}</li>
            ) : (
              <Link to="/blog/popular">
                <li tw="text-black">{blogMenu?.popular}</li>
              </Link>
            )}
            {isSelected === 4 ? (
              <li tw="border-b-2　border-darkBlue">{blogMenu?.writer}</li>
            ) : (
              <Link to="/blog/writer">
                <li tw="text-black">{blogMenu?.writer}</li>
              </Link>
            )}
            {isSelected === 5 ? (
              <li tw="border-b-2　border-darkBlue">{blogMenu?.category}</li>
            ) : (
              <li tw="text-black" onClick={() => setIsCategoryOpen(true)}>
                {blogMenu?.category}
              </li>
            )}
          </ul>
        </div>
      </div>

      {isCategoryOpen && (
        <div tw="fixed top-0 left-0 z-40 w-screen h-screen mt-0  bg-white bg-opacity-80">
          <div tw="pt-24 list-inside pb-14 h-screen absolute opacity-100 overflow-scroll mx-5 my-3 md:mx-24 md:my-10 lg:gap-4 lg:mx-56 lg:my-14">
            <div tw="flex justify-between items-center pb-9">
              <p tw="block font-extrabold text-3xl mb-0">#Category</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tw="w-12"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => setIsCategoryOpen(false)}
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div tw="flex flex-wrap gap-3 ">
              {categories?.map(category => (
                <>
                  <Link to={`/blog/category/${category}` || '/'}>
                    <p
                      tw="bg-paleOrange py-3 mb-0 px-3 text-sm rounded-xl hover:bg-darkBlue hover:bg-opacity-75 hover:text-paleOrange font-bold text-darkBlue transition duration-200"
                      key={category}
                    >
                      #{category}
                    </p>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
