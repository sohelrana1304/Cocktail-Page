import './Styles/Item.css';


const Item = ({drinkObj}) => {
    return(
        <div className = "Item">
            <div id = "title">
                <h2>{drinkObj.strDrink}</h2>
                <h3>{drinkObj.strCategory}</h3>
            </div>
            <img src = {drinkObj.strDrinkThumb} alt = {drinkObj.strDrink} id = "thumbnail"/>
        </div>      
    );
}

export default Item;