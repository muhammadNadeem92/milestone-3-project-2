"use client";
import { useState } from "react";

export default function contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div  className="max-w-md mx-auto bg-blue-50 opacity-87 shadow-md rounded-lg p-6 my-16">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="bg-zinc-100">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none mt-4  "

        />
        <textarea
          name="message"
          placeholder="Your Message"
       
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none h-24 resize-none mt-4"

        />
        <button type="submit"className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-4'>Send</button>
      </form>
    </div>
  );
}
