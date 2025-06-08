import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1>Welcome to PAKMCQS</h1>
        <p>Your one stop resource for Pakistan Studies MCQs.</p>
      </main>
      <Footer />
    </>
  );
}
