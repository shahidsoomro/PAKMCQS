import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1>User Dashboard</h1>
        <p>Welcome to your dashboard.</p>
      </main>
      <Footer />
    </>
  );
}
