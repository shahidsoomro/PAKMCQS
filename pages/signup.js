import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Signup() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1>Sign Up</h1>
        <form method="post" action="/signup">
          <label>Name: <input type="text" name="name" required /></label><br />
          <label>Email: <input type="email" name="email" required /></label><br />
          <label>Password: <input type="password" name="password" required /></label><br />
          <button type="submit">Register</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
