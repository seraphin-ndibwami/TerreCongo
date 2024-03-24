import { SegmentHome } from "@/app/(site)/segmentHome";
import { SegmentApropos } from "@/app/(site)/segementApropos";
import { SegmentDemo } from "@/app/(site)/segmentDemo";
import { Footer } from "@/app/(site)/footer";
import { SegmentReseau } from "@/app/(site)/segementReseau";
import { SegmentContact } from "@/app/(site)/segmentContact";

export default function Home() {
  return (
    <>
      <SegmentHome />
      <SegmentApropos />
      <SegmentDemo />
      <SegmentReseau />
      <SegmentContact />
      <Footer />
    </>
  );
}