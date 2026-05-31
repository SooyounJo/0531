import Link from 'next/link';

const navItems = [
  { href: '/', label: '홈' },
  { href: '#features', label: '기능' },
  { href: '#about', label: '소개' },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="logo">
          <img
            src="/images/logo.svg"
            alt="LG Inter"
            className="logo__image"
            width={120}
            height={30}
          />
        </Link>

        <nav className="nav" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
