"use client";

import clsx from "clsx";
import { useState } from "react";
import { TableFonciers } from "./tablefoncieres";
import { TableCadastre } from "./tableCadastre";
import { TableUrbanisme } from "./tableurbanisme";
import { TableFinanciere } from "./tableFinancier";


export function TabConcession() {

    const [indexTable, setIndexTable] = useState(0);

    const tables = [
        "foncières",
        "cadastrales",
        "urbanisme",
        "financières",
        "historiques",
    ]

    return (
        
        <div className="flex flex-col gap-5 py-3">
            <h1 className="font-bold">
                les infromations
            </h1>
            <div className="w-full">
                <div className="flex w-full overflow-y-scroll">
                    {
                        tables.map((label, index) => {
                            return (
                                <button key={index} onClick={() => setIndexTable(index)}
                                    className="text-xs lg:text-sm px-2 sm:px-3
                                    flex flex-col gap-2 items-center"
                                >
                                    <span>{label}</span>
                                    <p
                                        className={
                                            clsx(`w-[120%] h-1.5 rounded-t-full 
                                        text-black text-sm`, {
                                                "bg-primary": index === indexTable,
                                            })}>
                                    </p>
                                </button>
                            )
                        })
                    }
                </div>
                <hr className='w-full border-divider border-t' />
            </div>
            {
                indexTable == 0 && 
                <TableFonciers />
            }
            {
                indexTable == 1 && 
                <TableCadastre />
            }
            {
                indexTable == 2 && 
                <TableUrbanisme />
            }
            {
                indexTable == 3 && 
                <TableFinanciere />
            }
        </div>
    )
}