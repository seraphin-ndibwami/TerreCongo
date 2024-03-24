import { FaRegPlayCircle } from "react-icons/fa"

export function SegmentDemo(){
    return(
        <div id="demo" className="text-black px-8 xl:px-auto h-screen flex items-center justify-center">
            <div id="video" className="flex gap-5 flex-col items-center border-2 justify-center h-3/4 xl:w-3/4 w-full rounded-3xl">
                <FaRegPlayCircle className="size-16 xl:size-20"/>
                <p className="font-bold text=1xl md:text-2xl">Demo</p>
            </div>
        </div>
    )
}