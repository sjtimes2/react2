import axios from "axios";
import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
import { getAllSkills, postSingleUser } from "../service";
import Messages from "./Messages";
import Userlist from "./UserList";
export default function UserForm() {

  const [userform, setUserForm] = useState({ firstname: "Shubham", age: 20 });
  const [messages, setMessages] = useState({ myMessage: "Default Message" });
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getAllSkills(response => setSkills(response.data));
  }, [])

  const handleEvent = function (event) {
    setUserForm({ ...userform, [event.target.name]: event.target.value })
  }

  const save = function (event) {
    console.log(userform);
    postSingleUser(userform, function (response) {
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
        <option defaultValue value="default">Select the skill</option>
        {
          skills.map((skill) => {
            return <option value={skill}>{skill}</option>
          })
        }
      </select>

      <Button onClick={save} >Save</Button>

    </div>
  )
}