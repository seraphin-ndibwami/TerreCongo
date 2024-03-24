import Image from "next/image"
import Link from "next/link"

export function SegmentApropos() {


    const texte = `Terre congo est un registre foncier distribué, càd gerer et administrer par plusieurs
    services etatiques et civiles dont; le ministère des affaires fonciers, le services
    du cadastre, l'état civil, le gouvernorat. grace aux contract intelligent le registre
    est mise à jour au niveau de chaque service. les données sont enregistrer de manière à
    être immuable, sécursié et transparante.`

    return (
        <div id="apropos" className="bg-white w-full flex items-center justify-between text-black
            sm:h-[80vh] h-[60vh]
            px-8 gap-14
            xl:px-28
            sm:px-14">
            <div className="flex flex-col items-start gap-5 lg:w-1/3 sm:w-1/2">
                <h1 className="font-extrabold text-2xl">
                    Apropos de Terre congo
                </h1>
                <p className="text-sm">
                    {texte}
                </p>
                <Link href="/apropos"
                    className="bg-primary text-white rounded-full px-4 py-2
                    hover:bg-darck-primary hover:font-semibold transition">
                        comment ça marche
                </Link>
            </div>
            <Image
                src="/images/Rectangle-577-623.png"
                alt="apropos"
                className="hidden sm:block w-1/3 xl:w-1/3"
                width={577}
                height={623}
            />
        </div>
    )
}
