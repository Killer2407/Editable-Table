import React, { Fragment, useState } from 'react'
import 'h8k-components'

import { AddEmployee, Employee } from './components'

const title = 'Editable Table'

const employeesList = [
  { id: 0, name: 'Chris Hatch', position: 'Software Developer', salary: 130000 },
  { id: 1, name: 'Elizabeth Montgomery', position: 'Lead Research Engineer', salary: 70000 },
  { id: 2, name: 'Aiden Shaw', position: 'Machine Learning Engineer', salary: 80000 },
]

const App = () => {

  const [_employeeList, setEmployeeList] = useState(employeesList)

  const addEmployee = ({name ,position ,salary}) => {
    console.log(name, position, salary)
    
    setEmployeeList([...employeesList,{id:employeesList.length+1,name,position,salary}])

  }



  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="card w-45 mx-auto mt-75 pb-5">
        <table data-testid='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {_employeeList.map((employee, idx) => (
              <tr key={employee.id} data-testid={`row-${idx}`}>
                <Employee
                  idx={idx}
                  name={employee.name}
                  position={employee.position}
                  salary={employee.salary}
                />
              </tr>
            ))}
            <tr>
              <AddEmployee addEmployee={addEmployee}/>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default App
