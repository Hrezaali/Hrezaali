import ContactForm from '@/components/ContactPage/ContactForm';
const ContactPage = ({ id }) => {
  return (
    <div id={id} className="relative z-10 mb-12 mt-36 w-full px-6">
      {/* عنوان صفحه */}
      <div className="text-center flex justify-center items-center mt-12 md:mt-20">
        <h1 className="max-w-lg text-4xl font-bold text-center mb-8 p-5 border-4
         border-gray-700 dark:border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-800
          text-gray-900 dark:text-white">
          Contact Me
        </h1>
      </div>

      {/* فرم تماس */}
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
