import WebsiteLayout from "@/layouts/website/websiteLayout";
import profileImg from "@/public/media/comic-book-style-scene-with-man-work.jpg"
export default function About() {
   return (
      <WebsiteLayout>
         <div className="p-20">
            <div className="float-left mr-4 mb-4">
               <img src={profileImg} alt="" className="w-100 h-auto rounded-full object-cover" />
            </div>

            <div className="text-justify">
               Monsieur Kramo, doctorant en géographie physique et spécialisé en biogéographie, mène actuellement ses recherches dans le cadre d'une cotutelle entre l'Université d'Orléans (France) et l'Université Alassane Ouattara (Côte d'Ivoire). Ce double cursus académique lui permet de développer une approche transdisciplinaire, intégrant des perspectives européennes et africaines pour mieux comprendre les dynamiques environnementales et écologiques.

               Dans le cadre de sa thèse, il explore les interactions complexes entre les facteurs biophysiques et les écosystèmes, en mettant particulièrement l'accent sur les impacts du changement climatique et les transformations des paysages naturels. Ses travaux contribuent à une meilleure compréhension des processus écologiques et à l’élaboration de solutions pour la gestion durable des ressources naturelles, tant en Afrique qu’en Europe.

               En parallèle de ses recherches, Monsieur Kramo intervient en tant qu'enseignant vacataire à l'Université d'Orléans, où il transmet ses connaissances et son expertise en géographie physique et en biogéographie. Son engagement dans l'enseignement lui permet de partager sa passion pour la discipline tout en accompagnant les étudiants dans leur apprentissage des enjeux environnementaux contemporains.

               Son parcours témoigne de son ambition à renforcer les liens académiques et scientifiques entre l'Afrique et l'Europe, tout en apportant des solutions concrètes aux défis environnementaux mondiaux.

               Enseignants, chercheurs, étudiants, professionnels, etc, nous sommes là pour toutes vos commandes de livres. Notre équipe vous contactera après votre commande pour vous confirmer les modalités de livraison.
               
            </div>
         </div>

      </WebsiteLayout>
   )
}
