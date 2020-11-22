import React, { useEffect, useReducer, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import reducer from "../reducer/reducer";
const CreateExercise = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Ayush",
    },
    {
      id: 2,
      username: "Alisha",
    },
    {
      id: 3,
      username: "Anish",
    },
    {
      id: 4,
      username: "Ishwor",
    },
    {
      id: 5,
      username: "Sabina",
    },
  ]);

  const [exercise, dispatch] = useReducer(reducer, {
    username: "",
    description: "",
    duration: 5,
    date: new Date(),
  });

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
    let username = users.find((user) => user.id == e.target.value).username;
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
      if (exercise.username == '') {
          console.log("Error")
          return;
      }
  };
  return (
    <div className="createExercise">
      <h4 className="bold text-center">Create New Exercise</h4>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="username">Users</label>
          <select
            className="form-control"
            value = {exercise.username ? exercise.username : 0}
            onChange={(e) => handleSelectChange(e)}
            required
          >
            <option value="0" disabled>
              {" "}
              ----Plase Select Option From Dropdown----
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
          <ReactDatePicker
            id="schedule"
            className="form-control"
            required
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
