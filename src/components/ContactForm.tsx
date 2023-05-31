import useContactForm from "../hooks/useContactForm";
import sendEmail from "../utils/sendEmail";
import { FormEvent, ReactEventHandler, useState } from "react";

const ContactForm = () => {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        required
        id="email"
        value={values.email}
        onChange={handleChange}
        type="email"
      />

      <label htmlFor="subject">Subject</label>
      <input
        required
        id="subject"
        value={values.subject}
        onChange={handleChange}
        type="text"
      />
      <label htmlFor="message">Message</label>
      <textarea
        required
        value={values.message}
        onChange={handleChange}
        id="message"
        rows={8}
      />
      <button type="submit" value="Submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
