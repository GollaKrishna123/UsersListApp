import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import usersList from './mockData.json'
function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="text-center">
        <h1>Users List</h1>
        <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      {usersList.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase())).map((user) =>
        <div className="user-card d-flex flex-row justify-content-center" key={user.id}>
          <div>
            <img className="user-card-image" src={user.image} />
          </div>
          <div className="user-card-details">
            <h5>{user.name}</h5>
            <h5>{user.role}</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
