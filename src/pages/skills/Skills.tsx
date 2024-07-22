import React from 'react'
import Language from './Language'
import WebFramework from './WebFramework'
import Devops from './Devops'
import Other from './Other'

function Skills() {
  return (
    <div className='p-4 mb-12'>
        <div className='max-w-7xl m-auto'>
            <Language/>
        </div>
        <div className='max-w-7xl m-auto'>
            <WebFramework/>
        </div>
        <div className='max-w-7xl m-auto'>
            <Devops/>
        </div>
        <div className='max-w-7xl m-auto'>
            <Other/>
        </div>
    </div>
    )
}

export default Skills