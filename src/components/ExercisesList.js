import React, {useState} from "react";
import Card from "./Card";

const ExercisesList = () => {

  const [lists, setList] = useState([{
      id: 10,
      username: 'Ayush',
      description: 'Good Boy',
      duration: 15,
      date: new Date().toDateString()
    }
  ])
 console.log(lists.forEach(list => console.log(list)))
  return (
    <div className="exerciseList">
      <h4 className="text-center">All Exercises</h4>
      <div>
      {
        lists.map(list => <Card key={list.id} list={{...list}} />)
      }
      </div>
    </div>
  )
};

export default ExercisesList;
