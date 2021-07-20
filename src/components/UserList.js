import { useState } from "react"

export default function UserList() {

  const [users, setUsers] = useState([]);

  return (
    <div>
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <td>First name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shubham</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}