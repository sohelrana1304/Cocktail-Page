import './Styles/List.css';
import Item from './Item';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import ItemPage from './ItemPage.js';


const List = ({drinkList, input}) => {
    return(
        <Router>
            <Switch>
                <Route path = "/:id" children = {<ItemPage drinkList = {drinkList}/>}></Route>
            </Switch>

            <div className = "List">
                {drinkList
                .filter((drinkObj) => drinkObj.strDrink.toLowerCase().includes(input))
                .map((drinkObj) => {
                    return <Link to = {`/${drinkObj.idDrink}`}><Item key = {drinkObj.idDrink} drinkObj = {drinkObj}/></Link>
                })}
            </div>       
        </Router>
    );
}

export default List;