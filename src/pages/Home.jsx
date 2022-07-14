import React from "react";
import PublicLayout from "../components/Layout/PublicLayout";
import BannerSlider from "../sections/BannerSlider";
import Expertise from "../sections/Expertise";
import OurStory from "../sections/OurStory";
import PortFolios from "../sections/PortFolios";
import Quote from "../sections/Quote";
import TeamMembers from "../sections/TeamMembers";
import Testimonials from "../sections/Testimonials";
import WatchOurStory from "../sections/WatchOurStory";

export default function Home() {
  return (
    <>
      <PublicLayout>
        <BannerSlider />
        <OurStory />
        <WatchOurStory />
        <Expertise />
        <TeamMembers />
        <PortFolios />
        <Quote />
        <Testimonials />
      </PublicLayout>
    </>
  );
}
