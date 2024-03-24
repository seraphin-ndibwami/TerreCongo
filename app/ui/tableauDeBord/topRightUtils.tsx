"use client"

import Image from "next/image"
import { IoNotifications, IoSearch } from "react-icons/io5"
import { TextField } from "../components/textField"

export function TopRightUtils() {

    return (
        <div className="flex items-center gap-5 md:gap-20 justify-between">  
            <TextField type="search" id="search" name="search"
                placeholder="recherche"
                className="h-8 pl-10  max-w-[400px] min-w-[50px] "
                icon={<IoSearch className="absolute z-[5]
                    left-3 top-2" />}
            />  
            <div className="flex items-center gap-5">
                <IoNotifications />
                <div className="relative w-[32px] aspect-square">
                    <Image className="
                            w-full max-w-[100px]
                            h-full max-h-[100px]
                            object-cover
                            overflow-hidden
                        "
                        height={100}
                        width={100}
                        alt="profle"
                        src="/images/Avatar.png"
                    />
                </div>
            </div>

        </div>
    )
}