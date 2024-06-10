"use client"
import Footer from "./componants/Footer";
import Gallary from "./componants/Gallary";
import Landing from "./componants/Landing";
import Nearst from "./componants/Nearst";
import OurServices from "./componants/OurServices";
import Restaurant from "./componants/Restaurant";
import Welcome from "./componants/Wlcome";

export default function Home() {
  return (
    <div>
      <Landing />
      <Welcome />
      <Restaurant />
      <OurServices />
      <Nearst />
      <Gallary />
      <Footer />
    </div>
  );
}
