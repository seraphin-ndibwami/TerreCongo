import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/">
            <div className={twMerge(`
                text-2xl xl:w-[300px] font-extrabold text-white`
                , className)}>
                Terre congo
            </div>
        </Link>
    )
}