import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { WindowLocation } from '@reach/router';
import 'twin.macro';
import Header from '../header';
import Footer from '../footer';

const Layout: React.FC<
  { title?: string } & { location: WindowLocation<unknown> } & { blogHeadingLetter?: boolean } & {
    headerBackGround: boolean;
  } & { blogTopPage?: boolean }
> = ({ location, title, children, blogHeadingLetter, headerBackGround, blogTopPage }) => (
  <div tw="bg-paleOrange relative h-full">
    <Header
      title={title}
      location={location}
      blogHeadingLetter={blogHeadingLetter}
      headerBackGround={headerBackGround}
      blogTopPage={blogTopPage}
    />
    <p tw="mb-0">{blogHeadingLetter}</p>
    <main>{children}</main>
    <Footer />
  </div>
);
export default Layout;
