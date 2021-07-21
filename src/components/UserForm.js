import axios from "axios";
import { useState } from "react"
import { Button } from 'react-bootstrap';
import Messages from "./Messages";
export default function UserForm() {

  const [userform, setUserForm] = useState({ firstname: "Shubham", age: 20 });
  const [messages, setMessages] = useState({ myMessage: "Default Message" });
  const handleEvent = function (event) {
    setUserForm({ ...userform, [event.target.name]: event.target.value })
  }

  const save = function (event) {
    console.log(userform);
    const promise = axios.post(process.env.REACT_APP_SERVER_URL, userform);
    promise.then(function (response) {
      setMessages({
        ...messages,
        myMessage: "Success!"
      })
      console.log(response);
    })
  }

  function handleSelectChange(event) {
    console.log(event.target.value);
    setUserForm({ ...userform, [event.target.name]: event.target.value })
  }

  return (
    <div className="form-group">
      <Messages message={messages.myMessage} />
      <h3>Create User</h3>

      <label htmlFor="firstname">First Name</label>
      <input className="form-control" placeholder="first name" name='firstname' value={userform.firstname} onChange={handleEvent}></input>
      <label htmlFor="age">Age</label>
      <input className="form-control" placeholder="age" type="number" name='age' value={userform.age} onChange={handleEvent}></input>
      <label htmlFor="doj">Joining Date: </label>
      <input className="form-control" name="doj" value={userform.joiningDate} type="date" onChange={handleEvent}></input>

      <select onChange={handleSelectChange} name="skill">
        <option value="default" defaultValue>Select the Skill</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>

      <Button onClick={save} >Save</Button>

    </div>
  )
}