import { useState } from "react"

export default function UserForm() {

  const [userform, setUserForm] = useState({ firstname: "Shubham", age: 20 });
  const handleEvent = function (event) {
    setUserForm({ ...userform, firstname: event.target.value })
  }

  const handleEventForAge = function (event) {
    setUserForm({ ...userform, age: event.target.value })
  }

  const save = function (event) {
    console.log(userform);
  }

  return (
    <div>
      <h3>Create User</h3>
      <input value={userform.firstname} onChange={handleEvent}></input>
      <input value={userform.age} onChange={handleEventForAge}></input>
      <button onClick={save}>Save</button>
    </div>
  )
}