import Image from 'next/image';
const ProfilePicture = () => {
  return (
    <div className="relative flex justify-center items-center mt-4 -z-3">
      <div className="overflow-hidden sm:w-80 sm:h-80 shadow-lg hover:scale-105 transition-all duration-300 transform">
        <Image
          src="/images/PortfolioPicture.png" // مسیر تصویر خود را وارد کنید
          alt="Your Profile"
          width={500} // عرض تصویر
          height={500} // ارتفاع تصویر
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
