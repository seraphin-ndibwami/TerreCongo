"use client";

import { TableInfoConcession } from "./tableInfoConcession";

const tableFoncierProps = [{
    name : "certificat d'enregistrement",
    image : "/images/certificatDenregistrement.png",
    href : "file.pdf",
},{
    name : "contract d'acquisition",
    image : "/images/contrat2.png",
    href : "file.pdf",
},{
    name : "fiche de demande",
    image : "/images/demande.png",
    href : "file.pdf",
}
]

export function TableFonciers() {

    return (
        <div className="text-sm flex flex-col gap-3">
            <TableInfoConcession
                    documentFoncier={tableFoncierProps}
                    typeConcession="concession foncière perpetuelle"
                    documentMencant = {["titre foncier"]}
            />
        </div>
    )

}