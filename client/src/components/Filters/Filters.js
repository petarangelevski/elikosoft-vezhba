import React from 'react'
import './Filters.css'
const Filters = (props) => {
    function onFilterValueChanged(event){
        props.filterValueSelected(event.target.value)
        
    }
    
    function onFilterSeasonChanged(event){
        props.filterSeasonSelected(event.target.value)
    }


  return (
    <div className='filterArea'>
     <select className='isGender' name="isGender" onChange={onFilterValueChanged}>
         <option value="" disabled selected>
         --Filter by gender--
         </option>
         <option value="all1">All</option>
         {props.genders.map((item) => (
         <option className='isGenderOptions' key={item.idgenders} value={item.gender}>{item.gender}</option>
         ))}
     </select>
     <select className='isSeason' name="isSeason" onChange={onFilterSeasonChanged}>
        <option value="" disabled selected>
          --Filter by season--
        </option>
         <option value="all2">All</option>
         {props.seasons.map((item) => (
         <option className='isSeasonOptions' key={item.idseasons} value={item.season}>{item.season}</option>

         ))}
     </select>
    </div>
  )
}

export default Filters;