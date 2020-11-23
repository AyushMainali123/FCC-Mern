import {useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import EditExercise from './components/EditExercise';
import ExercisesList from './components/ExercisesList';
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (      
    <Router>
      <Navbar />
      <br />
      <Switch>
        <Route path="/" component={ExercisesList} exact={ true}/>
        <Route path="/edit/:id" component={EditExercise}/>
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Switch>
    </Router>
  );
}

export default App;
