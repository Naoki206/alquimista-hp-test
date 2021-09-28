const dotenv = require('dotenv');

dotenv.config(); // TODO::デプロイ時消す。

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: '株式会社Alquimista',
    description: "tech blog and company's news included hp ",
    siteUrl: 'https://peaceful-kare-d7c0d1.netlify.app/', // TODO:: デプロイ後、要変更
    author: 'Naoki Kamatsuka',
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
    member: {
      ceo: [
        {
          name: 'Ken',
          role: 'CEO',
          description:
            '京都工芸繊維大学大学院卒業。卒業後は栗田工業株式会社にて法人営業に5年従事する。その後2017年に株式会社Alquimistaを設立。Webアプリケーションの開発からセールスまで幅広いフィールドに精通。フランスが好きで年に2回は訪れる。',
          twitter: '@twitter',
        },
      ],
      marketing: [
        {
          name: 'PinPin',
          role: 'Marketing',
          description:
            '台湾長栄大学応用日本語学科卒業。得意分野はSNS・コンテンツマーケティング。いつも笑顔で周りを和ませる稀有な存在。台湾から日本へのワーキングホリデーをまとめた「日日夢路」の編集長。雪が大好き。',
          twitter: '@twitter',
        },
      ],
      engineer: [
        {
          name: 'Naoki',
          role: 'Engineer',
          description:
            '同志社大学神学部神学科在学中。在学中、留学先でのふとしたきっかけでプログラミングに興味を持ちはじめ、帰国後複数のインターンシップに参加。WEB開発、主にバックエンドの開発が得意。',
          twitter: '@twitter',
        },
        {
          name: 'Sakina',
          role: 'Technical director',
          description:
            '京都工芸繊維大学大学院卒業。卒業後は栗田工業株式会社にて法人営業に5年従事する。その後2017年に株式会社Alquimistaを設立。Webアプリケーションの開発からセールスまで幅広いフィールドに精通。フランスが好きで年に2回は訪れる。',
          twitter: '@twitter',
        },
      ],
      designer: [
        {
          name: 'Mario',
          role: 'Designer',
          description:
            '京都工芸繊維大学卒業後、GRAPH 北川一成に師事し、変なホテルのCI開発など、デザイン起点での企業ブランディングに携わる。2017年よりフリーとして活動開始。2018年には広告代理店のアートディレクターとしてデジタルとオフラインの領域をクロスさせた企業広告の統合コミュニケーションプラン立案に従事。',
          twitter: '@twitter',
        },
      ],
    },
    blog: {
      menu: {
        all: 'ALL',
        new: 'New',
        popular: 'Popular',
        writer: 'Writer',
        category: 'Category',
      },
    },
    social: {
      twitter: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'process.env.GOOGLE_ANALYTICS_ID',
        head: true,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://peaceful-kare-d7c0d1.netlify.app/', // TODO:デプロイ後要変更
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://peaceful-kare-d7c0d1.netlify.app/', // TODO:デプロイ後要変更
        sitemap: 'https://peaceful-kare-d7c0d1.netlify.app/.sitemap.xml', // TODO:デプロイ後要変更
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
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
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          'gatsby-remark-code-titles',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
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
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) =>
    //           allMarkdownRemark.nodes.map(node => ({
    //             ...node.frontmatter,
    //             description: node.excerpt,
    //             date: node.frontmatter.date,
    //             url: site.siteMetadata.siteUrl,
    //             guid: site.siteMetadata.siteUrl,
    //             custom_elements: [{ 'content:encoded': node.html }],
    //           })),
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //             ) {
    //               nodes {
    //                 excerpt
    //                 html
    //                 frontmatter {
    //                   title
    //                   date
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //       },
    //     ],
    //   },
    // },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Blog',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/alquimista-favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-typegen',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'jozpq3l4wnc8',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
