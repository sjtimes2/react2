//import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './components/About'

// function App() {
//   return (
//     <div>
//       <UserForm />
//       <UserList></UserList>
//     </div>
//   );
// }

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <div>
              <UserForm />
              <UserList />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
