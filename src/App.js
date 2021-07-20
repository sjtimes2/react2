//import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Messages from './components/Messages';

function App() {
  return (
    <div>
      <UserForm />
      <UserList></UserList>
    </div>
  );
}

export default App;
