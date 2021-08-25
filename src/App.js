//import './App.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Todo from './component/todo/todo';
import User from './component/user/User';


function App() {
  return (
    <div className="App">
      <Router>
          <ul>
            <li><NavLink to='/'>Todo</NavLink></li>
            <li><NavLink to='/users'>UserPosts</NavLink></li>
          </ul>
        <Switch>
          <Route exact path='/' component={Todo} />
          <Route exact path='/users' component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
