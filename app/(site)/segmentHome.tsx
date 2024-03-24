import { Logo } from "@/app/ui/site/logo";
import { TopRigthNav } from "@/app/ui/site/topRigthNav";
import Link from "next/link";

export function SegmentHome() {
    return (
        <div className={`
            w-full
            h-screen
            bg-cover 
            bg-home-sm
            md:bg-home-xl
            relative
        `} id="acceuil">
            <header className="px-8 py-5 flex items-center w-full justify-between
                xl:px-28
                sm:px-14">
                <Logo />
                <TopRigthNav  />
            </header>
            <div className="absolute left-8 w-4/5 bottom-10 xl:bottom-36 sm:left-14 xl:left-28 xl:w-1/2
                flex flex-col gap-5 justify-center">
                <div className="flex gap-2 items-center">
                    <div className="h-3 w-4 rounded-full bg-white"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                </div>
                <div className="text-4xl lg:text-7xl  font-bold text-white">
                    transparence dans le secteur foncier
                </div>
                <div className="text-white">
                    Grace à un registre distribué entre plusieurs autorités civil et étatiques,
                    nous garantissons la sécurité la transapance et l&apos;immuablité de l&apos;enregistrement
                    d&apos;un titre foncier et des  transactions foncières.
                </div>
                <div>
                    <Link
                        className="px-6 py-2 text-sm font-semibold border border-white
                        rounded-full text-black bg-white
                        hover:bg-primary hover:border-primary hover:text-white transition"
                        href="/enregistrement"
                    >
                        <span>en savoir plus</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}