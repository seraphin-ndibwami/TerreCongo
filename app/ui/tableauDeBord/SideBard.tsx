"use client";

import {
    IoAddCircle,
    IoExit,
    IoLogOut,
    IoMenu,
} from "react-icons/io5";
import NavLinks from "./navLinks";
import Button from "../components/buttons";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { Popup } from "../components/popup";



export function SideBard() {

    const [tooglelogout, setTooglelogout] = useState<boolean>(false) 
    
    const handleLogout = (event : React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        setTooglelogout(!tooglelogout)
    }


    const [toogleView, setToogleView] = useState(false)
    const [toogleDisplay, setToogleDisplay] = useState(false)

    return (
        <div className={clsx(`absolute z-10 sm:relative 
                flex flex-col sm:h-full 
                flex-none justify-between`, {
                "sm:w-16 md:w-60 ": !toogleView,
                "sm:w-16 ": toogleView,
            }, {
                "w-fit h-fit sm:w-auto sm:h-full": !toogleDisplay,
                "h-full w-full bg-black/50 pr-20 sm:w-auto sm:h-full sm:bg-white sm:pr-0": toogleDisplay
            })}>
            <div className={clsx(`z-10 w-full pl-4 sm:bg-white
                    sm:relative flex gap-2 py-3`, {
                    "bg-white": toogleDisplay,
                })}>
                <Button className={clsx(`bg-transparente hidden md:block
                        absolute z-10 hover:shadow-2xl
                        px-3 hover:bg-white`, {
                        "right-1": !toogleView,
                        "right-[-70%] bg-white shadow-md rounded-sm": toogleView,
                    })}
                    onClick={() => {setToogleDisplay(false); setToogleView(!toogleView)}}>
                    <IoMenu className="stroke-black" />
                </Button>
                <Button className={clsx(`bg-transparent rounded-sm sm:hidden block
                    z-10 
                    px-0 hover:bg-transparent`)}
                    onClick={() => {setToogleView(false); setToogleDisplay(!toogleDisplay);}}>
                    <IoMenu className="stroke-black" />
                </Button>
                <div className="flex w-full font-bold gap-1">
                    <h1 className="bg-primary px-2 py-0.5 text-xl rounded-sm 
                    text-white
                    shadow hover:scale-105">T</h1>
                    <h1 className={clsx("pt-1.5", {
                        " sm:hidden md:hidden": toogleView,
                        "bloblockck sm:hidden md:block": !toogleView
                    })}>erre congo</h1>
                </div>
            </div>
            <div className={clsx(`h-full bg-white
                    sm:flex flex-col justify-between`, {
                    "w-full sm:w-16 md:w-full": !toogleView,
                    "w-full sm:z-16 md:w-16": toogleView,
                }, {
                    "hidden": !toogleDisplay,
                    "flex": toogleDisplay,
                })
            }>
                <div className="w-full h-[90%]
                    flex flex-col justify-between">
                    <NavLinks hanlerClick={() => setToogleDisplay(false)} userCatergorie="concessionnaire" view={toogleView} />
                    <Button onClick={handleLogout}
                        className="bg-transpatent hover:bg-transparent
                        rounded-md shadow-md px-0  mx-2" >
                        <div className="flex gap-2 w-full
                            text-black justify-center
                            items-center text-xs">
                            <IoLogOut className="size-5" />
                            <p className={clsx("", {
                                "block sm:hidden md:hidden": toogleView,
                                "block sm:hidden md:block": !toogleView
                            })}>se deconnecter</p>
                        </div>
                        {
                            tooglelogout && 
                            <Popup>
                                <div className="bg-white w-[360px]
                                    rounded-xl shadow-md relative">
                                        <p className="text-xs md:text-sm p-6 pt-10">
                                            voulez vous vraiment vous deconnecter ? 
                                            pour votre nouvelle conncexion vous fournirrez votre mot
                                            de passe et votre adresse email 
                                        </p>
                                        <IoAddCircle 
                                            className="transform rotate-45 hover:scale-110 *:first-letter:
                                            absolute  top-2 right-2 transition
                                            stroke-primary size-6 fill-primary" />
                                        <div className=" border-t 
                                            flex justify-between
                                            p-4">
                                            <Link className="py-2 flex-1 px-4
                                                max-w-[100px] hover:bg-light-primary transition
                                                text-center rounded-sm border"
                                                href="/connexion">
                                                oui
                                            </Link>

                                            <Button className="rounded-sm 
                                                max-w-[100px] flex-1">
                                                non
                                            </Button>

                                        </div>
                                </div>
                            </Popup>
                        }
                    </Button>
                </div>
                <Link href="/#apropos"
                    className="w-full text-center text-white
                        bg-primary p-2
                        flex items-center justify-center gap-1">
                    <span>@</span>
                    <span className={clsx("text-xs", {
                        "block sm:hidden md:hidden": toogleView,
                        "block sm:hidden md:block": !toogleView
                    })}>Terrecongo2024</span>
                </Link>
            </div>
        </div>
    )
}