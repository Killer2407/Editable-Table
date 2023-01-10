import React, { Fragment, useState } from 'react'

const Employee = ({idx, name, position, salary,updateSalary}) => {
  const [updatedSalary, setUpdatedSalary] = useState("")

  const updateSalaryupdateSalary = (e) => {
    e.preventDefault()
    updateSalary({id:idx,salary:updatedSalary})
    setUpdatedSalary("")
  }
  return (
    <Fragment>
      <td>{name}</td>
      <td className='pl-20'>{position}</td>
      <td className='pl-20'>
      <div
        data-testid={'employee-salary-div-' + idx}
      > 
        {salary}
      </div>
      {/* use this block of code when the salary field becomes editable */}
      <input
          data-testid={ 'employee-salary-input-' + idx }
          type='number'
          value={updatedSalary}
          onChange={e=>e.target.value>0 && setUpdatedSalary(e.target.value)}
      />
      </td>
      <td className='pl-20'>
        <button
          className={ 'x-small w-75 ma-0 px-25' }
          data-testid={ 'employee-save-button-' + idx }
          disabled={!updatedSalary}
          onClick={(e)=>updateSalaryupdateSalary(e)}
        >
          Save
        </button>
      </td>
    </Fragment>
  )
}


export default Employee
