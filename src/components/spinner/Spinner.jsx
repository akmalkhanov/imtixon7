import React from 'react'
import { Audio } from 'react-loader-spinner';


const Spinner = () => {
  return (
    <div className='ml-[700px] mt-[200px]'>
        <Audio
          height="100"
          width="100"
          radius="9"
          color="green" 
          ariaLabel="loading"
          wrapperStyle
          wrapperClass  
        />
    </div>
  )
}

export default Spinner