
function Language() {
  return (
    <div>
        <h2 className='h1-stroke'>Languages de programation</h2>
        <ul className='flex flex-wrap justify-evenly my-4'>
            <li className='flex flex-col justify-center items-center gap-4'>
                <span className='inline-flex justify-center items-center w-20 h-20 border-2 rounded-full bg-blue-50 border-blue-300'>
                    <img className='w-12 h-auto' src="https://www.svgrepo.com/show/354478/typescript-icon.svg" alt="" />
                </span>
                <span>TypeScript</span>
            </li>
            <li className='flex flex-col justify-center items-center gap-4'>
                <span className='inline-flex justify-center items-center w-20 h-20 border-2 rounded-full bg-red-50 border-red-300'>
                    <img className='w-12 h-auto' src="https://www.svgrepo.com/show/452234/java.svg" alt="" />
                </span>
                <span>Java</span>
            </li>
            <li className='flex flex-col justify-center items-center gap-4'>
                <span className='inline-flex justify-center items-center w-20 h-20 border-2 rounded-full bg-blue-50 border-blue-300'>
                    <img className='w-12 h-auto' src="https://www.svgrepo.com/show/452091/python.svg" alt="" />
                </span>
                <span>Pyhton</span>
            </li>
            <li className='flex flex-col justify-center items-center gap-4'>
                <span className='inline-flex justify-center items-center w-20 h-20 border-2 rounded-full bg-yellow-50 border-yellow-300'>
                    <img className='w-12 h-auto' src="https://www.svgrepo.com/show/452045/js.svg" alt="" />
                </span>
                <span>JavaScript</span>
            </li>
            <li className='flex flex-col justify-center items-center gap-4'>
                <span className='inline-flex justify-center items-center w-20 h-20 border-2 rounded-full bg-gray-50 border-gray-300'>
                    <img className='w-12 h-auto' src="https://www.svgrepo.com/show/500800/c.svg" alt="" />
                </span>
                <span>C</span>
            </li>
        </ul>
    </div>
  )
}

export default Language