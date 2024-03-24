"use client";
import Button from "../components/buttons";
import { TextField } from "../components/textField";

export function LoginForm() {

    return (

        <form action="" className="relative h-full flex justify-center items-center">
            <div className="flex flex-col w-full max-w-[400px] px-8 py-14 justify-between h-full">
                <div className="flex flex-col w-ful py-5 gap-10">
                    <h1 className="text-2xl font-bold">
                        se connecter
                    </h1>
                    <div className="flex flex-col gap-5 w-full">
                        <TextField id="email" name="email"
                            type="email"
                            label="adresse email"
                            placeholder="exemple@domain.com"
                        />
                        <TextField id="password" name="password"
                            label="mot de passe"
                            type="password"
                            placeholder="mot de passe"
                        />
                    </div>
                    <Button className="rounded-md">
                        connexion
                    </Button>
                </div>
                <p className="w=full text-xs text-center
                    font-bold text-secondary-text">
                    TerreCongo@2024</p>
            </div>
        </form>
    )
}