import React, {useEffect, useState} from "react";
import Card from "./Card";
import axios from 'axios'
import {useExerciseValue} from '../reducer/ExerciseListProvider'
import {useStateValue} from '../reducer/StateProvider'

const ExercisesList = () => {
  const [lists, dispatch] = useExerciseValue()
  const [fetched, setFetched] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getDatas = () => {
      axios("http://localhost:5000/exercises")
        .then((res) => {
          let humanReadableData = res.data.map((data) => {
            const id = data._id;
            let { username, description, duration } = data;
            duration = `${duration} minutes`;
            const options = { year: "numeric", month: "long", day: "numeric" };
            const date = new Date(data.date).toLocaleString(undefined, options);
            return { id, username, description, duration, date };
          });
          humanReadableData.forEach((data) => {
            dispatch({
              type: "ADD_EXERCISE",
              payload: {
                exercise: data,
              },
            });
          });
          setIsLoading(false);
          setFetched(true);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    }
    getDatas()
    return () => getDatas()
  }, [])


  const renderCards = () => {
    if (isLoading === true) {
      return (
        <h5 className="text-center lead mt-4">
          Exercise are loading.... Please Wait!!!
        </h5>
      );
    }
    if (fetched) {
      if (lists.length) {        
        return (
          <div>
            {lists.map(list => <Card key={list.id} list={list} />)}
          </div>
        )  
      }
      return (
        <h5 className="text-center lead mt-4">
          There are no exercises in the list!
        </h5>
      );
    }
    return (
      <h5 className="text-center lead mt-4">
        Sorry failed to load data! Please check your internet connection!!
      </h5>
    );
  }

  return (
    <div className="exerciseList">
      <h4 className="text-center">All Exercises</h4>
      {renderCards()}
    </div>
  )
};

export default ExercisesList;
