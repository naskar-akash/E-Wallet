import React from 'react'

const FilterStudents = () => {
  return (
    <div>
      <div>
        <h2>Filter by Name:</h2>
        <input type="text" name="nameFilter"/>
      </div>
      <div>
        <h2>Filter by Payment Status:</h2>
        <span>unpaid </span>
        <input type="checkbox"/>
        <span>paid </span>
        <input type="checkbox"/>
      </div>
      <div>
        <h2>Filter by Board:</h2>
        <span>CBSE </span>
        <input type="checkbox"/>
        <span>ICSE </span>  
        <input type="checkbox"/>
        <span>State</span>
        <input type="checkbox"/>
      </div>
    </div>
  )
}

export default FilterStudents
