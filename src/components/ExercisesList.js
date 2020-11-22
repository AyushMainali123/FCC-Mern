import React, {useEffect, useState} from "react";
import Card from "./Card";
import axios from 'axios'



const ExercisesList = () => {

  const [lists, setList] = useState([])

  useEffect(() => {
    axios('http://localhost:5000/exercises')
      .then(res => {
        let humanReadableData = res.data.map((data) => {
          const id = data._id
          let { username, description, duration } = data;
          duration = `${duration} minutes`
          const options = { year: "numeric", month: "long", day: "numeric" };
          const date = new Date(data.date).toLocaleString(undefined, options)
          return {id, username, description, duration, date}
        });
        setList(humanReadableData)
    })
    
  }, [])

  useEffect(() => {
    lists.map(list => delete list._id)
  }, [lists])
  return (
    <div className="exerciseList">
      <h4 className="text-center">All Exercises</h4>
      {
        lists.length ? (<div>
      {
        lists.map(list => <Card key={list.id} list={{...list}} />)
      }
      </div>) : <h5 className = "text-center lead mt-4">There are no exercises in the list!</h5>
      }
      
    </div>
  )
};

export default ExercisesList;
