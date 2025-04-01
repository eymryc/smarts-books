import { useState, useEffect } from "react";
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import Logo from "../../public/media/logo/logo-alt.png";
import { Headset, Mails, MapPinCheckInside } from 'lucide-react';
import AppearanceTabs from '@/components/appearance-tabs';

export default function WebsiteHeader() {
   const [isNavFixed, setIsNavFixed] = useState(false);
   const currentPath = window.location.pathname;
   // Gestion du scroll pour fixer la navbar
   useEffect(() => {
      const handleScroll = () => {
         const navPosition = document.getElementById('main-nav')?.offsetTop || 0;
         if (window.scrollY > navPosition && !isNavFixed) {
            setIsNavFixed(true);
         } else if (window.scrollY <= navPosition && isNavFixed) {
            setIsNavFixed(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [isNavFixed]);

   return (
      <div>
         <div className='flex justify-center'>
            <div className='container'>
               <div>
                  <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-3 md:py-5 flex flex-col md:flex-row justify-between items-center gap-4">
                     <div>
                        <img src={Logo} alt="Logo" />
                     </div>
                     <div className="w-full md:w-1/2">
                        <div className="flex items-center bg-white pl-4 h-16">
                           <div className="text-center text-red-500 font-bold px-4">
                                 Pour toutes vos commandes de livres. Notre équipe vous contactera après votre commande pour vous confirmer les modalités de livraison.
                           </div>
                        </div>
                     </div>

                     <AppearanceTabs />

                  </div>
               </div>
            </div>
         </div>


         <div
            id="main-nav"
            className={`bg-black py-3 md:py-5 ${isNavFixed ? 'fixed top-0 left-0 w-full z-50 shadow-md' : ''}`}
         >
            <nav className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 flex justify-between items-center">
               <div className="hidden md:flex gap-5">
                  <div className="flex flex-row items-center gap-2">
                     <Headset className="text-red-500" size="40" />
                     <div className="text-white flex flex-col text-sm">
                        <span>Support 24/7</span>
                        <span>(+225)0707474836</span>
                     </div>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                     <Mails className="text-red-500" size="40" />
                     <div className="text-white flex flex-col text-sm">
                        <span>Email</span>
                        <span>konanmax100@gmail.com</span>
                     </div>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                     <MapPinCheckInside className="text-red-500" size="40" />
                     <div className="text-white flex flex-col text-sm">
                        <span>Adresse</span>
                        <span>Orléans, France</span>
                     </div>
                  </div>
               </div>

               {isNavFixed && (
                  <div className="md:hidden">
                     <img src={Logo} alt="Logo" />

                  </div>
               )}

               <div className="hidden md:flex justify-end w-full md:w-auto">
                  <ul className="flex flex-row gap-2 md:gap-4 text-white text-sm md:text-base uppercase">
                     <li
                        className={cn('justify-start hover:text-red-200 transition-colors cursor-pointer', {
                           'text-red-500': currentPath === '/',
                        })}>
                        <Link href="/" prefetch>
                           Acceuil
                        </Link>

                     </li>
                     <li
                        className={cn('justify-start hover:text-red-200 transition-colors cursor-pointer', {
                           'text-red-500': currentPath === '/about',
                        })}>
                        <Link href="about" prefetch>
                           Qui suis-je
                        </Link>
                     </li>

                     <li
                        className={cn('justify-start hover:text-red-200 transition-colors cursor-pointer', {
                           'text-red-500': currentPath === '/books',
                        })}>
                        <Link href="books" prefetch>
                           Livres
                        </Link>
                     </li>

                     <li
                        className={cn('justify-start hover:text-red-200 transition-colors cursor-pointer', {
                           'text-red-500': currentPath === '/contact',
                        })}>
                        <Link href="contact" prefetch>
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>

         {isNavFixed && <div className="h-14 md:h-16"></div>}
      </div>
   )
}
