const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Blog',
    menu: {
      iconPath: '/alquimista.svg',
      aboutUs: 'About Us',
      vision: 'Vision',
      service: 'Service',
      blog: 'Blog',
      news: 'News',
      member: 'Member',
      contactUs: 'Contact Us',
    },
    footer: {
      companyOverview: '会社概要',
      privacyPolicy: 'プライバシーポリシー',
      contact: 'お問い合わせ',
      companyName: '株式会社アルケミスタ',
      address: '〒604-8152 京都市中京区烏丸蛸薬師南入る手洗水町647 トキワビル4F-C',
    },
    member: [
      {
        name: 'Ken',
        role: 'CEO',
        description:
          '京都工芸繊維大学大学院卒業。卒業後は栗田工業株式会社にて法人営業に5年従事する。その後2017年に株式会社Alquimistaを設立。Webアプリケーションの開発からセールスまで幅広いフィールドに精通。フランスが好きで年に2回は訪れる。',
        twitter: '@twitter',
      },
      {
        name: 'Naoki',
        role: 'Engineer',
        description:
          '京都工芸繊維大学大学院卒業。卒業後は栗田工業株式会社にて法人営業に5年従事する。その後2017年に株式会社Alquimistaを設立。Webアプリケーションの開発からセールスまで幅広いフィールドに精通。フランスが好きで年に2回は訪れる。',
      },
      {
        name: 'Sakina',
        role: 'Technical director',
        description:
          '京都工芸繊維大学大学院卒業。卒業後は栗田工業株式会社にて法人営業に5年従事する。その後2017年に株式会社Alquimistaを設立。Webアプリケーションの開発からセールスまで幅広いフィールドに精通。フランスが好きで年に2回は訪れる。',
        twitter: '@twitter',
      },
      {
        name: 'PinPin',
        role: 'CEO',
        description:
          '京都工芸繊維大学大学院卒業。卒業後は栗田工業株式会社にて法人営業に5年従事する。その後2017年に株式会社Alquimistaを設立。Webアプリケーションの開発からセールスまで幅広いフィールドに精通。フランスが好きで年に2回は訪れる。',
      },
      {
        name: 'Mario',
        role: 'Engineer',
        description:
          '京都工芸繊維大学大学院卒業。卒業後は栗田工業株式会社にて法人営業に5年従事する。その後2017年に株式会社Alquimistaを設立。Webアプリケーションの開発からセールスまで幅広いフィールドに精通。フランスが好きで年に2回は訪れる。',
      },
    ],
    blog: {
      title: 'Blog',
      menu: {
        all: 'ALL',
        new: 'New',
        popular: 'Popular',
        writer: 'Writer',
        category: 'Category',
      },
    },
    description: 'A starter blog demonstrating what Gatsby can do.',
    siteUrl: 'https://gatsbystarterblogsource.gatsbyjs.io/',
    social: {
      twitter: 'kylemathews',
    },
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-remark-autolink-headers',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map(node => ({
                ...node.frontmatter,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ 'content:encoded': node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Blog',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-typegen',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'jozpq3l4wnc8',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
