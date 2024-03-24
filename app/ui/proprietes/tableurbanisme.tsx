"use client";

import { TableInfoConcession } from "./tableInfoConcession";

const tableUrbanismes = [{
    name : "constat de lieu",
    image : "/images/constat.png",
    href : "file.pdf",
},{
    name : "procè verbal",
    image : "/images/contrat1.png",
    href : "file.pdf",
},
]

export function TableUrbanisme() {

    return (
        <div className="text-sm flex flex-col gap-3">
            <p className="">
                superficie de construction : <span
                    className="px-2 py-1 text-xs 
                    rounded-sm bg-accent/45">
                    8m x _8m
                </span>
            </p>
            <TableInfoConcession
                typeConcession="residence privée"
                documentFoncier={tableUrbanismes}
            />
        </div>
    )

}