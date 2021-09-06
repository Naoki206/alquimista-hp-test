/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import 'twin.macro';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/blog/layout';
import Card from '../components/blog/card';

const TopIndex: React.FC<PageProps<GatsbyTypes.TopIndexQuery>> = ({ data, location }) => {
  const members = data.site?.siteMetadata?.member;
  const posts = data.allContentfulPost.edges;

  return (
    <Layout location={location} blogHeader headerBackGround>
      <div>
        <div tw="justify-center text-darkBlue">
          {/* メインビジュアル */}
          <div>メインビジュアル</div>
          {/* About us */}
          <div>
            <h1>About Us</h1>
            <p>
              AlquimistaはShopifyを軸にしたDXエキスパートです。
              <br />
              レガシーなカートシステムからShopifyへの移行の積極的サポートに特化しています。
              <br />
              Shopifyを用いて最適なアーキテクチャを提案することでバックオフィス業務の最適化、データドリブンなシステム構成への変容
              開発スピードの向上を実現します。
            </p>
          </div>
          {/* Vision */}
          <div>
            <h1>Vision</h1>
            <h3>“お客様が本来集中すべき時間を取り戻す”</h3>
            <p>
              Alquimistaが目指すことは、新しいテクノロジーに寛容であり、マイクロサービスの考え方を軸に、変化に強いアーキテクチャを提案し、お客様と共に成長することです。
            </p>
          </div>
          {/* Service */}
          <div>
            <h1>Service</h1>
            <div tw="grid grid-cols-1 md:grid-cols-2 justify-items-center">
              <StaticImage src="../../static/service_logo_1.png" alt="/service_logo_1" />
              <div>
                <h2>
                  Shopifyを用いた新規ショップの立ち上げ。他社カートシステムからShopifyへの移行をサポート。
                </h2>
                <p>
                  お客様が、マーケティングやデータドリブンな意思決定、カスタマーサクセスなど、最も大切なことに集中できるよう、最適なアーキテクチャを提案し、開発・メンテナンスまで一気通貫でサポートします。
                </p>
                <button tw="border border-paleOrange rounded-xl" type="button">
                  Read more →
                </button>
              </div>
            </div>
            <div tw="grid grid-cols-1 md:grid-cols-2 justify-items-center">
              <div>
                <h2>GatbyjsやNext.jsなどのJSフレームワークを用いて、ヘッドレスコマースを実現。</h2>
                <p>
                  ヘッドレスコマースでは、ユーザーが触れるインターフェースをバックエンドのロジックと切り離しているため、開発体験が良く、サイトを柔軟に作り変えていくことが可能です。
                  <br />
                  また、高速でページ表示が可能なため、ページの表示遅延いよる売上の低下を防止できます。
                </p>
              </div>
              <StaticImage src="../../static/service_logo_2.png" alt="/service_logo_2" />
            </div>
            <div tw="grid grid-cols-1 md:grid-cols-2 justify-items-center">
              <StaticImage src="../../static/service_logo_3.png" alt="/service_logo_3" />
              <div>
                <h2>
                  既存のカートシステムからShopifyへの移行や、新規での立ち上げを設計の段階から、併走型でコンサルティング
                </h2>
                <p>
                  プロジェクトの成功の鍵は設計です。今までAlquimistaで蓄積してきた全てのナレッジを活かし、貴社にベストなアーキテクチャを提案します。もちろん、設計から構築、メンテナンスまで一気通貫でお任せいただけます。
                </p>
              </div>
            </div>
          </div>
          {/* Blog */}
          <div>
            <h1>Blog</h1>
            <ol tw="list-none mb-0 pb-80 md:pb-60 lg:pb-56 ">
              <div tw="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5  sm:gap-12">
                {posts.map(post => (
                  // @ts-ignore
                  <Card post={post} key={post?.node.slug} />
                ))}
              </div>
            </ol>
            <button tw="border border-darkBlue rounded-xl" type="button">
              Read more →
            </button>
          </div>
          {/* News */}
          <div>
            <h1>News</h1>
            <ol tw="list-none mb-0 pb-80 md:pb-60 lg:pb-56 ">
              <div tw="grid grid-cols-1">
                {/* @ts-ignore */}
                {posts.map(post => (
                  // @ts-ignore
                  <div key={post.node.slug} tw="border-b border-darkBlue">
                    <p>{post?.node.date}</p>
                    <p tw="font-bold">{post?.node.title}</p>
                  </div>
                ))}
              </div>
            </ol>
            <button tw="border border-darkBlue rounded-xl" type="button">
              Read more →
            </button>
          </div>
        </div>
        {/* Members */}
        <div>
          <h1>Members</h1>
          <ol tw="list-none mb-0 pb-80 md:pb-60 lg:pb-56 ">
            <div tw="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5  sm:gap-12">
              {/* @ts-ignore */}
              {members.map(member => (
                <div key={member.name}>
                  <img tw="w-9 rounded-full mr-4" src={`/${member.name}.png`} alt={member.name} />
                  <p>{member.role}</p>
                  <p tw="font-bold">{member.name}</p>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#">Follow me</a>
                </div>
              ))}
            </div>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default TopIndex;

export const pageQuery = graphql`
  query TopIndex {
    site {
      siteMetadata {
        member {
          description
          name
          role
        }
      }
    }
    allContentfulPost(limit: 3) {
      edges {
        node {
          title
          category
          author
          slug
          date(formatString: "YYYY.MM.DD")
          image {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;
