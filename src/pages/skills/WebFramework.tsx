import React from 'react'

function WebFramework() {
  return (
    <div>
        <h1 className='h1-stroke'>Techno et Framework</h1>
        <div className='flex justify-center items-center my-4 flex-col'>
            <iframe src="https://giphy.com/embed/qxkQ5PLLCnXW0" width="240" height="240" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/yoda-qxkQ5PLLCnXW0">via GIPHY</a></p>
        </div>
        <p>
            Je suis un vrai mettre Jedi des principaux frameworks web. J'ai une experience de plus de 2 ans dans le developpement web et j'ai travaille avec les frameworks suivants:
        </p>
        <ul className='flex flex-wrap justify-evenly my-4'>
            <li className='flex flex-col justify-center items-center gap-4'>
                <span className='inline-flex justify-center items-center w-20 h-20 border-2 rounded-full bg-cyan-50 border-cyan-300'>
                    <img className='w-12 h-auto' src="https://www.svgrepo.com/show/374032/reactjs.svg" alt="" />
                </span>
                <span>ReactJs</span>
            </li>
            <li className='flex flex-col justify-center items-center gap-4'>
                <span className='inline-flex justify-center items-center w-20 h-20 border-2 rounded-full bg-red-50 border-red-300'>
                    <img className='w-12 h-auto' src="https://www.svgrepo.com/show/452156/angular.svg" alt="" />
                </span>
                <span>AngularJs</span>
            </li>
            <li className='flex flex-col justify-center items-center gap-4'>
                <span className='inline-flex justify-center items-center w-20 h-20 border-2 rounded-full bg-gray-50 border-gray-300'>
                    <img className='w-12 h-auto' src="https://www.svgrepo.com/show/354118/nodejs.svg" alt="" />
                </span>
                <span>NodeJs</span>
            </li>
            <li className='flex flex-col justify-center items-center gap-4'>
                <span className='inline-flex justify-center items-center w-20 h-20 border-2 rounded-full bg-green-50 border-green-300'>
                    <img className='w-12 h-auto' src="https://www.svgrepo.com/show/373554/django.svg" alt="" />
                </span>
                <span>Django</span>
            </li>
            <li className='flex flex-col justify-center items-center gap-4'>
                <span className='inline-flex justify-center items-center w-20 h-20 border-2 rounded-full bg-green-50 border-green-300'>
                    <img className='w-12 h-auto' src="https://www.svgrepo.com/show/376350/spring.svg" alt="" />
                </span>
                <span>Spring</span>
            </li>
        </ul>
    </div>
  )
}

export default WebFramework