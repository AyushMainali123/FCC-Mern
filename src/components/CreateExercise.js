import React, { useEffect, useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useStateValue } from "../reducer/StateProvider";

const CreateExercise = () => {

  const [users, setUsers] = useState([]);
  const [exercise, dispatch] = useStateValue()
  useEffect(() => {
    axios("http://localhost:5000/users/").then((response) => {
      setUsers(
        response.data.map(({ username, _id: id }) => ({
          username,
          id,
        }))
      );
      
    });
  }, []);

  const userOptions = (userArray) => {
    return userArray.map(({ username, id }) => {
      return (
        <option key={id} value={id}>
          {username}
        </option>
      );
    });
  };

  const handleSelectChange = (e) => {
    let username = users.find((user) => user.id === e.target.value).username;
    dispatch({
      type: "USERNAME",
      payload: {
        username,
      },
    });
  };

  const handleDescriptionChange = (e) => {
    dispatch({
      type: "DESCRIPTION",
      payload: {
        description: e.target.value,
      },
    });
  };

  const handleDurationChange = (e) => {
    dispatch({
      type: "DURATION",
      payload: {
        duration: e.target.value,
      },
    });
  };

  const handleDateChange = (date) => {
    dispatch({
      type: "DATE",
      payload: {
        date,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exercise.username === "") {
      console.log("Error");
      return;
    }
    console.log(exercise);
    axios.post('http://localhost:5000/exercises/add/', exercise)
      .then(response => {
        console.log(response)
        window.location = "/";
      })
    .catch(err => console.log(err.message))
  };
  return (
    <div className="createExercise">
      <h4 className="bold text-center">Create New Exercise</h4>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="username">Users</label>
          <select
            className="form-control"
            value={`${
              exercise.username
                ? users.find((_) => _.username === exercise.username).id
                : "0"
            }`}
            onChange={(e) => handleSelectChange(e)}
            required
          >
            <option value={"0"} disabled>
              {" "}
              ----Please Select A User From Dropdown----
            </option>
            {userOptions(users)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id="description"
            className="form-control"
            required
            value={exercise.description}
            onChange={(e) => handleDescriptionChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration in minutes</label>
          <input
            type="number"
            name=""
            id="duration"
            className="form-control"
            required
            value={exercise.duration}
            onChange={(e) => handleDurationChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="schedule">Schedule</label>
          <br />
          <ReactDatePicker
            id="schedule"
            className="form-control"
            minDate={new Date()}
            selected={exercise.date}
            onChange={(date) => handleDateChange(date)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
