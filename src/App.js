import './App.css';
import User from "./User.jsx"
import users from "./users.json"

function App() {
  return (
    <div>
       <User who={users[0]}/>
    </div>
  );
}

export default App;
