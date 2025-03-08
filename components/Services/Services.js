import Image from "next/image";
export default function Services({id}) {
    return (
      <section id={id} className="relative w-full h-screen flex flex-col items-center justify-center p-4 z-10">
        {/* کادر عنوان */}
        <div className="bg-purple-600 text-white text-3xl md:text-4xl font-extrabold px-8 py-4 rounded-lg shadow-lg mb-4">
          Services
        </div>
        
        {/* متن توضیحی */}
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed">
            As a Front-End Developer specializing in Next.js, I craft high-performance, responsive web applications
            with a focus on clean code, modern UI/UX, and seamless user experiences. As a freelancer and remote worker,
            I thrive in dynamic environments, collaborating with global teams to build scalable, maintainable solutions
            that elevate digital experiences.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12 max-w-full p-8">
          {/* کارت ۱ */}
          <div className="service_parent card flex flex-col items-center p-6 shadow-lg rounded-3xl bg-white dark:bg-gray-800  sm:w-1/2 md:w-1/3 lg:w-1/6 h-85">
            <div className="service_logo service_logo1">
              <Image 
                alt="Front-end Development" 
                loading="lazy" 
                width="70" 
                height="70" 
                decoding="async" 
                src="/images/Front End Developer.png" 
                style={{ color: "transparent" }}
              />
            </div>
            <h1 className="text-2xl text-center font-bold p-2">Front-end Development</h1>
            <p className="text-center text-lg p-2">
              Build user interfaces for websites and applications, ensuring a seamless user experience.
            </p>
          </div>
          
          {/* کارت ۲ */}
          <div className="service_parent card flex flex-col items-center p-6 shadow-lg rounded-3xl bg-white dark:bg-gray-800 sm:w-1/2 md:w-1/3 lg:w-1/6 h-85">
            <div className="service_logo service_logo2">
              <Image 
                alt="Back-end Development" 
                loading="lazy" 
                width="100" 
                height="100" 
                decoding="async" 
                src="/images/Backend developer.png" 
                style={{ color: "transparent" }}
              />
            </div>
            <h1 className="text-2xl text-center font-bold p-2">Back-end Development</h1>
            <p className="text-center text-lg p-2">
              Develop robust and scalable server-side applications with secure APIs.
            </p>
          </div>
          
          {/* کارت ۳ */}
          <div className="service_parent card flex flex-col items-center p-6 shadow-lg rounded-3xl bg-white dark:bg-gray-800  sm:w-1/2 md:w-1/3 lg:w-1/6 h-85">
            <div className="service_logo service_logo3">
              <Image 
                alt="UI/UX Design" 
                loading="lazy" 
                width="70" 
                height="70" 
                decoding="async" 
                src="/images/Api.png" 
                style={{ color: "transparent" }}
              />
            </div>
            <h1 className="text-2xl text-center font-bold p-2">API</h1>
            <p className="text-center text-lg p-2">
            Create APIs to enable efficient communication between systems, ensuring smooth data exchange.
            </p>
          </div>
  
          {/* کارت ۴ */}
          <div className="service_parent card flex flex-col items-center p-6 shadow-lg rounded-3xl bg-white dark:bg-gray-800  sm:w-1/2 md:w-1/3 lg:w-1/6 h-85">
            <div className="service_logo service_logo4">
              <Image 
                alt="Mobile App Development" 
                loading="lazy" 
                width="70" 
                height="70" 
                decoding="async" 
                src="/images/Marketing Analytics.png" 
                style={{ color: "transparent" }}
              />
            </div>
            <h1 className="text-2xl text-center font-bold p-2">Performance Optimize</h1>
            <p className="text-center text-lg p-2">
             Optimize websites and applications to deliver fast and efficient performance.
            </p>
          </div>
        </div>
      </section>
    );
  }
  