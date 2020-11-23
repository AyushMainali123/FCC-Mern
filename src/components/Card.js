import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useExerciseValue } from "../reducer/ExerciseListProvider";
const Card = ({ list }) => {
  const { id, username, description, duration, date } = list;
  const [lists, dispatch] = useExerciseValue();
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => {
        dispatch({
          type: "DELETE_EXERCISE",
          payload: {
            id,
          },
        });
        window.location = "/";
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="card my-4" id={id}>
      <div className="card-body">
        <h5 className="card-title">{username}'s Exercise</h5>
        <h6 className="card-subtitle mb-2 text-muted">For {date}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">Duration: {duration}</p>
        <Link to={`edit/${id}`} className="card-link">
          Edit
        </Link>
        <button className="btn btn-danger mx-4" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
