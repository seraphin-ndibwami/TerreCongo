"use client";

import Image from "next/image";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

export type document = {
    name: string
    image: string
    href: string
}

interface tableInfoConcessionProps {
    typeConcession ?: string
    documentFoncier: document[]
    documentMencant ?: string[]
}

export function TableInfoConcession({
    typeConcession,
    documentFoncier,
    documentMencant
}: tableInfoConcessionProps) {

    return (
        <>
            { typeConcession &&
            <p className="">
                type : <span
                    className="px-2 py-1 text-xs 
                    rounded-sm bg-accent/45">
                    {typeConcession}
                </span>
            </p>
            }
            <div className="flex flex-col gap-3">
                <p className="font-medium">
                    document relatifs
                </p>
                <div className="flex w-full gap-8 flex-wrap">
                    {
                        documentFoncier.map((doc, index) => {
                            return (
                                <div key={index} className="flex flex-col center 
                                bg-white shadow-md w-full sm:w-[200px] overflow-hidden
                                rounded-xl group relative">
                                    <div className="relative flex items-start justify-start w-full sm:w-[200px] aspect-[3/2]">
                                        <Image
                                            alt={doc.name}
                                            src={doc.image}
                                            width={1500}
                                            height={1500}
                                            className="
                                            w-full 
                                            h-full 
                                            object-cover
                                            object-top
                                            overflow-hidden
                                            
                                        "
                                        />
                                    </div>
                                    <span className="p-4 sm:p-2">
                                        {doc.name}
                                    </span>
                                    
                                    <Link target="_blank" href={`/fiels/${doc.href}`}
                                        className="sm:hidden group-hover:block transition
                                        absolute z-10 right-0 bg-black/50 text-white 
                                        p-1 sm:p-2 
                                        rounded-sm backdrop-blur-lg"
                                        >
                                        <RxExternalLink 
                                        className="stroke-white
                                            fill-white size-5 
                                            hover:scale-110 transition" />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            { documentMencant &&
            <div className="flex items gap-2">
                <span className="font-medium">
                    document menquants :
                </span>
                <div className="flex gap-1">
                    {
                        documentMencant.map((doc, index)=>{
                            return (
                                <span key={index}
                                    className="px-2 py-1 text-xs 
                                    rounded-sm bg-light-primary">
                                    {doc}
                            </span>
                            )
                        })
                    }
                </div>
            </div>
            }
        </>
    )

}