import Marquee from "react-fast-marquee";
import { SponsorCard } from "./SponsorCard";
export const SponsorsSlider = () => {
  return (
    <Marquee pauseOnHover={true}>
      <SponsorCard />
      <SponsorCard />
      <SponsorCard />
      <SponsorCard />
      <SponsorCard />
      <SponsorCard />
    </Marquee>
  );
};
