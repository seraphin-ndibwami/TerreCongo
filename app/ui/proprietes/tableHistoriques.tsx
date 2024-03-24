"use client";

export type Concessionnaires = {

    id: string;
    nomCompter: string;
    contact: {
        email: string
        tel: string
    }
    adress: string

}


export type transactions = {
    type: string
    date: string
    expediteur:Concessionnaires
    recepteur: Concessionnaires
}

type TableHistoriquesProps = {
    historiques: transactions[]
}

function TableInfoHistoriques({
    historiques,
}: TableHistoriquesProps) {

    return (
        <>
        </>
    )
}

const Allhistoriques = [
    {
        type: "vente/achat",
        date: "12 fevier 2023",
        expediteur: {

            id: "1",
            nomCompter: "seraphin ndibwami",
            contact: {
                email: "seraphindibwami@gmail.com",
                tel: "243 972345324"
            },
            adress: "keyshero/bukama/n°: 23"
        
        },
        recepteur: {

            id: "1",
            nomCompter: "basusa ndbs",
            contact: {
                email: "basusa@gmail.com",
                tel: "243 850381023"
            },
            adress: "keyshero/bukama/n°: 23"
        
        },
    },
    {
        type: "vente/achat",
        date: "12 fevier 2023",
        expediteur: {

            id: "1",
            nomCompter: "seraphin ndibwami",
            contact: {
                email: "seraphindibwami@gmail.com",
                tel: "243 972345324"
            },
            adress: "keyshero/bukama/n°: 23"
        
        },
        recepteur: {

            id: "1",
            nomCompter: "basusa ndbs",
            contact: {
                email: "basusa@gmail.com",
                tel: "243 850381023"
            },
            adress: "keyshero/bukama/n°: 23"
        
        }
    },
    {
        type: "acquisition",
        date: "12 fevier 2023",
        expediteur: {

            id: "1",
            nomCompter: "seraphin ndibwami",
            contact: {
                email: "seraphindibwami@gmail.com",
                tel: "243 972345324"
            },
            adress: "keyshero/bukama/n°: 23"
        
        },
        recepteur: {

            id: "1",
            nomCompter: "basusa ndbs",
            contact: {
                email: "basusa@gmail.com",
                tel: "243 850381023"
            },
            adress: "keyshero/bukama/n°: 23"
        
        }
    }
]

export function TableHistoriques() {

    return (
        <div className="w-full max-w-[90vh] 
        overflow-x-scroll">
            <div className="flex flex-col">
                {
                    Allhistoriques.map((h, index) => {
                        return (
                            <div key={index}>
                                <div className="p-4 rounded-full bg-light-primary">
                                    {index}
                                    <TableInfoHistoriques historiques={Allhistoriques} />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )

}