import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo-container">
          <Link href="/">
            <span className="tagline">PAKSTUDY.XYZ</span>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
