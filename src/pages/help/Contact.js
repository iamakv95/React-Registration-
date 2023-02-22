import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Enter your name" name="username" />
        <input type="email" name="email" placeholder="enter your email" />
        <input type="text" name="message" placeholder="enter your message" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
