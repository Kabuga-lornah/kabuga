function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Tell us about your AI needs"></textarea>
        <button className="cta-button">Send Request</button>
      </form>
    </div>
  );
}
export default Contact;