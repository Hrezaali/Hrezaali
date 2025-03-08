import React from 'react';
import Image from 'next/image';

const MyCertificate = ({ id }) => {
  return (
    <div id={id} className="relative flex flex-col items-center justify-center text-center min-h-screen">
      <div className="max-w-sm flex items-center justify-center text-center text-gray-900 dark:text-white leading-relaxed text-3xl md:text-4xl font-extrabold px-8 py-4 rounded-lg shadow-lg mb-10">
        My Certificates
      </div>
      <div className="max-w-lg  bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
        <Image
          src="/images/Certificate.jpg"
          alt="certificate"
          width={1000}
          height={1000}
          className="w-full h-48 object-cover transition-opacity duration-500 hover:opacity-90"
        />
      </div>
    </div>
  );
};

export default MyCertificate;


