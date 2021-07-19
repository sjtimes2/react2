import { useState } from "react"

export default function UserForm() {
  
  const [userform, setUserForm] = useState({firstname: "Shubham"});
  const handleEvent = function (event) {
    console.log(event);
    setUserForm({...userform, firstname:event.target.value})
  }
  
  return (
    <div>
      <h3>Create User</h3>
      <input value={userform.firstname} onChange={handleEvent}></input>
    </div>
  )
}