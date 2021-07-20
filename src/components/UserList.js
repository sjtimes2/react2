import axios from "axios";
import { useEffect, useState } from "react"
import Counter from "./Counter";

export default function UserList() {

  function myfun(event) {
    console.log(event);
  }

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
      <Counter count={users.length}></Counter>
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>First name</th>
            <th>Age</th>
            <th>Joining Date</th>
            <th>Skill</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(function (user, index) {
            return <tr key={index}>
              <td>{user.firstname}</td>
              <td>{user.age}</td>
              <td>{user.doj}</td>
              <td>{user.skill}</td>
              <td><button className="btn btn-danger" onClick={myfun}>Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}