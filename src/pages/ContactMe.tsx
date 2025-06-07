import { useState } from "react";
import FormRow from "../UI/FormRow";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <form
        className=" bg-gradient-to-br from-deep-navy to-dark-slate flex flex-col items-center justify-center gap-8 backdrop-blur-sm p-[3rem_!important] rounded-2xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-display text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r text-nowrap from-neon-green/90 to-neon-green/70 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <FormRow
          label="Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        <FormRow
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
        />
        <FormRow
          label="Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          isTextArea
        />
        <button
          className="w-full text-lg font-bold tracking-wide btn-padding bg-neon-green text-dark-slate rounded-full transition-all border-2 border-neon-green/50 btn-hover-effect mt-4"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
