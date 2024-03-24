import { CarteConcession } from '@/app/ui/tableauDeBord/carteConcession';
import { Concession } from '@/app/ui/proprietes/concession';
import { TabConcession } from '@/app/ui/proprietes/tabConcession';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {

    
    if (params.id !== "1234878902q324542432") {
        notFound();
    }

    return (
        <>
            <h1 className="font-bold">
                proprietes Goma / kituku / kivu / n° : 23
            </h1>
            <div className='w-full flex flex-col gap-2'>
                <Concession
                    href={[
                        "/images/goma0.jpg",
                        "/images/goma1.jpeg",
                        "/images/goma2.jpeg",
                    ]}
                    dimesion_ariere="10 m"
                    dimesion_avant="10 m"
                    dimesion_droite="11 m"
                    dimesion_gauche="10 m"
                    adresse="Goma / kituku / kivu / n° : 23"
                    ancienPropeietaire={{
                        nom: "seraphin ndibwami",
                        adresse: "keyshero/bukama/n°: 23",
                        contact: {
                            mail: "seraphinndibwami@gmail.com",
                            numeroTelephone: "0999999999"
                        },
                        image: "/images/kabila.png"
                    }} 
                />
                <TabConcession />
            </div>
        </>
    );
}