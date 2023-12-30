import "../Contact/ContactStyles.css";

const Contact = () => {
  return (
    <div className="contact-form-container" id="contact">
      <h1>Contact</h1>
      <form
        action="https://getform.io/f/0f107b51-8f5f-40a1-972d-c2e892a27f01"
        method="POST"
        encType="multipart/form-data"
        className="contact-form"
      >
        <div className="grid-container">
          <div className="input-container">
            <label className="label">Name</label>
            <input className="input" type="text" name="name" />
          </div>
          <div className="input-container">
            <label className="label">Phone</label>
            <input className="input" type="text" name="phone" />
          </div>
          <div className="email-container">
            <label className="label-input">Email</label>
            <input className="input" type="email" name="email" />
          </div>
          <div className="email-container">
            <label className="label-input">Subject</label>
            <input className="input" type="text" name="subject" />
          </div>
        </div>
        <div className="email-container">
          <label className="label-input">Message</label>
          <textarea className="input" rows="10" name="message"></textarea>
        </div>
        <button className="contact-btn">
            Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact