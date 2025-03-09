import Image from 'next/image';
import Introduce from '../components/Introduce/page';
import ProfilePicture from '@/components/ProfilePicture';
import Introduce2 from "@/components/Introduce2/page";
import AboutMe from "../components/AboutMe/page";
import Services from "@/components/Services/Services"
import MySkills from '@/components/MySkills/MySkills';
import MyCertificate from "@/components/MyCertificate/My Certificate"
import ContactPage from '@/components/ContactPage/ContactPage';
export default function Home() {

  return (
    <>
        <Introduce id="introduce" />
        <ProfilePicture/>
        <Introduce2 id="introduce2" />
        <AboutMe id="about" />
        <Services id="services" />
        <MySkills id="skills" />
        <MyCertificate id="certificates"/>
        <ContactPage id="contact"/>
       
    </>
  );
}

