import { MdOutlineEmail, MdPhoneEnabled } from "react-icons/md";
import { ControlContactForm } from "@/app/ui/site/controlContactForm";
import Button from "../ui/components/buttons";

export function SegmentContact() {

    function generateHR(count: number, v = false): JSX.Element[] {
        const hrs: JSX.Element[] = [];
        if (!v) {
            for (let i = 0; i < count; i++) {
                hrs.push(<hr key={i} className="w-full border-[#efefef] border-t-" />);
            }
            return hrs;
        }
        for (let i = 0; i < count; i++) {
            hrs.push(<hr key={i} className="h-full border-[#efefef] border-l-2" />);
        }
        return hrs;
    }

    return (
        <div id="contact" className="text-black flex items-center justify-center 
            px-8
            min-h-screen
            mt-20 mb-20 lg:m-0
            xl:px-28
            sm:px-14">
            <div className="hidden min-h-screen   lg:flex lg:h-[80vh] w-1/2 bg-radial-gray
                border-2 border-[#efefef] rounded-l-3xl border-r-0
                relative overflow-hidden items-center">
                <div className="flex z-10 flex-col justify-between px-20 items-center h-[60vh]">
                    <div className="flex flex-col gap-20">
                        <h1 className="text-2xl font-extrabold">
                            nous contacter
                        </h1>
                        <p>
                            Pour toutes vos quetions, vos sugestions concernant terre congo
                            la technologie blockchain que nous utilisons pour mettre en placele
                            registre distibué pour enregistrer le titres et tranactions foncières.
                            nous serons ravis de partager avec vous et ainsi faire du secteur foncier,
                            un secteur transparant et sans risque.
                        </p>
                        <div className="flex flex-col gap-8 font-semibold text-secondary-text">
                            <div className="flex gap-10 items-center">
                                <MdOutlineEmail size={24} />
                                <p>terrecongogoma@gmail.com</p>
                            </div>
                            <div className="flex gap-10 items-start xl:items-center">
                                <MdPhoneEnabled size={24} />
                                <div className="flex flex-col xl:flex-row gap-5">
                                    <span className="block">+243 972 345 324</span>
                                    <span className="block">+243 850 371 023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="font-medium text-secondary-text">terrecongoGoma @2024</p>
                </div>
                <div className="absolute w-full h-full flex flex-col justify-evenly">
                    {generateHR(6)}
                </div>
                <div className="absolute flex w-full h-full justify-evenly">
                    {generateHR(4, true)}
                </div>
            </div>
            <div className="py-10 min-h-screen lg:h-[80vh] w-full md:w-2/3 lg:w-1/2  rounded-3xl lg:rounded-l-none border-2 lg:border-l-0 border-[#efefef]
                justify-center flex flex-col gap-14 items-start px-8 md:px-12 xl:px-28">
                <h1 className="block lg:hidden text-2xl font-extrabold">
                    nous contacter
                </h1>
                <form action="" method="post" className="flex flex-col w-full gap-14 justify-between items-end">
                    <div className="w-full flex flex-col gap-6">
                        <ControlContactForm />
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium">message</label>
                            <textarea required className="min-w-[180px] 
                                border-2 border-divider
                                rounded-md w-full p-2 focus:outline-none 
                                focus:border-black transition text-sm"
                                name="message" id="message" rows={5}></textarea>
                        </div>
                    </div>
                    <Button variant="primary" round="rounded-lg" type="submit" >envoyer</Button>
                </form>
            </div>
        </div>
    )
}