// import ParticlesBackground from "../components/ParticlesBackground";

// export default function Home() {
//   return (
//     <>
//       {/* پس‌زمینه ذرات */}
//       <div className="absolute inset-0 z-0">
//         <ParticlesBackground />
//       </div>

//       {/* محتوای اصلی */}
//       <div className="relative z-10 text-white text-center p-10">
//         Hi
//       </div>
//     </>
//   );
// }
import Introduce from '../components/Introduce/page';
import ProfilePicture from "@/components/ProfilePicture";
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
        <ProfilePicture id="profile" />
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

