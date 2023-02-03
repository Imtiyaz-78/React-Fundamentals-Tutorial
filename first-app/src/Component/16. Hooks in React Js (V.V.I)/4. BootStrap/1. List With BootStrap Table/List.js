
import React from 'react'
import {Table} from 'react-bootstrap'


function App() {
  const Imtiyaz = [
    { name: 'Imtiyaz', email: 'imtiyaz@test.com', contact: '111' },
    { name: 'Developer', email: 'abcd@test.com', contact: '222' },
    { name: 'Abdullah', email: 'abcdf@test.com', contact: '111' },
    { name: 'Razu', email: 'nazish@test.com', contact: '777' },
  ]
  return (
    <div >
      <h1>List With Bootstrap Table</h1>
      <Table class="table table-hover table-dark" >
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contacts</td>
        </tr>
        {
          Imtiyaz.map((item,i)=>
          item.contact==='111'?
          <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
         <td>{item.contact}</td>
        </tr>:null
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default App;