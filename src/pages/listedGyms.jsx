import React from 'react'
import Allgyms from '../component/Allgyms'

function listedGyms() {
  return (
    <div>
      <div className=' m-auto w-fit mt-30'>
      <h1 className='font-extrabold text-3xl hover:underline text-emerald-500'>Partner Gym Centers</h1>
      <p>Use your FlexPulse membership for unlimited access across all locations</p>
    </div>
    <Allgyms/>
    </div>
  )
}

export default listedGyms