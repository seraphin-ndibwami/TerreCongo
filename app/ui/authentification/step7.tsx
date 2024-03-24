import Image from 'next/image';
import Link from 'next/link';


export function Step7() {

    return (
        <div className="w-full flex flex-col gap-10 items-center">
            <Image src="/images/Frame@2x-355-227.png"
                width={355}
                height={197}
                alt="illustration home"
                className="shadow-lg w-full rounded-[20px] overflow-hidden"
            />
            <div>
                <p className='text-xs'>
                    vous avez fait un pas vers la sécurité et la transparence,
                    le service de la validation d&apos;identité poura valider votre 
                    identité enfin que vous pouisser jouire d&apos;un système foncièr 
                    completement transparent et sécurisé..
                </p>
            </div>
            <div className="flex flex-col w-full gap-5">

                <Link className="text-white hover:bg-darck-primary
                    border border-primary bg-primary text-sm font-semibold text-center
                    transition rounded-full p-2"
                    href="/#apropos"
                >
                    comprendre d&apos;avantage
                </Link>
            </div>
        </div>
    );
}
