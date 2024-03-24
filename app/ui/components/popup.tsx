"use client";

import { createPortal } from "react-dom";

export function Popup(
    { children }: { children: React.ReactNode }
) {

    const root = document.body

    return (
        createPortal(
            <div className="text-sm absolute top-0 bg-black/50
                w-screen  h-screen z-20 
                flex items-center justify-center">
                {children}
            </div>
            , root)
    )
}