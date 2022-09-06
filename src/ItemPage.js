import {useParams} from 'react-router-dom';
import './Styles/ItemPage.css';

const ItemPage = ({drinkList}) => {
    const {id} = useParams();
    const drinkObj = drinkList.filter((drink) => drink.idDrink === id)[0];
    let ingredients = [];
    for(let i = 1; i < 15; i++){
        ingredients.push(drinkObj[`strIngredient${i}`])
    }
    

    return(
        <div className = "ItemPage" id = "ItemPage">
            <img id = "item-page-img" src = {drinkObj.strDrinkThumb} alt = {drinkObj.strDrink}/>
            <div id = "info">
                <h1>Name: {drinkObj.strDrink}</h1>
                <h2 className = "Item-page-info-text"><strong>Category:</strong> {drinkObj.strCategory}</h2>
                <h2 className = "Item-page-info-text"><strong>Type:</strong> {drinkObj.strAlcoholic}</h2>
                <h2 className = "Item-page-info-text"><strong>Glass:</strong> {drinkObj.strGlass}</h2>
                <h2 className = "Item-page-info-text"><strong>Instructions:</strong> {drinkObj.strInstructions}</h2>
                <h2 className = "Item-page-info-text"><strong>Ingredients:</strong> {ingredients.filter(d => d !== null).map((d, i) => { return `${d}, `})}</h2>
            </div>
        </div>
    );
};

export default ItemPage;