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
import Layout from '../components/layout';
import ThreePopularContents from '../components/blog/threePopularContents';
import ThreeNewContents from '../components/blog/threeNewContents';
import MemberGrid from '../components/common/memberGrid';
import SEO from '../components/blog/seo';

const TopIndex: React.FC<PageProps<GatsbyTypes.TopIndexQuery>> = ({ data, location }) => {
  const [toggle, setToggle] = React.useState(true);
  const [blogButtonActive, setBlogButtonActive] = React.useState(false);
  const [topLetterFadeInFlg, setopLetterFadeInFlg] = React.useState(false);
  // @ts-ignore
  const { designer, engineer, marketing } = data.site?.siteMetadata?.member;
  const members = designer.concat(engineer, marketing);
  const newsPosts = data.allContentfulNews.edges;

  React.useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  React.useEffect(() => {
    setopLetterFadeInFlg(true);
  }, []);

  const scrollWindow = () => {
    const top = 1000;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setBlogButtonActive(true);
    } else {
      setBlogButtonActive(false);
    }
  };

  const none = {
    opacity: 0,
    transition: '0.2s',
    pointerEvents: 'none',
  };
  const active = {
    opacity: 1,
    transition: '0.2s',
  };

  const blogButtonStyle = blogButtonActive ? active : none;

  const hidden = {
    opacity: 0,
  };
  const display = {
    transition: '5s',
    opacity: 1,
    fontFamily: 'Montserrat',
  };
  const topLetterStyle = topLetterFadeInFlg ? display : hidden;

  return (
    <Layout location={location} topPage>
      <SEO title="Top Page" />
      {/* メインビジュアル */}
      <div tw="mb-24 z-20 h-750px bg-darkBlue relative flex items-center justify-center">
        <p
          style={topLetterStyle}
          tw="pb-24 transform scale-y-150 text-48px leading-60px  sm:text-72px sm:leading-85px m-0 text-left text-paleOrange font-black"
        >
          STEP <br /> BY&nbsp;&nbsp;STEP, <br /> WITH&nbsp;&nbsp;YOU.
        </p>
      </div>
      <div tw="pb-72 text-center text-darkBlue mx-8 md:mx-16 lg:mx-28 xl:mx-40">
        <div tw="md:mx-5 xl:mx-28">
          {/* About us */}
          <div tw="mb-36" id="aboutus_section">
            <p tw="pb-3 text-5xl font-bold break-normal" style={{ fontFamily: 'Avenir Next' }}>
              About Us
            </p>
            <p tw="font-bold leading-10">
              AlquimistaはShopifyを軸にしたDXエキスパートです。
              <br />
              レガシーなカートシステムからShopifyへの移行の積極的サポートに特化してます。
              <br />
              Shopifyを用いて最適なアーキテクチャを提案することでバックオフィス業務の最適化、データドリブンなシステム構成への変容
              開発スピードの向上を実現します。
            </p>
          </div>
          {/* Vision */}
          <div tw="mb-36" id="vision_section">
            <p tw="pb-3 text-5xl font-bold" style={{ fontFamily: 'Avenir Next' }}>
              Vision
            </p>
            <h3 tw="pb-6 text-darkBlue" style={{ fontFamily: 'Noto Sans JP' }}>
              “お客様が本来集中すべき時間を取り戻す”
            </h3>
            <p tw="font-bold leading-10">
              Alquimistaが目指すことは、新しいテクノロジーに寛容であり、マイクロサービスの考え方を軸に、
              <br />
              変化に強いアーキテクチャを提案し、お客様と共に成長することです。
            </p>
          </div>
        </div>

        {/* Service */}
        <div tw="mb-28" id="service_section">
          <p tw="pb-5 text-5xl font-bold" style={{ fontFamily: 'Avenir Next' }}>
            Service
          </p>

          {/* Service1 */}
          <div tw="pb-24 grid grid-cols-1 place-items-center md:place-items-stretch md:grid-cols-2 text-justify">
            <div tw="bg-white flex items-center ml-auto max-w-557px max-h-500px mr-auto md:mr-0">
              <StaticImage
                tw="object-contain w-full"
                src="../../static/service_logo_1.jpg"
                alt="/service_logo_1"
              />
            </div>
            <div tw="bg-darkBlue text-paleOrange px-6 lg:px-9 xl:px-14 py-6 lg:pt-12 xl:pt-20 max-w-557px max-h-500px">
              <p tw="text-lg md:text-xl lg:text-2xl xl:text-3xl xl:pb-3 font-bold text-paleOrange">
                Shopifyを用いた新規ショップの立ち上げ。他社カートシステムからShopifyへの移行をサポート。
              </p>
              <p tw="text-sm sm:leading-6">
                お客様が、マーケティングやデータドリブンな意思決定、カスタマーサクセスなど、最も大切なことに集中できるよう、最適なアーキテクチャを提案し、開発・メンテナンスまで一気通貫でサポートします。
              </p>
              <div tw="text-center mt-auto">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link to="#">
                  <button
                    style={{ outline: 'none' }}
                    tw="mx-auto mt-auto font-bold text-sm px-6 py-2 text-center border-2 border-paleOrange rounded-full text-paleOrange hover:border-lightGreen hover:bg-lightGreen transition duration-300 outline-none"
                    type="button"
                  >
                    Read more →
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Service2 */}
          <div tw="pb-24 grid grid-cols-1 place-items-center md:place-items-stretch md:grid-cols-2 text-justify">
            <div tw="block md:hidden max-w-557px max-h-500px">
              <div tw="bg-white flex items-center">
                <StaticImage src="../../static/service_logo_2.jpg" alt="/service_logo_2" />
              </div>
            </div>

            <div tw="bg-darkBlue text-paleOrange px-6 lg:px-9 xl:px-14 py-6 lg:pt-14 xl:pt-24 max-w-557px max-h-500px ml-auto mr-auto md:mr-0">
              <p tw="text-lg md:text-xl lg:text-2xl xl:text-3xl xl:pb-3 font-bold text-paleOrange">
                GatbyjsやNext.jsなどのJSフレームワークを用いて、ヘッドレスコマースを実現。
              </p>
              <p tw="text-sm sm:leading-6">
                ヘッドレスコマースでは、ユーザーが触れるインターフェースをバックエンドのロジックと切り離しているため、開発体験が良く、サイトを柔軟に作り変えていくことが可能です。
                <br />
                また、高速でページ表示が可能なため、ページの表示遅延いよる売上の低下を防止できます。
              </p>
            </div>

            <StaticImage
              tw="hidden md:block max-w-557px max-h-500px"
              src="../../static/service_logo_2.jpg"
              alt="/service_logo_2"
            />
          </div>

          {/* Service3 */}
          <div tw="grid grid-cols-1 place-items-center md:place-items-stretch md:grid-cols-2 text-justify">
            <div tw="bg-white flex items-center ml-auto max-w-557px max-h-500px mr-auto md:mr-0">
              <StaticImage tw="" src="../../static/service_logo_3.jpg" alt="/service_logo_3" />
            </div>

            <div tw="bg-darkBlue text-paleOrange px-6 lg:px-9 xl:px-14 py-6 lg:pt-14 xl:pt-24 max-w-557px max-h-500px">
              <p tw="text-lg md:text-xl lg:text-1.5xl xl:text-3xl xl:pb-3 font-bold text-paleOrange">
                既存のカートシステムからShopifyへの移行や、新規での立ち上げを設計の段階から、併走型でコンサルティング。
              </p>
              <p tw="text-sm sm:leading-6">
                プロジェクトの成功の鍵は設計です。今までAlquimistaで蓄積してきた全てのナレッジを活かし、貴社にベストなアーキテクチャを提案します。もちろん、設計から構築、メンテナンスまで一気通貫でお任せいただけます。
              </p>
            </div>
          </div>
        </div>

        {/* Blog */}
        <div tw="mb-40 xl:mx-16">
          <p tw="pb-7 text-5xl font-bold" style={{ fontFamily: 'Avenir Next' }}>
            Blog
          </p>
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
              tw="mx-auto font-bold text-sm px-6 py-2 md:mt-8 lg:mt-5 text-center border-2 border-darkBlue rounded-full text-black hover:text-paleOrange hover:border-lightGreen hover:bg-lightGreen transition duration-300"
              type="button"
            >
              Read more →
            </button>
          </Link>
        </div>

        {/* News */}
        <div tw="mb-40 md:mx-5 xl:mx-16" id="news_section">
          <p tw="pb-3 text-5xl font-bold" style={{ fontFamily: 'Avenir Next' }}>
            News
          </p>
          <div tw="grid grid-cols-1 mb-5">
            <ol tw="list-none">
              {/* @ts-ignore */}
              {newsPosts.map(post => (
                <Link to={`news/${post?.node.slug}`} key={post.node.slug}>
                  {/* @ts-ignore */}
                  <div tw="text-left border-b border-darkBlue mb-5 text-black">
                    <p tw="opacity-60 font-bold text-lg mb-5">{post?.node.createdAt}</p>
                    <p tw="font-semibold text-lg mb-8 hover:text-lightGreen transition duration-150">
                      {post?.node.title}
                    </p>
                  </div>
                </Link>
              ))}
            </ol>
          </div>
          <Link to="/news">
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
        <div tw="mb-28 md:mx-5 xl:mx-16" id="member_section">
          <p tw="pb-14 text-5xl font-bold" style={{ fontFamily: 'Avenir Next' }}>
            Members
          </p>
          <MemberGrid members={members} />
        </div>
        <div>
          <div
            tw="fixed block bg-paleOrange bottom-5 right-5 sm:bottom-10 sm:right-16 z-10 rounded-full w-14 h-14 sm:w-14 sm:h-14"
            onClick={() => animateScroll.scrollToTop()}
          >
            <div tw="pt-3 sm:pt-2">
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
            <p tw="m-0 text-sm hidden sm:block">Top</p>
          </div>
          <div
            tw="hover:opacity-0 transition duration-500 fixed block bg-paleOrange bottom-5 right-5 sm:bottom-10 sm:right-16 z-10 rounded-full w-14 h-14 sm:w-14 sm:h-14"
            onClick={() => animateScroll.scrollToTop()}
          >
            <div tw="flex justify-center items-center w-full h-full">
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
          </div>

          <Link to="/blog/all">
            <div
              style={blogButtonStyle}
              className="group"
              tw=" flex items-center overflow-hidden bg-darkBlue sm:hover:w-44 hover:bg-lightGreen transition duration-75 fixed bottom-5 left-5 sm:bottom-10 sm:left-16 z-10 rounded-full w-14 h-14 sm:w-14 sm:h-14"
            >
              <img tw="w-14" src="/note_logo.svg" alt="/note_logo.svg" />
              <p tw="hidden group-hover:block text-base font-bold mb-0 text-paleOrange">
                ブログを読む
              </p>
            </div>
          </Link>
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
          designer {
            description
            name
            role
          }
          engineer {
            description
            name
            role
            twitter
          }
          marketing {
            description
            name
            role
          }
        }
      }
    }
    allContentfulNews(sort: { order: DESC, fields: createdAt }, limit: 3) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "YYYY.MM.DD")
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
