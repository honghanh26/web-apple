import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './main.css';
import './overview.css';
import heroLogo from '../assets/v/iphone-14-pro/c/images/overview/hero/hero_logo__fyok6s0bvo2u_large.jpg';
import heroIphone from '../assets/v/iphone-14-pro/c/images/overview/hero/hero_iphone_14_pro__e0act2165xqq_large.jpg';
import heroEndframe from '../assets/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg';
import heroBackground from '../assets/v/iphone-14-pro/c/images/overview/hero/hero_background__ep8j6kim532a_large.png';

function SectionHero() {
  return (
    <section
      className="section section-hero"
    >
      <div
        className="hero-header"
      >
        <h1 className="hero-headline">
          <span className="visuallyhidden">
            iPhone&nbsp;14 Pro 및 iPhone&nbsp;14 Pro&nbsp;Max
          </span>
          <AnimationOnScroll animateIn="animate__bounceOut">
            <picture
              id="overview-hero-hero-logo-1"
              className="overview-hero-hero-logo"
            >
              <img
                src={heroLogo}
                alt="hero_logo__fyok6s0bvo2u_large"
              />
            </picture>
          </AnimationOnScroll>
        </h1>
        <AnimationOnScroll animateIn="animate__slideInUp">
          <picture
            id="overview-hero-hero-iphone-14-pro-1"
            className="overview-hero-hero-iphone-14-pro static-only"
          >
            <img
              src={heroIphone}
              alt="hero_iphone_14_pro__e0act2165xqq_large"
            />
          </picture>
        </AnimationOnScroll>
        <div className="scaling-container">
          <div className="video-container">
            <video
              muted=""
              playsInline=""
              preload="none"
            ></video>
            <AnimationOnScroll animateIn="animate__slideInUp">
              <picture
                id="overview-hero-hero-endframe-1"
                className="overview-hero-hero-endframe hero-end-frame"
              >
                <img
                  src={heroEndframe}
                  alt="hero_endframe__dtzvajyextyu_large"
                />
              </picture>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className="hero-intro">
        <div className="intro-wrapper">
          <div className="intro typography-hero-intro preload">
            iPhone을 다루는 완전히 새로운 방법. 생명을 구할&nbsp;수 있도록 설계된
            새로운 핵심 안전 기능. 압도적인 디테일을 자랑하는 혁신적인 48MP
            카메라. 이&nbsp;모든&nbsp;걸 가능케 하는 궁극의 스마트폰&nbsp;칩.
            <div className="gradient">
              <picture
                id="overview-hero-hero-background-1"
                className="overview-hero-hero-background intro-background initial-load"
              >
                <img
                  src={heroBackground}
                  alt="hero_background__ep8j6kim532a_large"
                />
              </picture>
              <picture
                id="overview-hero-hero-background-2"
                className="overview-hero-hero-background intro-background mirrored"
              >
                <img
                  src={heroBackground}
                  alt="hero_background__ep8j6kim532a_large"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="info-wrapper">
          <div className="info-content">
            <h2 className="subhead typography-header-1">
              프로 <br />
              <span className="descender-offset">그&nbsp;이상.</span>
            </h2>
            <p className="models">
              iPhone&nbsp;14&nbsp;Pro 및 iPhone&nbsp;14&nbsp;Pro&nbsp;Max
            </p>
            <p className="pricing typography-cta">
              <span
                className="sosumi-link-follows"
              />
              <br className="small" />
              (보상 판매
              <sup className="footnote footnote-number">
                <a href="#footnote-1" aria-label="Footnote * 기호">
                  *
                </a>
              </sup>{" "}
              미적용 가격)
            </p>
            <ul className="ctas-list">
              <li className="cta-item">
                <a
                  href="/105/media/kr/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/films/product/iphone-14-pro-product-tpl-kr-2022_16x9.m3u8"
                  aria-label="iPhone 14 Pro 동영상 보기"
                  id="film-iphone-14-pro"
                  className="icon-wrapper film-cta typography-cta"
                  role="button"
                >
                  <span className="icon-copy">동영상 보기</span>
                  <span className="icon icon-after icon-playcircle" />
                </a>
              </li>
              <li className="cta-item">
                <a
                  href="kr/apple-events/"
                  aria-label="이벤트 시청하기"
                  className="icon-wrapper event-cta typography-cta"
                >
                  <span className="icon-copy">이벤트 시청하기</span>
                  <span className="icon icon-after more" />
                </a>
              </li>
              <li className="cta-item quicklook-cta typography-cta">
                <p className="ar-quicklook-cta-ar-quicklook ar-quicklook-cta">
                  <a
                    href="/105/media/ww/iphone/shared/ar/2022/95e52aae-96c0-48d6-87f9-77b3fe97bff9/iphone-14-pro/iphone_14_pro_max_iphone_14_pro_deep_purple_no5G.usdz"
                    rel="ar"
                  >
                    <span>
                      AR로{" "}
                      <span className="visuallyhidden">
                        iPhone&nbsp;14&nbsp;Pro 및 iPhone&nbsp;14 Pro&nbsp;Max
                      </span>
                      보기
                    </span>
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="info-background-wrapper">
            <picture
              id="overview-hero-hero-background-3"
              className="overview-hero-hero-background info-background"
            >
              <img
                src={heroBackground}
                alt="hero_background__ep8j6kim532a_large"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
