import EsportsEngagementPoll from "../components/EsportsEngagementPoll";
import InstagramPromo from "../components/InstagramPromo";
import WelcomeComp from "../components/WelcomeComp";
import Homemainimg from "../assets/homemainimg.jpg";
import { IonIcon } from "@ionic/react";

import {
  logoInstagram,
  logoFacebook,
  logoYoutube,
  logoLinkedin,
  mailOutline,
} from "ionicons/icons";
import { getCurrentYear } from "../tools/Year";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section style={{ height: "100%", overflow: "hidden" }}>
      <div
        style={{
          marginTop: "1rem",
          height: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          loading="lazy"
          src={Homemainimg}
          alt="Esports Background"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      </div>

      <WelcomeComp />
      <InstagramPromo />
      <EsportsEngagementPoll />

      <br />

      <Footer />
    </section>
  );
};

export default Home;
