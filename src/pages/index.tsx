/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { animateScroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import 'twin.macro';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/blog/layout';
import Card from '../components/blog/card';
import ThreePopularContents from '../components/blog/threePopularContents';
import ThreeNewContents from '../components/blog/threeNewContents';

const TopIndex: React.FC<PageProps<GatsbyTypes.TopIndexQuery>> = ({ data, location }) => {
  const members = data.site?.siteMetadata?.member;
  const posts = data.allContentfulPost.edges;
  const [open, setOpen] = React.useState(-1);
  const [toggle, setToggle] = React.useState(true);

  return (
    <Layout location={location} headerBackGround>
      {/* メインビジュアル */}

      <div tw="pb-72 text-center text-darkBlue mx-10 sm:mx-40 xl:mx-56">
        {/* About us */}
        <div tw="mb-28" id="aboutus_section">
          <h1 tw="pb-7">About Us</h1>
          <p tw="font-bold leading-10">
            AlquimistaはShopifyを軸にしたDXエキスパートです。
            <br />
            レガシーなカートシステムからShopifyへの移行の積極的サポートに特化しています。
            <br />
            Shopifyを用いて最適なアーキテクチャを提案することでバックオフィス業務の最適化、データドリブンなシステム構成への変容
            開発スピードの向上を実現します。
          </p>
        </div>
        {/* Vision */}
        <div tw="mb-28" id="vision_section">
          <h1 tw="pb-5">Vision</h1>
          <h3 tw="pb-6">“お客様が本来集中すべき時間を取り戻す”</h3>
          <p tw="font-bold leading-10">
            Alquimistaが目指すことは、新しいテクノロジーに寛容であり、マイクロサービスの考え方を軸に、変化に強いアーキテクチャを提案し、お客様と共に成長することです。
          </p>
        </div>

        {/* Service */}
        <div tw="mb-28" id="service_section">
          <h1 tw="pb-14">Service</h1>

          <div tw="pb-24 grid grid-cols-1 md:grid-cols-2 text-justify">
            <StaticImage
              tw="max-h-500px max-w-3xl"
              src="../../static/service_logo_1.png"
              alt="/service_logo_1"
            />
            <div tw="max-h-500px max-w-3xl bg-darkBlue text-paleOrange px-6 py-6 lg:px-16 lg:py-16">
              <p tw="md:text-base lg:text-2xl font-bold text-paleOrange">
                Shopifyを用いた新規ショップの立ち上げ。他社カートシステムからShopifyへの移行をサポート。
              </p>
              <p tw="md:text-sm lg:text-base">
                お客様が、マーケティングやデータドリブンな意思決定、カスタマーサクセスなど、最も大切なことに集中できるよう、最適なアーキテクチャを提案し、開発・メンテナンスまで一気通貫でサポートします。
              </p>
              <div tw="text-center">
                <Link to="/blog/all">
                  <button
                    style={{ outline: 'none' }}
                    tw="mx-auto font-bold text-sm px-6 py-2 text-center border-2 border-paleOrange rounded-full text-paleOrange hover:border-lightGreen hover:bg-lightGreen transition duration-300 outline-none"
                    type="button"
                  >
                    Read more →
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div tw="pb-24 grid grid-cols-1 md:grid-cols-2 text-justify">
            <div tw="md:hidden max-h-500px max-w-3xl">
              <StaticImage
                tw="max-h-500px max-w-3xl"
                src="../../static/service_logo_2.png"
                alt="/service_logo_2"
              />
            </div>
            <div tw="max-h-500px max-w-3xl bg-darkBlue text-paleOrange px-6 py-6 lg:px-16 lg:py-16">
              <p tw="md:text-base lg:text-2xl font-bold text-paleOrange">
                GatbyjsやNext.jsなどのJSフレームワークを用いて、ヘッドレスコマースを実現。
              </p>
              <p tw="md:text-sm lg:text-base">
                ヘッドレスコマースでは、ユーザーが触れるインターフェースをバックエンドのロジックと切り離しているため、開発体験が良く、サイトを柔軟に作り変えていくことが可能です。
                <br />
                また、高速でページ表示が可能なため、ページの表示遅延いよる売上の低下を防止できます。
              </p>
            </div>
            <StaticImage
              tw="hidden md:block max-h-500px max-w-3xl"
              src="../../static/service_logo_2.png"
              alt="/service_logo_2"
            />
          </div>

          <div tw="grid grid-cols-1 md:grid-cols-2 text-justify">
            <StaticImage
              tw="object-cover max-h-500px max-w-3xl"
              src="../../static/service_logo_3.png"
              alt="/service_logo_3"
            />
            <div tw="max-h-500px max-w-2xl bg-darkBlue text-paleOrange px-6 py-6 lg:px-16 lg:py-16">
              <p tw="md:text-base lg:text-2xl font-bold text-paleOrange">
                既存のカートシステムからShopifyへの移行や、新規での立ち上げを設計の段階から、併走型でコンサルティング
              </p>
              <p tw="md:text-sm lg:text-base">
                プロジェクトの成功の鍵は設計です。今までAlquimistaで蓄積してきた全てのナレッジを活かし、貴社にベストなアーキテクチャを提案します。もちろん、設計から構築、メンテナンスまで一気通貫でお任せいただけます。
              </p>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div tw="mb-28">
          <h1 tw="pb-7">Blog</h1>
          <div tw="flex justify-center">
            <div
              tw="w-36 h-8 overflow-x-hidden rounded-full bg-darkBlue px-1 py-1 mb-10"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? (
                <div tw="flex justify-between items-center mb-0 ">
                  <p tw="font-bold mb-0 text-xs rounded-full bg-paleOrange text-darkBlue px-3 py-1">
                    New
                  </p>
                  <p tw="font-bold mb-0 text-xs text-paleOrange pr-3">Puplular</p>
                </div>
              ) : (
                <div tw="flex justify-between items-center mb-0 ">
                  <p tw="font-bold mb-0 text-xs text-paleOrange pl-3">New</p>
                  <p tw="font-bold mb-0 text-xs rounded-full bg-paleOrange text-darkBlue px-3 py-1">
                    Puplular
                  </p>
                </div>
              )}
            </div>
          </div>

          {toggle ? <ThreeNewContents /> : <ThreePopularContents />}

          <Link to="/blog/all">
            <button
              style={{ outline: 'none' }}
              tw="mx-auto font-bold text-sm px-6 py-2 text-center border-2 border-darkBlue rounded-full text-black hover:text-paleOrange hover:border-lightGreen hover:bg-lightGreen transition duration-300"
              type="button"
            >
              Read more →
            </button>
          </Link>
        </div>

        {/* News */}
        <div tw="mb-28" id="news_section">
          <h1 tw="pb-14">News</h1>
          <div tw="grid grid-cols-1 mb-5">
            <ol tw="list-none">
              {/* @ts-ignore */}
              {posts.map(post => (
                // @ts-ignore
                <div key={post.node.slug} tw="text-left border-b border-darkBlue mb-5">
                  <p tw="opacity-60 font-bold text-lg mb-5">{post?.node.date}</p>
                  <p tw="font-extrabold text-lg mb-8">{post?.node.title}</p>
                </div>
              ))}
            </ol>
          </div>
          <Link to="/blog/all">
            <button
              style={{ outline: 'none' }}
              tw="mx-auto font-bold text-sm px-6 py-2 text-center border-2 border-darkBlue rounded-full text-black hover:text-paleOrange hover:border-lightGreen hover:bg-lightGreen transition duration-300 outline-none"
              type="button"
            >
              Read more →
            </button>
          </Link>
        </div>
        {/* Members */}
        <div tw="mb-28" id="member_section">
          <h1 tw="pb-14">Members</h1>
          <ol tw="list-none mb-0 ">
            <div tw="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-12">
              {/* @ts-ignore */}
              {members.map((member, index) => (
                <div key={member?.name} tw="">
                  <div tw="flex justify-center">
                    {/*  eslint-disable-next-line no-console */}
                    <img
                      tw="w-48 rounded-full mb-4 mx-0"
                      src={`/${member?.name}.png`}
                      alt={member?.name}
                    />
                  </div>
                  <p tw="mb-2">{member?.role}</p>
                  <p tw="mb-2 font-bold">{member?.name}</p>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  {member?.twitter && (
                    <div tw="flex justify-center items-center mb-5">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <p tw="pr-2 mb-0">Follow me</p>
                      <img tw="w-5" src="/twitter-icon.svg" alt="/twitter-icon.svg" />
                    </div>
                  )}

                  {open === index ? (
                    <div>
                      <p tw="font-bold text-sm text-left">{member?.description}</p>
                      <div tw="flex w-full justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          tw="h-6 w-6 mt-3 mx-0 bg-darkBlue rounded-full text-paleOrange"
                          onClick={() => setOpen(-1)}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div tw="flex w-full justify-center">
                      <svg
                        tw="h-6 w-6 mt-3 mx-0 bg-darkBlue rounded-full text-paleOrange"
                        onClick={() => setOpen(index)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ol>
        </div>
        <div>
          <div
            tw="fixed block bg-paleOrange bottom-10 right-16 z-10 rounded-full px-5 py-3 w-16 h-16"
            onClick={() => animateScroll.scrollToTop()}
          >
            <i>
              <FontAwesomeIcon icon={faArrowUp} />
              <p tw="m-0 text-sm">Top</p>
            </i>
          </div>
          <div
            tw="hover:opacity-0 transition duration-500 fixed block bg-paleOrange bottom-10 right-16 z-10 rounded-full px-5 pt-5 w-16 h-16"
            onClick={() => animateScroll.scrollToTop()}
          >
            <i>
              <FontAwesomeIcon icon={faChevronUp} />
            </i>
          </div>
          {/* <p tw="fixed block bg-paleOrange bottom-6 right-16 z-10 rounded-full px-5 py-5">top</p> */}
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
          twitter
        }
      }
    }
    allContentfulPost(sort: { order: DESC, fields: date }, limit: 3) {
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
