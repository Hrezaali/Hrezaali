import Image from 'next/image';
import Introduce from '../components/Introduce/page';
import Introduce2 from "@/components/Introduce2/page";
import AboutMe from "../components/AboutMe/page";
import Services from "@/components/Services/Services"
import MySkills from '@/components/MySkills/MySkills';
import MyCertificate from "@/components/MyCertificate/My Certificate"
import ContactPage from '@/components/ContactPage/ContactPage';
export default function Home() {

  return (
    <>
      <div>
        <Introduce id="introduce" />
        </div>
          <div className="relative flex justify-center items-center mt-4 -z-3">
                <Image
                  src="/Image/PortfolioPicture.png" // مسیر تصویر خود را وارد کنید
                  alt="Your Profile"
                  width={500} // عرض تصویر
                  height={500} // ارتفاع تصویر
                  
                />
         </div>
        <div>
        <Introduce2 id="introduce2" />
        <AboutMe id="about" />
        <Services id="services" />
        <MySkills id="skills" />
        <MyCertificate id="certificates"/>
        <ContactPage id="contact"/>
        </div>
    </>
  );
}

