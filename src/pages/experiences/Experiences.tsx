import olivia from "../../assets/images/oliart_logo.jpg"
import amoa from "../../assets/images/amoa_digitale_logo.jpeg"
import acadomia from "../../assets/images/logo_acadomia_jaune.webp"

function Experiences() {
  return (
    <div className='p-4 mb-20'>
        <div className='max-w-7xl m-auto'>
            <h1 className='h1-stroke'>Experiences Professionnels</h1>
            <p className='my-4'>
            Je suis très fier de dire que je n'ai pas attendu de finir mes études pour me construire une expérience riche et variée.
            </p>
            <div>
                <div className='relative border-l-2 border-black px-4'>
                    <span className='absolute w-6 h-6 top-0 -left-[0.75rem] inline-block bg-black rounded-full'></span>
                    <h2 className='text-xl font-semibold'>Enseignant chez Acadomia</h2>
                    <img className='max-w-48' src={acadomia} alt=""/>
                    <span className='inline-block pt-4 italic font-thin'>Décembre 2023 - Présent</span>
                    <p className='py-4'>
                    Ma dernière expérience professionnelle n'a rien à voir avec le développement. En tant qu'enseignant chez Acadomia, mon rôle est de donner des cours de mathématiques et de physique à des élèves de collège et de lycée. C'est une expérience très enrichissante qui m'a permis de développer mes compétences pédagogiques et de travailler en autonomie. Par ailleurs, j'ai réussi à améliorer la moyenne de mes élèves de 3 points en moyenne. Mon sérieux et ma rigueur m'ont permis de me voir confier une classe de sport-études par la Fédération d'Aviron.
                    </p>
                </div>
                <div className='relative border-l-2 border-black px-4'>
                    <span className='absolute w-6 h-6 top-0 -left-[0.75rem] inline-block bg-black rounded-full'></span>
                    <h2 className='text-xl font-semibold'>Ingénieur logiciel freelance</h2>
                    <img className='max-w-24' src={olivia} alt="" />
                    <span className='inline-block pt-4 italic font-thin'>Février - Aout 2023</span>
                    <p className='py-4'>
                    En tant qu'ingénieur logiciel, j'ai eu la chance d'être le lead technique d'une équipe de trois développeurs. Nous avons développé une application de gestion de travaux publics pour le compte du groupe ALEOS Control. Cette application a été créée en utilisant ReactJs pour le front-end et Django pour le back-end, et elle est composée de plusieurs services. Une base de données assure la gestion des données et la traçabilité des opérations. Une API REST expose les services de gestion nécessaires à l'application. Le front-end permet aux utilisateurs de gérer les travaux et de suivre leur avancement. Enfin, un service de génération de rapports permet de créer des rapports de suivi des travaux.

                    Notre plus grand défi a été l'utilisation de Docker et Ansible pour déployer notre application sur les serveurs de nos clients, en veillant à maintenir un environnement de production similaire à celui de développement.
                    </p>
                    <p className='py-4'>
                    Par ailleurs, j'ai également développé le site de la galerie d'art OliArt en utilisant ReactJs et TailwindCSS. Ce site permet aux artistes de la galerie de présenter leurs œuvres. Le principal défi a été de reproduire l'esprit de la galerie sur le site, en capturant l'essence artistique et la diversité des œuvres exposées.                    </p>
                    <div className='font-semibold pb-4'>
                        <span>Tehcno utilisée : ReactJs, Django, Postgres, MySql, Docker, Ansible, Puppet, Tailwind</span>
                    </div>
                </div>
                <div className='relative border-l-2 border-black px-4'>
                    <span className='absolute w-6 h-6 top-0 -left-[0.75rem] inline-block bg-black rounded-full'></span>
                    <h2 className='text-xl font-semibold'>Dévelopepur web full stack chez AMOA Digital</h2>
                    <img src={amoa} className='max-w-24' alt="" />
                    <span className='inline-block pt-4 italic font-thin'>Novembre 2022 - Février 2023</span>
                    <p className='py-4'>
                    Au cours de mon CDD chez AMOA Digital, ma mission principale a été de développer un clone de Meetup nommé Boabus. Ce projet, développé avec Angular pour le front-end et Node.js pour le back-end, m'a permis de découvrir le fonctionnement des sockets en implémentant un système de notifications et de messagerie instantanée. Cette expérience a été enrichissante, car elle m'a permis de maîtriser de nouvelles technologies et d'améliorer mes compétences en développement web en temps réel.
                    </p>
                    <p className='py-4'>
                    J'ai également travaillé sur le site web d'un comparateur d'assurances, où j'ai intégré un pré-remplisseur de formulaire à l'aide de l'API d'api.gouv.fr. Cette expérience m'a non seulement permis de travailler avec des API externes, mais aussi de développer ma capacité à comprendre et à interagir avec le code d'autres développeurs, qu'il soit bien documenté ou non.
                    </p>
                    <div className='font-semibold pb-4'>
                        <span>Techno utilisée : Angular, MongoDb, NodeJs, ExpressJs, Tailwind, Socket.io</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto'>
            <h1 className='h1-stroke'>Projet Personnel</h1>
            <p className='my-4'>
            J'ai également profité de nombreux projets personnels et scolaires pour développer de multiples compétences. Parmi ces projets, on peut citer :
            </p>
            <div>
                <div className='my-4'>
                    <h2 className='text-xl font-semibold'>Serveur d'authentification OAuth2.0</h2>
                    <a className='italic underline' href="https://github.com/tiffan-source/OAuth-Server">Code source serveur</a>
                    <p>
                    Amoureux des design patterns, j'ai souhaité appliquer les principes de la clean architecture dans un projet personnel. Étant particulièrement intéressé par les méthodes d'authentification et d'autorisation, j'ai développé un serveur d'authentification OAuth2.0 en NodeJs. Ce serveur gère les utilisateurs, les rôles et les permissions, et permet de générer des tokens d'accès et de rafraîchissement. Ce projet m'a permis de découvrir le fonctionnement des tokens JWT, de comprendre les mécanismes de l'authentification OAuth2.0, mais surtout de me familiariser davantage avec le développement piloté par les tests (TDD) et la clean architecture.
                    </p>
                </div>
                <div className='my-4'>
                    <h2 className='text-xl font-semibold'>Projet d'étude: Démineur</h2>
                    <a className='italic underline' href="https://github.com/tiffan-source/Demineur">Code source du jeu</a>
                    <p>
                    Dans le cadre de mon projet de bureau d'étude à l'EILCO, j'ai participé au développement d'un jeu de démineur en équipe de trois. Ce projet, réalisé en langage C, a été un véritable défi pour nous. Nous avons dû implémenter un système de génération de grille de jeu, un système de gestion des événements et un système de gestion des scores. Ce projet nous a également permis de découvrir et d'apprécier l'utilisation de la stratégie de branchement Gitflow pour gérer notre code de manière efficace et collaborative.
                    </p>
                </div>
                <div className='my-4'>
                    <h2 className='text-xl font-semibold'>Projet Aduino: Détecteur de piece</h2>
                    <p>
                    Dans le cadre de mon projet d'électronique à l'EILCO, j'ai développé un détecteur de pièces en utilisant une carte Arduino. Ce dispositif devait être capable de détecter les pièces de 1, 2 et 5 centimes. Pour ce faire, nous avons conçu un système de détection basé sur la taille et le poids des pièces. Ce projet nous a permis de découvrir l'électronique et de nous familiariser avec l'utilisation des cartes Arduino, tout en approfondissant notre compréhension des capteurs et de la programmation embarquée.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences