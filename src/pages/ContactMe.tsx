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
    <section className="mx-auto flex h-[calc(100svh-10.5rem)] w-[80vw] flex-col items-center gap-8 overflow-y-scroll md:w-[70vw] lg:h-[calc(100svh-14rem)] lg:w-[60vw]">
      {/* // ! Fan Text Updates Signup */}
      {/* <article className="w-full bg-gradient-to-br from-primary/20 to-primary/10 flex flex-col items-center justify-center gap-4 backdrop-blur-sm p-6 bg-gradient rounded-2xl  border border-primary/30">
        <h2 className="text-display text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent">
          Get Exclusive Updates
        </h2>
        <p className="text-center text-lg">
          Text <span className="font-bold text-primary">RSVP</span> to{" "}
          <span className="font-bold text-primary">(your-laylo-number)</span>
        </p>
        <p className="text-sm text-center opacity-80">
          Be the first to know about new releases, tour dates, and exclusive
          drops!
        </p>
      </article> */}

      <form
        className="border-primary/30 bg-gradient from-deep-navy to-dark-slate flex w-full flex-col items-center justify-center gap-3 rounded-2xl border p-[1rem_!important] backdrop-blur-sm md:gap-5 md:p-[2rem_!important] lg:gap-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-display from-primary/90 to-primary/70 bg-gradient-to-r bg-clip-text text-3xl font-bold text-nowrap text-transparent md:text-4xl lg:text-5xl">
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
          className="btn-padding bg-primary text-dark-slate border-primary/50 btn-hover-effect w-[clamp(15rem,30vw,40rem)] rounded-full border-2 text-base font-extrabold tracking-wide transition-all md:text-lg"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactMe;
