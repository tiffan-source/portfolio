import me from "../../assets/images/me.jpg"

function About() {
  return (
    <div className="absolute top-0 w-full min-h-screen flex justify-center items-center">
        <div className='flex justify-center items-center p-4 gap-4 max-w-7xl'>
            <div>
                <div>
                    <h1 className='h1-stroke'>About</h1>
                    <p className='text-lg py-2'>Salut, je m'appelle ZOHOUNGBOGBO Anlyou et je suis étudiant ingénieur en 2e année à l'École d'Ingénieurs du Littoral Côte d'Opale. Je suis passionné de musique, d'échecs, de basketball et, bien sûr, de développement web, logiciel et mobile. J'écris souvent des articles sur Medium et j'adore apprendre.</p>
                </div>
                <div className='my-2'>
                    <h2 className='text-2xl uppercase tracking-wider'>Langues</h2>
                    <ul className='tracking-wider'>
                        <li className='font-semibold'>Français <span className='font-light'>(langue native)</span> </li>
                        <li className='font-semibold'>Anglais <span className='font-light'>(intermédiaire 820 en TOEIC)</span> </li>
                        <li className='font-semibold'>Italien <span className='font-light'>(débutant)</span> </li>
                    </ul>
                </div>
                <div>
                    <a href="https://drive.google.com/file/d/1SAem_43WI25P3xy1H6yL-I9SKejVFiju/view?usp=drive_link" className='underline cursor-pointer'>Mon CV</a>
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