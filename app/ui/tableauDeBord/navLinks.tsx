'use client';

import {
    IoGrid,
    IoBusiness,
    IoPerson,
    IoCash,
    IoPeople,
    IoSwapHorizontal,
    IoMap,
    IoNewspaper,
    IoSettings,
} from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = {
    concessionnaire: [{
        label: 'acceuil',
        href: '/acceuil',
        icon: IoGrid
    }, {
        label: 'mes prorpiétés',
        href: '/proprietes',
        icon: IoBusiness,
    }, {
        label: 'plan cadastral',
        href: '/planCadastral',
        icon: IoMap,
    }],
    GestionnaireDindentite: [{
        label: 'acceuil',
        href: '/acceuil',
        icon: IoGrid
    }, {
        label: 'concessionnaires',
        href: '/concessionnaires',
        icon: IoPeople,
    }, {
        label: 'candidatures',
        href: '/candidatures',
        icon: IoNewspaper,
    }],
    banque: [{
        label: 'acceuil',
        href: '/acceuil',
        icon: IoGrid
    }, {
        label: 'concessionnaires',
        href: '/concessionnaires',
        icon: IoPeople,
    }, {
        label: 'hypothèques',
        href: '/hypotheques',
        icon: IoCash,
    }],
    foncier: [{
        label: 'acceuil',
        href: '/acceuil',
        icon: IoGrid
    }, {
        label: 'concessionnaires',
        href: '/concessionnaires',
        icon: IoPeople,
    }, {
        label: 'concessions',
        href: '/concessions',
        icon: IoBusiness,
    }, {
        label: 'transactions',
        href: '/transactions',
        icon: IoSwapHorizontal,
    },{
        label: 'lotissement',
        href: '/lotissement',
        icon: IoMap,
    }, {
        label: 'plan cadastral',
        href: '/planCadastral',
        icon: IoMap,
    } ]
};


interface NavLinksProps {
    userCatergorie: "concessionnaire" | "GestionnaireDindentite" | "banque" | "foncier";
    view: boolean,
    hanlerClick : () => void
}

export default function NavLinks({
    userCatergorie,
    view,
    hanlerClick,
}: NavLinksProps) {

    const pathName = usePathname();

    return (
        <div>
            {links[userCatergorie].map((link, index) => {
                const LinkIcon = link.icon;
                return (
                    <Link onClick={hanlerClick}
                        key={index}
                        href={link.href}
                        className={clsx(
                            `flex h-[48px] items-stretch
                            gap-0 border-b border-divider/50
                            hover:bg-light-primary `, {
                            "border-t": index == 0,
                        }
                        )}
                    >
                        <p className={clsx("w-2 flex-none", {
                            "bg-primary border border-primary": pathName.startsWith(link.href),
                        })}></p>
                        <div className="flex items-center gap-3                             p-3 text-sm 
                            font-medium
                            ">
                            <LinkIcon className="w-6" />
                            <p className={clsx("", {
                                "block sm:hidden md:hidden": view,
                                "block sm:hidden md:block": !view
                            })}>{link.label}</p>
                        </div>
                    </Link>
                );
            })}
            <Link onClick={hanlerClick}
                href="/parametres"
                className={clsx(
                    `flex h-[48px] items-stretch
                    gap-0 border-b border-divider/50
                    hover:bg-light-primary `
                )}
            >
                <p className={clsx("w-2 flex-none", {
                    "bg-primary border border-primary": pathName === "/parametres",
                })}></p>
                <div className="flex items-center gap-3                             
                        p-3 text-sm 
                        font-medium">
                    <IoSettings className="w-6" />
                    <p className={clsx("", {
                        "block sm:hidden md:hidden": view,
                        "block sm:hidden md:block": !view
                    })}>parametres</p>
                </div>
            </Link>

        </div>
    );
}
