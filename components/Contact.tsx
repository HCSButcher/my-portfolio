"use client";
import Section from "./Section";

export default function Contact() {
  return (
    <Section  id="contact" >
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl mt-10 font-bold text-center">Contact Me</h2>
        <form className="flex flex-col gap-4 mt-8">
          <input placeholder="Name" className="p-3 rounded bg-slate-800" />
          <input placeholder="Email" className="p-3 rounded bg-slate-800" />
          <textarea
            placeholder="Message"
            rows={4}
            className="p-3 rounded bg-slate-800"
          />
          <button className="bg-blue-500 py-3 rounded">Send Message</button>
        </form>
      </div>
    </Section>
  );
}
