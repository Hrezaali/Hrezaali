// "use client";
// import { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // در اینجا می‌توانید اطلاعات فرم را به سرور ارسال کنید
//     console.log('Form Data Submitted:', formData);
//     alert('پیام شما ارسال شد!');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 text-white shadow-md rounded-lg">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700">نام</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-lg"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700">ایمیل</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-lg"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="message" className="block text-gray-700">پیام</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-lg"
//           rows="4"
//           required
//         />
//       </div>
//       <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
//         ارسال
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

// "use client";

// import { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ارسال درخواست POST به فانکشن سرورلس Vercel
//     const response = await fetch('/api/sendEmail', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       alert('پیام شما ارسال شد!');
//     } else {
//       alert('خطا در ارسال پیام');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center text-center  ">
//   <div className="flex flex-col">
//     <div className="flex items-center justify-center text-center text-gray-900 dark:text-white leading-relaxed text-6xl md:text-6xl font-extrabold px-8 py-4 rounded-lg shadow-lg mb-10">
//       Let's Connect!
//     </div>
//     <div className="max-w-2xl min-h-[50vh] flex items-center justify-center text-center text-gray-900 dark:text-white leading-relaxed text-2xl md:text-3xl font-bold px-12 py-8 rounded-lg shadow-lg">
//   <p className="whitespace-pre-wrap break-words">
//     Feel free to reach out! I'm always excited to connect with 
//     like-minded professionals and explore new opportunities. 
//     Whether you have a project in mind or want to collaborate 
//     on innovative ideas, let's work together to create something amazing. 
//     Send me a message, and let's start the conversation!
//   </p>
// </div>

//   </div>

//   {/* اصلاح فرم برای بزرگتر شدن */}
//   <form onSubmit={handleSubmit} className=" max-w-2xl  p-8 text-white shadow-md rounded-lg  overflow-x-hidden">
//     <div className="mb-6">
//       <label htmlFor="name" className="block text-gray-300 text-xl mb-2">نام</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         className="w-full  px-36 py-3 border border-gray-400 rounded-lg text-black"
//         required
//       />
//     </div>
//     <div className="mb-6">
//       <label htmlFor="email" className="block text-gray-300 text-xl mb-2">ایمیل</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         className="w-full px-4 py-3 border border-gray-400 rounded-lg text-black"
//         required
//       />
//     </div>
//     <div className="mb-6">
//       <label htmlFor="message" className="block text-gray-300 text-xl mb-2">پیام</label>
//       <textarea
//         id="message"
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         className="w-full px-4 py-3 border border-gray-400 rounded-lg text-black"
//         rows="6"
//         required
//       />
//     </div>
//     <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
//       ارسال
//     </button>
//   </form>
// </div>


//   );
// };

// export default ContactForm;
"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const isFormValid = formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error if field is filled
    setErrors({ ...errors, [name]: value ? "" : "This field is required" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Send request to the server
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Your message has been sent!");
    } else {
      alert("Error sending message");
    }
  };

  return (
    <div className="flex items-center justify-center text-center w-full">
      <div className="flex flex-col">
        <div className="text-6xl font-extrabold text-gray-900 dark:text-white py-4">
          Let's Connect!
        </div>
        <div className="max-w-2xl min-h-[50vh] flex items-center justify-center text-center text-gray-900 dark:text-white leading-relaxed text-2xl md:text-3xl font-bold px-12 py-8 rounded-lg shadow-lg">
          <p className="whitespace-pre-wrap break-words">
            Feel free to reach out! I'm always excited to connect with like-minded
            professionals and explore new opportunities. Whether you have a
            project in mind or want to collaborate on innovative ideas, let's work
            together to create something amazing. Send me a message, and let's
            start the conversation!
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full p-8 text-white shadow-md rounded-lg bg-gray-800"
      >
        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-300 text-xl mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-white"
          />
          {errors.name && <p className="text-lime-400 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 text-xl mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-white"
          />
          {errors.email && <p className="text-lime-400 text-sm">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 text-xl mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-white"
            rows="6"
          />
          {errors.message && (
            <p className="text-lime-400 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 px-6 rounded-lg transition duration-300 ${
            isFormValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
