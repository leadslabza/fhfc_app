import { AgeGroups } from "@/components/home/AgeGroups";
import { ClubStory } from "@/components/home/ClubStory";
import { Hero } from "@/components/home/Hero";
import { JoinClub } from "@/components/home/JoinClub";
import { MatchDays } from "@/components/home/MatchDays";
import { ShopPreview } from "@/components/home/ShopPreview";
import { Sponsors } from "@/components/home/Sponsors";
import { VisitUs } from "@/components/home/VisitUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClubStory />
      <AgeGroups />
      <MatchDays />
      <JoinClub />
      <ShopPreview />
      <Sponsors />
      <VisitUs />
    </>
  );
}
