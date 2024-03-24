import Image from "next/image"

type PartenaireProps = {
    src: string;
    alt: string;
};

const Partenaire: React.FC<PartenaireProps> = ({
    src,
    alt,
}) => {
    return (
        <div className="min-w-[260px] max-w-[350px] flex p-4 flex-col flex-1 rounded-2xl
        gap-5 justify-center items-center shadow-cardPartenaire
        hover:shadow-2xl transition-shadow bg-white">
            <Image
                src={src}
                height={120}
                width={120}
                alt={alt}>
            </Image>
            <div className="text-xl font-medium text-center">
                {alt}
            </div>
            
        </div>);
}


export function SegmentReseau(){

    const Partenaires = [{
            src:"/images/Embleme-RDC-120.png",
            alt:"services du cadastre\n de Goma",
        },{
            src:"/images/Embleme-RDC-120.png",
            alt:"la societé civile\n de Goma",
        },{
            src:"/images/logo-Affaire-foncier-120.png",
            alt:"minister des affaires \n foncières",
        },{
            src:"/images/Embleme-RDC-120.png",
            alt:"bureau du gouveneur\n de Goma",
        },
    ]

    return(
        <div id="reseau" className="flex gap-14 flex-col w-full t 
            items-start">
            <h1 className="text-black font-extrabold text-2xl
                px-8
                xl:px-28
                sm:px-14">
                notre Reseau
            </h1>
            <div className="flex items-stretch pb-20 overflow-y-scroll w-full gap-20 justify-between
                px-8
                xl:px-28
                sm:px-14">
                {Partenaires.map((parten, i) => {
                   return(
                    <Partenaire
                        key={i}
                        src={parten.src}
                        alt={parten.alt}
                    />
                   ) 
                })}
            </div>
        </div>
    )
}