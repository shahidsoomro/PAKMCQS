import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1>Login</h1>
        <form method="post" action="/login">
          <label>Email: <input type="email" name="email" required /></label><br />
          <label>Password: <input type="password" name="password" required /></label><br />
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
