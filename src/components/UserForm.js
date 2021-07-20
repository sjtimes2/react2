import axios from "axios";
import { useState } from "react"

export default function UserForm() {

  const [userform, setUserForm] = useState({ firstname: "Shubham", age: 20 });
  const handleEvent = function (event) {
    setUserForm({ ...userform, [event.target.name]: event.target.value })
  }


  const save = function (event) {
    console.log(userform);
    const promise = axios.post("http://localhost:4200/users", userform);
    promise.then(function (response) {
      console.log(response);
    })
  }

  return (
    <div className="form-group">
      <h3>Create User</h3>
      <input placeholder="first name" name='firstname' value={userform.firstname} onChange={handleEvent}></input>
      <input placeholder="age" type="number" name='age' value={userform.age} onChange={handleEvent}></input>
      Joining Date: <input name="doj" value={userform.joiningDate} type="date" onChange={handleEvent}></input>
      <button onClick={save}>Save</button>
    </div>
  )
}