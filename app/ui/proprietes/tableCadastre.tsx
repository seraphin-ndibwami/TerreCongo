"use client";

import { TableInfoConcession } from "./tableInfoConcession";

const tableCasdatre = [{
    name : "travaux cadastrals",
    image : "/images/travaux.png",
    href : "file.pdf",
},{
    name : "procè verbal",
    image : "/images/contrat1.png",
    href : "file.pdf",
},
]

export function TableCadastre() {

    return (
        <div className="text-sm flex flex-col gap-3">
            <p className="">
                numero cadastrale : <span
                    className="px-2 py-1 text-xs 
                    rounded-sm bg-accent/45">
                    {123}
                </span>
            </p>
            <TableInfoConcession
                    documentFoncier={tableCasdatre}
            />
        </div>
    )

}