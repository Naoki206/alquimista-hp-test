import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { WindowLocation } from '@reach/router';
import 'twin.macro';
import Header from '../header';
import Footer from '../footer';

const Layout: React.FC<
  { title?: string } & { location: WindowLocation<unknown> } & { blogHeader: boolean } & {
    headerBackGround: boolean;
  }
> = ({ location, title, children, blogHeader, headerBackGround }) => (
  <>
    <div tw="bg-paleOrange relative">
      <Header
        title={title}
        location={location}
        blogHeader={blogHeader}
        headerBackGround={headerBackGround}
      />
      <p tw="mb-0">{blogHeader}</p>
      <main>{children}</main>
      <Footer />
    </div>
  </>
);
export default Layout;
