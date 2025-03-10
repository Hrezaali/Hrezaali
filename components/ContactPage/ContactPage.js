import ContactForm from '@/components/ContactPage/ContactForm';
import { FaInstagram, FaTelegram, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactPage = ({ id }) => {
  return (
    <div id={id} className="relative z-10 mb-6 mt-8 w-full px-6">
      {/* عنوان صفحه */}
      <div className="text-center flex justify-center items-center mt-4 md:mt-6">
        <h1 className="max-w-md text-2xl font-semibold text-center mb-4 p-3 border-4
         border-gray-700 dark:border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-800
          text-gray-900 dark:text-white">
          Contact Me
        </h1>
      </div>

      {/* فرم تماس */}
      <div className="flex justify-center mb-6">
        <ContactForm />
      </div>

      {/* لینک‌های شبکه‌های اجتماعی */}
      <div className="flex justify-center space-x-4 mb-4">
        {/* اینستاگرام */}
        <a href="https://www.instagram.com/h.rezaali" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
        </a>

        {/* تلگرام */}
        <a href="https://t.me/Connectionadmin" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="text-2xl hover:text-blue-500 transition-colors duration-300" />
        </a>

        {/* واتس‌اپ */}
        <a href="https://wa.me/+989193243011" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-2xl hover:text-green-500 transition-colors duration-300" />
        </a>

        {/* لینکدین */}
        <a href="https://www.linkedin.com/in/hassan-rezaali-295432a1" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-700 transition-colors duration-300" />
        </a>

        {/* گیت‌هاب */}
        <a href="https://github.com/Hrezaali" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-700 transition-colors duration-300" />
        </a>

        {/* جیمیل */}
        <a href="mailto:hrezaalidev@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl hover:text-red-500 transition-colors duration-300" />
        </a>
      </div>

      {/* متن "Created by" */}
      <div className="text-center text-xs text-gray-600 dark:text-gray-400 mt-3">
        <p>Designed and Developed by <span className="font-semibold text-gray-900 dark:text-white">Hassan Rezaali</span> | © 2025</p>
      </div>
    </div>
  );
};

export default ContactPage;
