import ContactForm from '@/components/ContactPage/ContactForm';

const ContactPage = ({id}) => {
  return (
    <div id={id} className=" relative  mt-20 z-10 mb-20 w-full overflow-x-hidden">
        <div className="text-center flex justify-center items-center">
          <h1 className="max-w-64 text-4xl font-bold text-center justify-center mb-8 p-6 border-4 border-gray-700 dark:border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            Contact Me
         </h1>   
        </div>
      <div>
         <ContactForm />
      </div>
     
    </div>
  );
};

export default ContactPage;