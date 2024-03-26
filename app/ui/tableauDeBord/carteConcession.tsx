"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { IoLocation, IoSquare } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

interface CarteConcessionProps {
    href: string[];
    dimesion_avant: string;
    dimesion_ariere: string;
    dimesion_gauche: string;
    dimesion_droite: string;
    adresse: string;
}

interface surfaceConcessionprops {
    dimesion_avant: string;
    dimesion_ariere: string;
    dimesion_gauche: string;
    dimesion_droite: string;
    className: string;
}

interface ConcessionImagePros {
    href: string[];
    className ?: string;
}

export function ConcessionImage({
    href,
    className,
}: ConcessionImagePros) {

    const [imageView, SetImageView] = useState(0)

    const handlerClick = (e: React.MouseEvent<SVGElement>, tag: number) => {

        e.stopPropagation();

        if ((imageView + tag) === href.length) {
            SetImageView(0)
        } else {
            SetImageView(Math.abs(imageView + tag))
        }

    }

    return (
        <div className={clsx(`relative aspect-video flex 
        items-end justify-center`, className)}>
            <Image className={twMerge(`
                w-full 
                h-full 
                object-cover
                overflow-hidden`, className)
            }
                width={1000}
                height={1000}
                src={href[imageView]}
                alt="imageParcelle"
            />
            {
                (href.length > 1)
                && 
                <div className="absolute w-[90%] flex 
                    flex-col h-[55%] items-center justify-between">
                    <div className="w-full flex items-center justify-between">
                        <IoMdArrowDropleftCircle onClick={(event) => handlerClick(event, -1)}
                            className="size-8 fill-white/50
                            sm:fill-transparent 
                            group-hover:fill-white/50 transition
                        hover:scale-125" />
                        <IoMdArrowDroprightCircle onClick={(event) => handlerClick(event, 1)}
                            className="size-8 fill-white/50
                            sm:fill-transparent 
                            group-hover:fill-white/50 transition
                            hover:scale-125"/>
                    </div>
                    <div className="flex gap-4 p-2">
                        {
                            href.map((_, index) => (
                                <div key={index}
                                    className={clsx(`w-2 h-2 rounded-full`, {
                                        "bg-white": imageView === index,
                                        "bg-white/50": imageView !== index

                                    })}
                                >
                                </div>
                            ))
                         }
                    </div>
                </div>}
        </div>
    )
}

export function SurfaceConcession({

    dimesion_avant,
    dimesion_ariere,
    dimesion_gauche,
    dimesion_droite,
    className,

}: surfaceConcessionprops) {

    let surface = [
        `côté 1 : ${dimesion_avant}, côté 2 : ${dimesion_ariere}`,
        `côté 3 : ${dimesion_droite}, côté 4 : ${dimesion_gauche}`
    ]

    if (dimesion_ariere === dimesion_avant
        && dimesion_droite === dimesion_gauche) {
        surface = [
            `largeur : ${dimesion_avant <= dimesion_droite ? dimesion_avant : dimesion_droite}`,
            `longeur : ${dimesion_avant > dimesion_droite ? dimesion_avant : dimesion_droite}`
        ]
    }

    return (
        <div className={twMerge("flex gap-4", className)}>
            <IoSquare className="mt-1 flex-none stroke-primary fill-primary" />
            <div className="flex flex-col gap-1">
                <p>{surface[0]}</p>
                <p>{surface[1]}</p>
            </div>
        </div>
    )
}


export function CarteConcession({
    href,
    dimesion_avant,
    dimesion_ariere,
    dimesion_gauche,
    dimesion_droite,
    adresse,
}: CarteConcessionProps) {


    return (
        <div className="flex flex-col max-w-[300px] group
            bg-white rounded-xl shadow-md
            hover:shadow-2xl transition">
            <ConcessionImage
                className="rounded-t-xl w-[300px]"
                href={href}
            />
            <div className="flex flex-col gap-3 p-5">
                <SurfaceConcession
                    className="text-sm"
                    dimesion_avant={dimesion_avant}
                    dimesion_ariere={dimesion_ariere}
                    dimesion_gauche={dimesion_gauche}
                    dimesion_droite={dimesion_droite}
                />
                <div className="flex gap-4">
                    <IoLocation className="stroke-primary fill-primary" />
                    <p className="text-sm">
                        {adresse}
                    </p>
                </div>
            </div>
        </div>
    )
}