import React from 'react'
import olivia from "../../assets/images/oliart_logo.jpg"
import amoa from "../../assets/images/amoa_digitale_logo.jpeg"
import acadomia from "../../assets/images/logo_acadomia_jaune.webp"

function Experiences() {
  return (
    <div className='p-4 mb-20'>
        <div className='max-w-7xl m-auto'>
            <h1 className='h1-stroke'>Experiences Professionnels</h1>
            <p className='my-4'>
                Je suis tres fiere de dire que je n'ai pas attendu de finir de faire mes etudes pour me batir une experience riche et varie.
            </p>
            <div>
                <div className='relative border-l-2 border-black px-4'>
                    <span className='absolute w-6 h-6 top-0 -left-[0.75rem] inline-block bg-black rounded-full'></span>
                    <h2 className='text-xl font-semibold'>Enseignant chez Acadomia</h2>
                    <img className='max-w-48' src={acadomia} alt=""/>
                    <span className='inline-block pt-4 italic font-thin'>Decembre 2023 - Present</span>
                    <p className='py-4'>
                        Oui ma derniere et actuel experience professionnel n'a rien a voir avec du dev. En tant qu'enseigna tchez Acadomia, mon role est de donner des cours de mathematiques et de physique a des eleves de college et de lycee. C'est une experience tres enrichissante qui m'a permis de developper mes competences pedagogiques et de travailler en autonomie.
                        Par ailleurs j'ai reussit a ameliorer la moyenne de mes eleves de 3 points en moyenne.
                        Mon serieux et ma rigueur m'a permis de me faire confier une classe de sport etude de la federation d'Aviron
                    </p>
                </div>
                <div className='relative border-l-2 border-black px-4'>
                    <span className='absolute w-6 h-6 top-0 -left-[0.75rem] inline-block bg-black rounded-full'></span>
                    <h2 className='text-xl font-semibold'>Ingenieur logiciel freelance</h2>
                    <img className='max-w-24' src={olivia} alt="" />
                    <span className='inline-block pt-4 italic font-thin'>Fevrier - Aout 2023</span>
                    <p className='py-4'>
                        En tant qu'ingeieur logiciel, j'ai eu la chance d'etre le lead technique d'une equipe de 3 developpeur. Nous avons ainsi develpper une apllication de gestion de travaux publiqes pour le compte du groupe ALEOS Control. Cette application a ete developper en ReactJs et en Django et a consituer en plusieurs services. Une base de donnee permettant la gestion des donnees et assurant la trcabilite des operations. Une API  REST exposant les ervices de gestion necessaire a l'application. Un front end permettant aux utilisateurs de gerer les travaux et de suivre leur avancement. Et enfin un service de generation de rapport permettant de generer des rapports de suivi des travaux.
                        Notre plus grand defi a ete l'utilisation de Docker  et Ansible pour deployer notre application sur les serveurs de nos clients en s'assurant d'avoir un environnement de production similaire a celui de developpement.
                    </p>
                    <p className='py-4'>
                        Par ailleurs j'ai egalement developper le site de la galerie d'art OliArt a l'aide de ReactJs et de TailwindCss. Ce site permet aux artistes de la galerie de presenter leur oeuvre. Le principale defi fut de reproduire l'exprit de la galerie sur le site.
                    </p>
                    <div className='font-semibold pb-4'>
                        <span>Tehcno utilisee : ReactJs, Django, Postgres, MySql, Docker, Ansible, Puppet, Tailwind</span>
                    </div>
                </div>
                <div className='relative border-l-2 border-black px-4'>
                    <span className='absolute w-6 h-6 top-0 -left-[0.75rem] inline-block bg-black rounded-full'></span>
                    <h2 className='text-xl font-semibold'>Developepur web full stack chez AMOA Digital</h2>
                    <img src={amoa} className='max-w-24' alt="" />
                    <span className='inline-block pt-4 italic font-thin'>Novembre 2022 - Fevrier 2023</span>
                    <p className='py-4'>
                        Au cours de mon CDD chez AMOA Digital ma mission principale a ete de developper un clone de Meetup baptise Boabus. Developper avec Angular et NodeJs, ce projet m'a permis de decouvrir le fonctionnement des sockets a travers la mise en place d'un systeme de notification et de messagerie instantanee.
                    </p>
                    <p className='py-4'>
                        Je sui egalement intervenu sur le site web d'un comparateur d'assurance ou j'ai integrer un pre remplisseur de formulaire  l'aide de l'API de api.gouv.fr. Cette experience m'a non seuelemnt permis de travailler avec des API externes mais egalement de devlopper mon sens de la comprehension du code d'autres developpeur documente ou non.
                    </p>
                    <div className='font-semibold pb-4'>
                        <span>Techno utilisee : Angular, MongoDb, NodeJs, ExpressJs, Tailwind, Socket.io</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto'>
            <h1 className='h1-stroke'>Projet Persionnel</h1>
            <p className='my-4'>
                J'ai egalement profite de nombreux projets personnel et scolaire pour developper de multiple competences. Parmi ces projets on peut citer:
            </p>
            <div>
                <div className='my-4'>
                    <h2 className='text-xl font-semibold'>Serveur d'authentification OAuth2.0</h2>
                    <a className='italic underline' href="https://github.com/tiffan-source/OAuth-Server">Code source serveur</a>
                    <p>
                        Amoureux de design pattern, j'ai voulu appliquer les principes de la clean architecure dans un projet personnel. Ainsi, tres interresser par les methodes d'authentification et d'authorization, j'ai developper en NodeJs un serveur d'authentification OAuth2.0. Ce serveur permet de gerer les utilisateurs, les roles et les permissions. Il est egalement possible de generer des tokens d'acces et de rafraichissement. Ce projet m'a permis de decouvrir le fonctionnement des tokens JWT, de comprendre le fonctionnement de l'authentification OAuth2.0 mais surout de me familiariser encore plus avec le TDD et la clean architecture.
                    </p>
                </div>
                <div className='my-4'>
                    <h2 className='text-xl font-semibold'>Projet d'etude: Demineur</h2>
                    <a className='italic underline' href="https://github.com/tiffan-source/Demineur">Code source du jeu</a>
                    <p>
                        Dans le cadre mon projet de bureau d'etude a l'EILCO, j'ai eu a develpper en equipe de 3 un jeu de demineur. Ce projet a ete developper en C et a ete un veritable defi pour nous. En effet, nous avons du implementer un systeme de generation de grille de jeu, un systeme de gestion des evenements et un systeme de gestion des scores. Ce projet nous a permis de decouvrir les joies de la strategie de branch Gitflow.
                    </p>
                </div>
                <div className='my-4'>
                    <h2 className='text-xl font-semibold'>Projet Aduino: Detecteur de piece</h2>
                    <p>
                        Dans le cadre de mon projet d'electronique a l'EILCO, j'ai eu a developper un detecteur de piece a l'aide d'une carte Arduino. Ce detecteur de piece devait etre capable de detecter les pieces de 1, 2 et 5 centimes. Pour cela nous avons du developper un systeme de detection de la taille des pieces et de leur poids. Ce projet nous a permis de decouvrir l'electronique et de nous familiariser avec les cartes Arduino.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences