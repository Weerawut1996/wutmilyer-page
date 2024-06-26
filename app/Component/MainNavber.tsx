'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import MakeId from "./RandomString";

export default function NavbarComponent() {
   const Select: string = 'text-teal-400'
   const UnSelect: string = 'text-lime-700 hover:text-lime-900 '
   const pathname = usePathname();


   function startPath(path: string) {
      return pathname.startsWith(path)
   };

   return (
      <nav className="flex justify-center">
         <div className="p-1 px-2 border rounded-full">
            <ul className="px-4 flex flex-row gap-2 justify-center items-center">
               <li className={`${pathname == '/' ? Select : UnSelect}`}>
                  <Link href="/">Profile </Link>
               </li>
               <li className={`${startPath('/Product') ? Select : UnSelect}`}>
                  <Link href="/Product">Product</Link>
               </li>
               <li className={`${startPath('/Article') ? Select : UnSelect}`}>
                  <Link href="/Article">Article</Link>
               </li>
               <li className={`${startPath('/Referable') ? Select : UnSelect}`}>
                  <Link href="/Referable">อ้างอิง</Link>
               </li>
               <li>
                  <Link href={"/" + MakeId(5)}>ErrorPages</Link>
               </li>
               
            </ul>
         </div>
      </nav>
   );
}
