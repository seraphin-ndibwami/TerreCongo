"use client";
import { Ref } from "react";
import Button from "./buttons";


interface videoModalpropos {
    divRef: Ref<HTMLDivElement>;
    videoRef: Ref<HTMLVideoElement>;
    takePicture: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    imageData: string;
    className: string
}

export function VideoModal({
    divRef,
    videoRef,
    takePicture,
    className,

}: videoModalpropos) {

    return (
        <div ref={divRef}
            className={className}>
            <div className="relative h-screen w-screen p-10 flex items-center justify-center">
                <video ref={videoRef} className="w-full h-full bg-light-primary rounded-2xl" />
                <div className="absolute bottom-20">
                    
                    <button onClick={takePicture}
                        className="flex items-center rounded-full p-2 
                            hover:scale-110
                            border border-white" >
                        <div className="h-6 w-6 rounded-full
                            flex items-center justify-center
                            bg-white text-white">
                            #
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}