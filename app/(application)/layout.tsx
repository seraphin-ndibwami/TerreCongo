import { SideBard } from "../ui/tableauDeBord/SideBard";
import { TopRightUtils } from "../ui/tableauDeBord/topRightUtils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen  bg-slate-50">
        <SideBard  />
        <div className="relative w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 h-full flex flex-col
          overflow-y-scroll py-3 md:overflow-y-auto gap-5"
        > 
          <div className="pl-[190px] sm:pl-[200px]">
            <TopRightUtils />
          </div>
          {children}
      </div>
    </div>
  );  
}