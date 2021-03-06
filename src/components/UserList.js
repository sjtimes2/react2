import axios from "axios";
import { useEffect, useState } from "react"
import { deleteSingleUser, getAllUsers } from "../service";
import Counter from "./Counter";

export default function Userlist() {
  const [users, setUsers] = useState([]);
  const [flags, setFlags] = useState(true);

  useEffect(() => {
    console.log('called......................');
    getAllUsers(response => setUsers(response.data))
  }, [])

  const deleteUser = function () {
    deleteSingleUser( this ,() => {
      users.splice(arguments[0], 1);
      const users1 = [...users];
      setUsers(users1);
    })
  }

  const sortByAge = () => {
    setFlags(!flags)
    users.sort((user1, user2) => flags ? user1.age - user2.age : user2.age - user1.age);
    const users1 = [...users];
    setUsers(users1);
  }

  return (
    <div>
      {/* <Counter count={users.length}></Counter> */}
      <table className=' table table-compact table-bordered table-hover table-responsive table-striped'>
        <thead>
          <tr><th>First name</th>
            <th onClick={sortByAge.bind()}>Age</th>
            <th>Joining Date</th>
            <th>Skill</th>
            <th>Action</th></tr>
        </thead>
        <tbody>
          {users.map((user, index) => <tr key={user.id}>
            <td>{user.firstname}</td>
            <td>{user.age}</td>
            <td>{user.joiningDate}</td>
            <td>{user.skill}</td>
            <td><button className='btn btn-danger' onClick={deleteUser.bind(user.id, index)}>Delete</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}