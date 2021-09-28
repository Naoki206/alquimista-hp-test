/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Props = {
  description?: string;
  lang?: string;
  meta?: HTMLMetaElement[];
  title: string;
  image?: string;
};

const SEO: React.FC<Props> = ({ description, lang, meta, title, image }) => {
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site!.siteMetadata!.description;
  const defaultTitle = site!.siteMetadata?.title;

  const siteUrl = site?.siteMetadata?.siteUrl;
  const defaultImage = `${siteUrl}/blog_alquimista_logo.jpg`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ''}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: defaultTitle,
        },
        {
          property: 'og:image',
          content: image || defaultImage,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta!)}
    />
  );
};

SEO.defaultProps = {
  lang: 'ja',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  // @ts-ignore 型付けが分からない..
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
