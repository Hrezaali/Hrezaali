// "use client";

// import { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const isFormValid = formData.name && formData.email && formData.message;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Clear error if field is filled
//     setErrors({ ...errors, [name]: value ? "" : "This field is required" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check for empty fields
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key]) {
//         newErrors[key] = "This field is required";
//       }
//     });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Send request to Formsubmit
//     const response = await fetch("https://formsubmit.co/hrezaalidev@gmail.com", {
//       method: "POST",
//       headers: {
//         "Accept": "application/json",
//       },
//       body: new URLSearchParams(formData), // Send form data as URLSearchParams
//     });

//     if (response.ok) {
//       alert("Your message has been sent!");
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       alert("Error sending message");
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 gap-12">
//       <div className="flex flex-col text-center md:text-left">
//         <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-200 py-4">
//           Let's Connect!
//         </h2>
//         <div className="max-w-2xl min-h-[50vh] flex items-center justify-center text-gray-900 dark:text-gray-200 leading-relaxed text-xl md:text-2xl font-bold px-6 py-8 rounded-lg shadow-lg">
//           <p className="whitespace-pre-wrap break-words">
//             Feel free to reach out! I'm always excited to connect with like-minded
//             professionals and explore new opportunities. Whether you have a
//             project in mind or want to collaborate on innovative ideas, let's work
//             together to create something amazing. Send me a message, and let's
//             start the conversation!
//           </p>
//         </div>
//       </div>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-2xl w-full p-8 text-gray-200 shadow-md rounded-lg bg-gray-800"
//       >
//         {/* Name */}
//         <div className="mb-6">
//           <label htmlFor="name" className="block text-gray-300 text-xl mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.name && <p className="text-lime-400 text-sm">{errors.name}</p>}
//         </div>

//         {/* Email */}
//         <div className="mb-6">
//           <label htmlFor="email" className="block text-gray-300 text-xl mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.email && <p className="text-lime-400 text-sm">{errors.email}</p>}
//         </div>

//         {/* Message */}
//         <div className="mb-6">
//           <label htmlFor="message" className="block text-gray-300 text-xl mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Write your message..."
//             className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="6"
//           />
//           {errors.message && <p className="text-lime-400 text-sm">{errors.message}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={!isFormValid}
//           className={`w-full py-3 px-6 rounded-lg transition duration-300 ${
//             isFormValid
//               ? "bg-blue-500 hover:bg-blue-600"
//               : "bg-gray-600 opacity-50 cursor-not-allowed"
//           }`}
//         >
//           Send
//         </button>
//       </form>
//     </div>
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
  const [isAwaitingConfirmation, setIsAwaitingConfirmation] = useState(false); // کنترل انتظار تأیید
  const isFormValid = formData.name && formData.email && formData.message && !isAwaitingConfirmation;

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

    setIsAwaitingConfirmation(true); // تنظیم وضعیت "در انتظار تأیید"

    // Send request to Formsubmit
    const response = await fetch("https://formsubmit.co/hrezaalidev@gmail.com", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: new URLSearchParams(formData), // Send form data as URLSearchParams
    });

    if (response.ok) {
      alert("Your message has been sent! Please check your email for confirmation.");
      
      // بعد از تأیید کاربر مجدداً امکان ارسال بده
      setTimeout(() => {
        setIsAwaitingConfirmation(false); // فعال کردن دوباره دکمه بعد از 60 ثانیه
      }, 50000); // یک دقیقه محدودیت ارسال مجدد
    } else {
      alert("Error sending message");
      setIsAwaitingConfirmation(false); // در صورت خطا، دوباره دکمه را فعال کن
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 gap-12">
      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-200 py-4">
          Let's Connect!
        </h2>
        <div className="max-w-2xl min-h-[50vh] flex items-center justify-center text-gray-900 dark:text-gray-200 leading-relaxed text-xl md:text-2xl font-bold px-6 py-8 rounded-lg shadow-lg">
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
        className="max-w-2xl w-full p-8 text-gray-200 shadow-md rounded-lg bg-gray-800"
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
            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
          />
          {errors.message && <p className="text-lime-400 text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 px-6 rounded-lg transition duration-300 ${
            isFormValid
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-600 opacity-50 cursor-not-allowed"
          }`}
        >
          {isAwaitingConfirmation ? "Awaiting Confirmation..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
