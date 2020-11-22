import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Card = (list) => {
  const { id, username, description, duration, date } = list.list;
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => console.log(res, "Deleted"))
      .catch((err) => console.log(err.messagee));
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
        <button className="btn btn-danger mx-4" onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
