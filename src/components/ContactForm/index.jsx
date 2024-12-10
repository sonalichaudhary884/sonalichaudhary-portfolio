import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FORMS_SPREE_KEY } from "../../constants";
import "./style.css";

function ContactForm() {
  const [state, handleSubmit] = useForm(FORMS_SPREE_KEY);

  return (
    <div class="form-section w-full">
      <p class="text-gray-500 text-xl contact_text">
        If you want to know more about me or my work, or if you would just like
        to say hello, send me a message. I'd love to hear from you.
      </p>

      {state?.succeeded ? (
        <div className="thanks-container">
          Thank you for reaching out! I'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div class="form-group my-6">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div class="form-group mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div class="form-group mb-4">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            class="bg-indigo-500 text-white px-2 w-40 rounded-md hover:bg-indigo-400"
            type="submit"
            disabled={state.submitting}
            style={{ height: "40px" }}
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
