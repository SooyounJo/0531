import { formatDate } from '../utils/formatDate';

export default function Hero() {
  const today = formatDate(new Date());

  return (
    <section className="hero">
      <div className="container hero__inner">
        <p className="hero__badge">Next.js · React · Yarn</p>
        <h1 className="hero__title">
          LG Inter 웹 플랫폼
          <span className="hero__title-accent"> 구동 준비 완료</span>
        </h1>
        <p className="hero__description">
          Pages Router 기반의 프로젝트 구조로 components, pages, utils,
          styles 폴더를 갖춘 웹사이트입니다.
        </p>
        <div className="hero__meta">
          <span>오늘 날짜: {today}</span>
        </div>
        <div className="hero__actions">
          <a href="#features" className="btn btn--primary">
            기능 살펴보기
          </a>
          <a href="#about" className="btn btn--secondary">
            프로젝트 소개
          </a>
        </div>
      </div>
    </section>
  );
}
