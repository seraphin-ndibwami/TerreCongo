import { LoginForm } from "@/app/ui/authentification/LoginForm";

export default function Home() {
    return (
        <div className="w-full flex items-center justify-center h-full px-0 sm:px-8 md:px-14 lg:px-28 xl:px-56 ">
            <div className="w-full border-divider shadow-2xl h-full
                rounded-3xl backdrop-blur-md
                flex">
                <div className="hidden lg:flex flex-1 bg-divider -primary rounded-l-2xl">

                </div>
                <div className="flex-1 rounded-2xl lg:rounded-l-none">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}