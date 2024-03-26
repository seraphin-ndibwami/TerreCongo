"use client";

import { IoMdArrowDropdown } from "react-icons/io";
import Button from "../components/buttons";
import React, { useState } from "react";
import { TextField } from "../components/textField";
import { Popup } from "../components/popup";
import clsx from "clsx";

export function ActionConcession() {

    const [popuVente, setPopupVente] = useState(false);
    const [dropActions, setdropActions] = useState(false);

    const handlerVente = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPopupVente(true);
    }

    const handlerActions = (e: React.MouseEvent<HTMLButtonElement>) => {
        setdropActions(!dropActions)
    }

    return (
        <div className="flex text-xs gap-2">
            <Button className="p-2 rounded-sm"
                onClick={handlerVente}>
                vendre la proprieté
            </Button>
            {
                popuVente &&
                <Popup>
                    <div className="bg-white shadow-xl
                        rounded-lg w-fit p-6">
                        <form action="" method="post"
                            className="flex flex-col gap-6">
                            <TextField
                                required
                                label="prix de vente"
                                id="montant"
                                name="montant"
                                placeholder="prix de vente"
                            />
                            <div className="w-full text-xs flex justify-between">
                                <Button className="bg-white 
                                    text-black border hover:bg-transparent"
                                     onClick={() => setPopupVente(false)}
                                    type="reset">
                                    annuler
                                </Button>
                                <Button type="submit">
                                    valider
                                </Button>
                            </div>
                        </form>
                    </div>
                </Popup>
            }
            <Button className="relative flex
                hover:bg-transparent
                bg-transparente border text-black
                items-center px-2 gap-2"
                onClick={handlerActions}>
                <span>autres actions</span>
                <IoMdArrowDropdown
                    className= {clsx("size-4 transition-[500] fill-black",{
                        "transform rotate-[-90deg]":dropActions,
                    })}
                />
                {dropActions &&
                    <div className="absolute flex z-10 top-[120%]
                        bg-white shadow-xl flex-col rounded-md
                        p-4 gap-4 items-end text-xs w-max
                        right-0">
                        <div className="hover:scale-110 transition-[500]
                            ">
                            hypotequer
                        </div>
                        <div className="hover:scale-110 transition-[500]">
                            mettre en gage
                        </div>
                        <div className="hover:scale-110">
                            leguer a un heritier
                            </div>
                    </div>
                }
            </Button>
        </div>
    )

}