import React from "react";
import {Link} from 'react-router-dom'
const Card = (list) => {
  const { id, username, description, duration, date } = list.list;
  return (
    <div className="card" id={id}>
      <div className="card-body">
        <h5 className="card-title">{username}'s Exercise</h5>
        <h6 className="card-subtitle mb-2 text-muted">For {date}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">Duration: {duration}</p>
        <Link to={`edit/${id}`} className="card-link">
          Edit
        </Link>
        <button className = "btn btn-danger mx-4">Delete</button>
      </div>
    </div>
  );
};

export default Card;
