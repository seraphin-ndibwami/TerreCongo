import Link from 'next/link';
import { IoNotificationsOffSharp } from 'react-icons/io5';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <IoNotificationsOffSharp className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>cet page n&apos;existe pas veuilleu</p>
      <Link
        href="/acceuil/proprietes"
        className="mt-4 rounded-md 
        bg-primary px-4 py-2 text-sm
        text-white transition-colors 
        hover:bg-darck-primary"
      >
        page des proprietées
      </Link>
    </main>
  );
}