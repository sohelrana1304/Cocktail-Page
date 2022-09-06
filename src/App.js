import { useState, useEffect } from 'react';
import './Styles/App.css';
import List from './List';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="


function App() {

  const [drinkList, setDrinkList] = useState([]);
  const [input, setInput] = useState('');

  const fetchUserData = () => {
    fetch(url)
    .then((data) => data.json())
    .then((data) => {setDrinkList(data.drinks)})
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => fetchUserData());

  return (
    <div className="App">
      <Router>
        <div className = "header">
          <Link to = "/" className = "link">Home</Link>
        </div>    
      
        <Switch>
          <Route exact path = "/">
            <div id = "search-bar-container">
              <input type = "text" placeholder = "Search" className = "search-field" id = "search-bar" value = {input} onChange = {handleInputChange}></input>
              <button id = "search-button"><i className = "fas fa-search fa-2x"></i></button>
            </div>
            <List drinkList = {drinkList} input = {input}/>
          </Route>
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
