import me from "../../assets/images/me.jpg"

function About() {
  return (
    <div className="absolute top-0 w-full min-h-screen flex justify-center items-center">
        <div className='flex justify-center items-center p-4 gap-4 max-w-7xl'>
            <div>
                <div>
                    <h1 className='h1-stroke'>About</h1>
                    <p className='text-lg py-2'>Salut je m'appelle ZOHOUNGBOGBO Anlyou et je suis etudiant ingenieur en 2e annee a l'ecole d'inge du littoral cote d'opale. Je suis passionne de musique, d'echecs, de basket ball et bien sur de developpement web, logiciel et mobile. J'ecris souvent des articles sur medium et j'adore apprendre.</p>
                </div>
                <div className='my-2'>
                    <h2 className='text-2xl uppercase tracking-wider'>Langues</h2>
                    <ul className='tracking-wider'>
                        <li className='font-semibold'>Francais <span className='font-light'>(langue native)</span> </li>
                        <li className='font-semibold'>Anglais <span className='font-light'>(intermediaire 820 en TOEIC)</span> </li>
                        <li className='font-semibold'>Italien <span className='font-light'>(debutant)</span> </li>
                    </ul>
                </div>
                <div>
                    <a href="" className='underline cursor-pointer'>Mon CV</a>
                </div>
            </div>
            <div className='hidden md:block -translate-y-32 lg:translate-y-0 lg:min-w-[32rem]'>
                <div className='inline-block w-64 h-64 overflow-hidden rounded-full lg:h-auto lg:w-auto lg:rounded-tl-full lg:rounded-bl-full lg:rounded-tr-none '>
                    <img src={me} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About