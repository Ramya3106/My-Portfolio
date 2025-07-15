import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <textarea
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default ContactForm;
