import { useState } from "react";
import axios from 'axios'

const CreateUser = () => {
  const [username, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/users/add', {username})
      .then(res => {
        console.log(res)
        window.location = '/'
      })
      .catch(err => {
      console.log(err.message)
    })
  };
  return (
    <div className="createUser">
      <h4 className="text-center">Create New User</h4>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
