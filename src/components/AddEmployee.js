import React, { Fragment, useState } from 'react'

const AddEmployee = ({ addEmployee }) => {
  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [salary, setSalary] = useState("")

  const add = () => {
    addEmployee({ name, position, salary })
    setName("");
    setPosition("");
    setSalary("")
  }

  return (
    <Fragment>
      <td className='pl-30'>
        <input
          data-testid='new-employee-name-input'
          placeholder='Enter Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-position-input'
          placeholder='Enter Position'
          value={position}
          onChange={e => setPosition(e.target.value)}
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-salary-input'
          type='number'
          value={salary}
          placeholder='Enter Salary'
          onChange={e => setSalary(e.target.value)}
        />
      </td>
      <td className='pl-20'>
        <button
          data-testid='add-new-employee-button'
          className='x-small w-75 ma-0 px-25'
          disabled={!name || !position || !salary}
          onClick={() => add()}
        >
          Add
        </button>
      </td>
    </Fragment>
  )
}

export default AddEmployee
