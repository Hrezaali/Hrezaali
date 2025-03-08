// components/ProfilePicture/ProfilePicture.js
import Image from 'next/image';

const ProfilePicture = () => {
  return (
    <div className="relative flex justify-center items-center mt-4 -z-3">
      <Image
        src="/Image/PortfolioPicture.png" // مسیر تصویر خود را وارد کنید
        alt="Your Profile"
        width={500} // عرض تصویر
        height={500} // ارتفاع تصویر
        
      />
    </div>
  );
};

export default ProfilePicture;
