import contact from "../../assets/images/contact.svg"

function Contact() {
  return (
    <div className='p-4'>
        <div className='max-w-7xl m-auto'>
            <h1 className='h1-stroke'>Contact</h1>
            <div className='flex justify-center items-center flex-col my-4'>
                <iframe src="https://giphy.com/embed/MX4nT8WWzmUjV167hB" width="400" height="269" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-gsw-player-court-klay-thompson-MX4nT8WWzmUjV167hB">via GIPHY</a></p>
            </div>
            <ul className='text-xl text-center'>
                <li> <span className='font-semibold'>📧 Email: </span> <a href='mailto:zohoungbogboanlyou@gmail.com'>zohoungbogboanlyou@gmail.com</a></li>
                <li> <span className='font-semibold'>📞 Telephone:</span>  <a href='tel:+330768569734'>+33 07 68 56 97 34</a></li>
                <li> <span className='font-semibold'>🏠 Address:</span>  216 Rue du Marechal de lattre de Tassigny 62100 Calais</li>
                <li> <span className='font-semibold'>📱 LinkedIn:</span>  <a href='https://www.linkedin.com/in/anlyou-zohoungbogbo/'>Anlyou ZOHOUNGBOGBO</a></li>
                <li> <span className='font-semibold'>👨🏾‍💻 Github:</span>  <a href='https://github.com/tiffan-source'>tiffan-source</a></li>
            </ul>
            <div className='flex justify-center items-center'>
                <img src={contact} className='max-w-lg' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact