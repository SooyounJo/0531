const features = [
  {
    title: 'components',
    description: '재사용 가능한 UI 컴포넌트를 모아 관리합니다.',
  },
  {
    title: 'pages',
    description: 'Next.js Pages Router 기반 라우팅 페이지입니다.',
  },
  {
    title: 'utils',
    description: '날짜 포맷, API 헬퍼 등 공통 유틸 함수를 둡니다.',
  },
  {
    title: 'styles',
    description: '전역 및 모듈 스타일을 한곳에서 관리합니다.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">프로젝트 구조</h2>
        <p className="section-description">
          lginter_backend 레퍼런스 구조를 기반으로 구성된 폴더입니다.
        </p>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3 className="feature-card__title">{feature.title}/</h3>
              <p className="feature-card__description">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
