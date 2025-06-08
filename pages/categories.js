import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Categories() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1>Quiz Categories</h1>
        <ul>
          <li>History of Pakistan</li>
          <li>Foreign Policy</li>
          <li>Economy</li>
          <li>Ideology</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
