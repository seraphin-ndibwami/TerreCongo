import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/ui/components/buttons';

interface Step0Props {
    onNext: (step:number) => void;
}

export function Step0(props: Step0Props) {


    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        props.onNext(0);
    };

    return (
        <div className="w-full flex flex-col gap-10 items-center">
            <h1 className="font-bold w-full">
                Réjoignez Terre congo
            </h1>
            <Image src="/images/HomeForSale2x-355-197.png"
                width={355}
                height={197}
                alt="illustration home"
                className="shadow-lg w-full rounded-[20px] overflow-hidden"
            />
            <div>
                <p>
                    créer un compte et vous
                    pouriez vendre, acheter, acquerir, hypotheques une
                    concession en toute sécurité et transparence.
                </p>
            </div>
            <div className="flex flex-col w-full gap-5">
                <Button variant='primary' className='rounded-full' onClick={handleNext}>Démarer</Button>
                <Link className="bg-transparent text-black hover:bg-light-primary
                    border border-secondary-text text-sm font-semibold text-center
                    transition rounded-full p-2"
                    href="/connexion"
                >
                    j&apos;ai déjà un compte
                </Link>
            </div>
        </div>
    );
}
