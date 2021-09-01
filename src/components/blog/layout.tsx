import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
// eslint-disable-next-line import/no-unresolved
import { WindowLocation } from '@reach/router';
import 'twin.macro';
import Header from '../header';

const Layout: React.FC<
  { title: string } & { location: WindowLocation<unknown> } & { blogHeader: boolean } & {
    headerBackground: boolean;
  }
> = ({ location, title, children, blogHeader, headerBackground }) => (
  // const blogHeader = (
  //   <h1 tw="text-center py-12 pb-1 mt-0">
  //     <Link to="/">{title}</Link>
  //   </h1>
  // );

  <>
    <div tw="bg-paleOrange">
      <Header
        title={title}
        location={location}
        blogHeader={blogHeader}
        headerBackGround={headerBackground}
      />
      <p tw="mb-0">{blogHeader}</p>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  </>
);
export default Layout;
