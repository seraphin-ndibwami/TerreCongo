import { Logo } from "@/app/ui/site/logo";
import { TopRigthNav } from "@/app/ui/site/topRigthNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-special-background1 md:bg-special-background2">
      <div className="w-full shadow-md ">
        <header className="px-8 py-5 text-black flex items-center w-full justify-between
                xl:px-28
                sm:px-14">
          <Logo className="text-black" />
          <TopRigthNav className="text-black border-black rounded-full" />
        </header>
      </div>
      <div className="relative px-8 h-full overflow-y-scroll py-10 md:overflow-y-auto md:p-12
        ">
        {children}
      </div>
    </div>
  );
}