import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("name:", name);
    console.log("email:", email);
    console.log("message:", message);
  };

  return (
    <>
      <p>Contact us Page</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="border border-red-500"
          onChange={(e) => {
            setName(e.target.value);  // Re-render the Component
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="border border-red-500"
          onChange={(e) => {
            setEmail(e.target.value); // Re-render the Component
          }}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="border border-red-500"
          onChange={(e) => {
            setMessage(e.target.value); // Re-render the Component
          }}></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
