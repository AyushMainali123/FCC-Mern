import React from "react";
import ReactDatePicker from "react-datepicker";
const EditExercise = () => {
  const exercise = {};
  const handleDescriptionChange = (e) => {};
  const handleDurationChange = (e) => {};
  const handleDateChange = (date) => {};
  const handleSubmit = (e) => {};
  return (
    <div className="createExercise">
      <h4 className="bold text-center">Edit Exercise</h4>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
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

export default EditExercise;
