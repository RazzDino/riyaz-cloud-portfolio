import "./contact.css";

export default function Contact() {
  return (
    <section className="section light">
      <h2>Contact</h2>

      <p>
        Interested in working together or discussing Salesforce opportunities?
        Let’s connect.
      </p>

      <div className="contact-actions">
        <a href="mailto:shaikriyazrk@gmail.com">Email Me</a>
        <a
          href="https://www.linkedin.com/in/shaik-riyaz-948350b1"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/RazzDino"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
