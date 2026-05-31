export default function Footer() {
  return (
    <footer id="about" className="footer">
      <div className="container footer__inner">
        <p className="footer__title">LG Inter Backend</p>
        <p className="footer__text">
          Yarn과 Next.js Pages Router로 실행되는 React 웹사이트입니다.
        </p>
        <p className="footer__copy">© {new Date().getFullYear()} LG Inter</p>
      </div>
    </footer>
  );
}
