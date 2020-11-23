import React, {useEffect} from "react";
import ReactDatePicker from "react-datepicker";
import { useStateValue } from "../reducer/StateProvider";
import { useExerciseValue } from "../reducer/ExerciseListProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
const EditExercise = () => {
  const [exercise, dispatch] = useStateValue();
  const [list, dispatchList] = useExerciseValue();
  const { id } = useParams();

  const currentExercise = list.find((item) => item.id === id);
  useEffect(() => {
        dispatch({
          type: "DESCRIPTION",
          payload: {
            description: currentExercise.description,
          },
        });
        dispatch({
          type: "DURATION",
          payload: {
            duration: Number(currentExercise.duration.slice(0, 1)),
          },
        });
  }, [])
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
    let { description, duration, date } = exercise;
    console.log(exercise)
    axios
      .post(`http://localhost:5000/exercises/${id}/update`, {
        username: currentExercise.username,
        description,
        duration,
        date,
      })
      .then((response) => {
        dispatchList({
          type: "UPDATE_EXERCISE",
          payload: {
            id,
            exercise: {
              username: currentExercise.username,
              description,
              duration,
              date,
            },
          },
        });
        console.log(response, "success");
        window.location = "/"
      })
      .catch((err) => console.log(err.message));
  };

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
