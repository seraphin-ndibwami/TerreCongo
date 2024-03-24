"use client";
import Image from "next/image";
import { IoLocation } from "react-icons/io5";
import { ConcessionImage, SurfaceConcession } from "../tableauDeBord/carteConcession";
import Link from "next/link";

interface ConcessionProps {
    href: string[]
    dimesion_avant: string
    dimesion_ariere: string
    dimesion_gauche: string
    dimesion_droite: string
    adresse: string
    ancienPropeietaire: {
        nom: string
        adresse: string
        contact: {
            mail: string
            numeroTelephone: string
        }
        image: string
    }
}



export function Concession(props: ConcessionProps) {

    return (
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="group w-full sm:w-3/4">
                <ConcessionImage
                    className="rounded-sm"
                    href={props.href}
                    width={500}
                />
            </div>
            <div className="flex flex-row sm:flex-col flex-none  gap-4">
                <div className="flex flex-1 sm:flex-none flex-col gap-4">
                    <SurfaceConcession
                        className="text-xs w-full"
                        dimesion_avant={props.dimesion_avant}
                        dimesion_ariere={props.dimesion_ariere}
                        dimesion_gauche={props.dimesion_gauche}
                        dimesion_droite={props.dimesion_droite}
                    />
                    <div className="flex gap-3 ">
                        <IoLocation className="flex-none stroke-primary fill-primary" />
                        <p className="text-xs">
                            {props.adresse}
                        </p>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <h1 className="text-xs font-bold">
                        ancien proprietaire
                    </h1>
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-xs">
                                {props.ancienPropeietaire.nom}
                            </p>
                            <p className="text-xs ">
                                {props.ancienPropeietaire.adresse}
                            </p>

                            <Link href={`mailto:${props.ancienPropeietaire.contact.mail}`}
                                className="text-xs hover:text-primary">
                                {props.ancienPropeietaire.contact.mail}
                            </Link>
                            <Link href={`tel:+${props.ancienPropeietaire.contact.numeroTelephone}`}
                                className="text-xs  hover:text-primary">
                                {props.ancienPropeietaire.contact.numeroTelephone}
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}