import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { WindowLocation } from '@reach/router';
import 'twin.macro';
import Header from '../header';
import Footer from '../footer';

const Layout: React.FC<
  { location: WindowLocation<unknown> } & {
    blogOrNewsHeadingLetter?: number;
  } & {
    blogOrNewsContentsPage?: boolean;
  } & { blogOrNewsTopPage?: boolean } & { topPage?: boolean }
> = ({
  location,
  children,
  blogOrNewsHeadingLetter,
  blogOrNewsContentsPage,
  blogOrNewsTopPage,
  topPage,
}) => (
  <div tw="bg-paleOrange relative h-full">
    <Header
      location={location}
      blogOrNewsHeadingLetter={blogOrNewsHeadingLetter}
      blogOrNewsContentsPage={blogOrNewsContentsPage}
      blogOrNewsTopPage={blogOrNewsTopPage}
      topPage={topPage}
    />
    <main tw="font-sans">{children}</main>
    <Footer />
  </div>
);
export default Layout;
