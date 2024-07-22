import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import me from "../../assets/images/me-home.jpg"
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='text-center p-4'>
        <div className='inline-block w-64 h-64 rounded-full overflow-hidden'>
            <img src={me} alt=""/>
        </div>
        <h1 className='text-3xl font-bold uppercase md:text-4xl lg:text-5xl'>
            <span className='text-stroke-3 text-white tracking-widest'>Hello, Je suis </span>
            ZOHOUNGBOGBO Anlyou
        </h1>
        <h1 className='text-3xl font-bold uppercase md:text-4xl lg:text-5xl'>
            <span className='text-stroke-3 text-white tracking-widest'>Mais appelez-moi </span>
            Tiffane
        </h1>
        <p className='m-2 font-semibold lg:text-xl'>
            Je suis étudiant ingénieur en informatique
        </p>
        <div className='text-lg lg:text-xl'>
            <Link to="/about"><FontAwesomeIcon icon={faArrowRight}/> Faisons connaissance</Link>
        </div>
    </div>
  )
}

export default Hero