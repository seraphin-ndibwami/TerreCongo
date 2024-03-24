"use client"

import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import Button from "@/app/ui/components/buttons";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface navLinkPropos {
    href: string,
    className ?: string,
    label: string,
    onClick : () => void;
}

function NavLink({ className, href, label , onClick}: navLinkPropos) {
    return (
        <Link onClick={onClick}
            href={href}
            className={`${label == "acceuil" ? "text-primary font-semibold" : className == undefined ? "text-white" : className}
            hover:text-primary hover:font-semibold px-2 py-2 text-sm transition`}
        >
            {label}
        </Link>
    )
}

export function TopRigthNav({className} : {className?: string}) {
    const navigation = [
        { ref: '/#acceuil', label: "acceuil" },
        { ref: '/#apropos', label: "apropos" },
        { ref: '/#demo', label: "demo" },
        { ref: '/#reseau', label: "réseau" },
        { ref: '/#contact', label: "contact" },
    ]

    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);

    const handlerClick = () =>{
        setToggle2(false)
        setToggle(!toggle);
    }

    const handlerClick2 = () => {
        setToggle(false)
        setToggle2(!toggle2)
    }

    return (
        <div className={
            twMerge("z-10 flex flex-row-reverse sm:flex-row items-center flex-1 gap-5 sm:gap-0 sm:justify-end"
            ,className)}>
            <div className="flex sm:hidden">
                <Button size="sm" variant="transparent" className={className + " rounded-full"}
                    onClick={handlerClick}>
                    menu 
                </Button>
            </div>
            <div className={`${toggle ? `backdrop-blur-lg flex absolute flex-col top-16 items-end 
                px-4 py-2 shadow-2xl  rounded-xl` : "hidden items-center sm:flex"}
                sm:flex sm:relative sm:flex-row sm:top-auto xl:gap-6 flex-1 justify-center `}>
                {navigation.map((link) => {
                    return (
                        <NavLink onClick={() => setToggle2(false)} className={className} key={link.label} href={link.ref} label={link.label} />
                    );
                })}
            </div>
            <div className="flex items-center">
                <FaUser onClick={handlerClick2} 
                    className={`${toggle2 ? "border-primary border-2" : `${ className ? "border-black" : "border-white"}`} 
                    hover:scale-105 cursor-pointer border rounded-full p-1 lg:hidden`}
                    color={`${ toggle2 ? "rgb(244, 67, 54)" :`${ className ? "black" : "white"}`}`} 
                    size={24} />
                <div className={`${toggle2 ? `rounded-lg shadow-2xl p-5 backdrop-blur-lg flex absolute flex-col top-16  right-3 sm:right-14`  
                : 'hidden' } 
                lg:flex lg:relative lg:top-auto lg:flex-row gap-5 w-[300] items-center`}>
                    <Link href="/enregistrement" onClick={() => setToggle2(false)}
                        className={clsx(`px-6 py-2 text-sm border 
                        rounded-full bg-transparent font-semibold
                        hover:bg-primary hover:border-primary transition`
                        , {
                            "border-white text-white ": !className,
                            "border-black text-black ": className
                        })}
                    >
                        s&apos;enregistrer
                    </Link>
                    <Link href="connexion" onClick={() => setToggle2(false)}
                        className={clsx(`px-6 py-2 text-sm font-semibold border
                        rounded-full 
                        hover:bg-primary hover:border-primary transition`
                        , {
                            "border-white text-black  bg-white ": !className,
                            "border-black text-white bg-black ": className
                        })}
                    >
                        se connecter
                    </Link>
                </div>
            </div>
        </div>
    )
}