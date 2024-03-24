import { MultiStepForm } from "@/app/ui/authentification/MultiSeptFrom";


export default function Home() {
    return (
        <div className="flex justify-center gap-10 sm:px-28 items-start">
            {/* <div className="hidden xl:flex w-1/2 aspect-square bg-white
            rounded-2xl shadow-xl"></div> */}
            <MultiStepForm />
        </div>
    );
}