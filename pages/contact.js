import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1>Contact Us</h1>
        <form method="post" action="/contact">
          <label>Name: <input type="text" name="name" required /></label><br />
          <label>Email: <input type="email" name="email" required /></label><br />
          <label>Message:<br /><textarea name="message" rows="5" cols="40"></textarea></label><br />
          <button type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
