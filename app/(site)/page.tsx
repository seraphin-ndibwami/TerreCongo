import { SegmentHome } from "@/app/(site)/segmentHome";
import { SegmentApropos } from "@/app/(site)/segementApropos";
import { SegmentDemo } from "@/app/(site)/segmentDemo";
import { SegmentReseau } from "@/app/(site)/segementReseau";
import { SegmentContact } from "@/app/(site)/segmentContact";
import { Footer } from "@/app/(site)/footer";


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