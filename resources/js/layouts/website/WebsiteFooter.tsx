import Logo from "../../public/media/logo/logo-alt.png";
export default function WebsiteFooter() {
  return (
   <div className="py-8 md:py-12 border-t border-gray-200">
   <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div>
               <img src={Logo} alt="Logo" />
               <div className="mt-4">
                   <p className="text-justify text-gray-500 text-sm"> Nous sommes une équipe passionnée de littérature, prête à répondre à vos besoins et à vous livrer rapidement les ouvrages en Côte d'Ivoire et au Burkina Faso, au meilleur prix.</p>
               </div>

               <div className="flex flex-col mt-4 text-sm space-y-2">
                   <div>
                       <span className="text-black font-medium">Adresse : </span>
                       <span className="text-gray-500">Orléans, France</span>
                   </div>
                   <div>
                       <span className="text-black font-medium">Téléphone : </span>
                       <span className="text-gray-500">(+225)0707474836</span>
                   </div>
                   <div>
                       <span className="text-black font-medium">Email : </span>
                       <span className="text-gray-500">konanmax100@gmail.com</span>
                   </div>
               </div>

               <div className="mt-4 flex space-x-3">
                   <a href="#" className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                       <span>f</span>
                   </a>
                   <a href="#" className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                       <span>t</span>
                   </a>
                   <a href="#" className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
                       <span>in</span>
                   </a>
               </div>
           </div>

           <div>
               <h1 className="text-lg font-semibold mb-4">Liens Utiles</h1>

               <div>
                    <ul className="flex flex-col space-y-2 text-gray-500">
                       <li className="hover:text-red-500 cursor-pointer transition-colors">Qui suis-je</li>
                       <li className="hover:text-red-500 cursor-pointer transition-colors">Nos Livres disponibles</li>
                       <li className="hover:text-red-500 cursor-pointer transition-colors">Politique de confidentialité</li>
                       <li className="hover:text-red-500 cursor-pointer transition-colors">FAQ</li>
                       <li className="hover:text-red-500 cursor-pointer transition-colors">Nous contacter</li>
                   </ul>
               </div>
           </div>

           <div>
               <h1 className="text-lg font-semibold mb-4">Catégories populaires</h1>

               <div>
                   <ul className="flex flex-col space-y-2 text-gray-500">
                       <li className="hover:text-red-500 cursor-pointer transition-colors">Romans et littérature</li>
                       <li className="hover:text-red-500 cursor-pointer transition-colors">Sciences humaines</li>
                       <li className="hover:text-red-500 cursor-pointer transition-colors">Histoire</li>
                       <li className="hover:text-red-500 cursor-pointer transition-colors">Jeunesse</li>
                       <li className="hover:text-red-500 cursor-pointer transition-colors">Livres d&apos;art</li>
                   </ul>
               </div>
           </div>
       </div>

       <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
           <p>&copy; {new Date().getFullYear()} SmartBooks. Tous droits réservés.</p>
       </div>
   </div>
</div>
  )
}
