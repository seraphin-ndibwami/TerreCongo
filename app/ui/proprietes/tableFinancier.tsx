"use client";

import { TableInfoConcession } from "./tableInfoConcession";

const tableFinencieres = [{
    name : "recut d'acquisiotions",
    image : "/images/RecuTaxes.png",
    href : "file.pdf",
},{
    name : "impots fonciers",
    image : "/images/RecuTaxes.png",
    href : "file.pdf",
}
]

export function TableFinanciere() {

    return (
        <div className="text-sm flex flex-col gap-3">
            <p className="">
                dernier prix de vente : <span
                    className="px-2 py-1 text-xs 
                    rounded-sm bg-accent/45">
                    15000 $
                </span>
            </p>
            <TableInfoConcession
                    documentFoncier={tableFinencieres}
            />
        </div>
    )

}