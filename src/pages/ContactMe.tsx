import { useState } from "react";
import FormRow from "../UI/FormRow";

// todo:
// make responsive
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

    // find a way to send email
  };

  return (
    <section className="">
      <form
        className=" bg-gradient-to-br from-deep-navy to-dark-slate flex flex-col items-center justify-center gap-3 lg:gap-5 backdrop-blur-sm p-[2rem_!important] md:p-[2.5rem_!important] rounded-2xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-display text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r text-nowrap from-primary/90 to-primary/70 bg-clip-text text-transparent">
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
          className="w-full text-lg font-bold tracking-wide btn-padding bg-primary text-dark-slate rounded-full transition-all border-2 border-primary/50 btn-hover-effect "
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactMe;
