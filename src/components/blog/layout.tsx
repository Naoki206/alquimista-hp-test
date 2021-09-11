import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { WindowLocation } from '@reach/router';
import 'twin.macro';
import Header from '../header';
import Footer from '../footer';

const Layout: React.FC<
  { title?: string } & { location: WindowLocation<unknown> } & { blogHeadingLetter?: boolean } & {
    blogContentsPage: boolean;
  } & { blogTopPage?: boolean }
> = ({ location, title, children, blogHeadingLetter, blogContentsPage, blogTopPage }) => (
  <div tw="bg-paleOrange relative h-full">
    <Header
      title={title}
      location={location}
      blogHeadingLetter={blogHeadingLetter}
      blogContentsPage={blogContentsPage}
      blogTopPage={blogTopPage}
    />
    <p tw="mb-0">{blogHeadingLetter}</p>
    <main>{children}</main>
    <Footer />
  </div>
);
export default Layout;
