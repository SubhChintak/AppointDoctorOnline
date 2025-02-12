import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {
  return (
    <div>
      <h1>Top Doctors to book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>

      <div>
      {doctors.slice(0,10).map((item, index)=>(
        <div>
            <img src=' ' alt='' />
            <div>
               <div>
               <p></p><p>Available</p>
               </div>
               <p>{item.name}</p>
               <p>{item.speciality}</p>
            </div>
        </div>))}
      </div>
    </div>
  )
}

export default TopDoctors
