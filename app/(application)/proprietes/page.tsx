import { CarteConcession } from "@/app/ui/tableauDeBord/carteConcession";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

export default function Home() {
  const id = "1234878902q324542432";
  return (
    <>
      <h1 className="font-bold">
        mes propriètés
      </h1>
      <div className="flex flex-wrap">
        <div className="relative group">
          <Link className="sm:hidden group-hover:block transition
            absolute z-10 top-3 right-3 text-white"
            href={`/proprietes/${id}`}>
              <RxExternalLink  className="stroke-white
                fill-white size-5 hover:scale-110 transition" />
          </Link>
            <CarteConcession
              adresse="Goma / kituku / kivu / n° : 23"
              href={[
                "/images/goma0.jpg",
                "/images/goma1.jpeg",
                "/images/goma2.jpeg",
              ]}
              dimesion_ariere="10 m"
              dimesion_avant="10 m"
              dimesion_droite="11 m"
              dimesion_gauche="10 m"
            />
        </div>
      </div>
    </>
  );
}