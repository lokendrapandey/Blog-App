import React from 'react'
import LoadingIcons from 'react-loading-icons'



function Loader() {
    return (
        <div className='flex justify-center items-center min-h-auto'>
           <LoadingIcons.ThreeDots stroke="#98ff98" strokeOpacity={.125} speed={.75}  className='p-[5px]'/>
        </div>
    )
}

export default Loader