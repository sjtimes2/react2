import axios from "axios"

export function getAllSkills(successCB) {
    axios.get(process.env.REACT_APP_SERVER_SKILLS_URL)
        .then(successCB)
}

export function postSingleUser(userform, successCB) {
    axios.post(process.env.REACT_APP_SERVER_URL, userform)
        .then(successCB)
}

export function getAllUsers(successCB) {
    axios.get(process.env.REACT_APP_SERVER_URL)
        .then(successCB)
}

export function deleteSingleUser(userId, successCB) {
    axios.delete(process.env.REACT_APP_SERVER_URL+userId)
        .then(successCB)
}