import axios from "axios";
import { useEffect, useState } from "react"

export default function UserList() {

  const [users, setUsers] = useState([]);
  useEffect(function () {

    if(users.length !== 0) {
      return;
    }
    console.log("useEffect called");
    const promise = axios.get("http://localhost:4200/users");
    promise.then((response) => {
      console.log(response);
      setUsers(...users, response.data)
    })
  })
  return (
    <div>
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>First name</th>
            <th>Age</th>
            <th>Joining Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map(function (user, index) {
            return <tr key={index}>
              <td>{user.firstname}</td>
              <td>{user.age}</td>
              <td>{user.doj}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}