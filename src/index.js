/* global document */
import _ from 'lodash';
import { getRandomCocktail } from './api';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  _.times(8).forEach(async () => {
    const { body: { drinks } } = await getRandomCocktail();

    drinks.forEach(({
      strDrink, strInstructions, strDrinkThumb, ...ingredients
    }) => {
      const drinkBlock = document.createElement('div');
      drinkBlock.setAttribute('class', 'drinks-block root__drinks-block');


      const drinksNames = document.createElement('div');
      drinksNames.setAttribute('class', 'drinks-names drinks-block__drinks-names');
      const drinkText = document.createTextNode(strDrink);
      drinksNames.appendChild(drinkText);

      const drinksImages = document.createElement('img');
      drinksImages.setAttribute('class', 'drink-image drinks-block__drink-image');
      drinksImages.setAttribute('src', strDrinkThumb);

      const ingredientsList = document.createElement('ul');
      ingredientsList.setAttribute('class', 'drink-ingredient drinks-block__drink-ingredient');

      const instructionBlock = document.createElement('div');
      const drinkInstruction = document.createTextNode(strInstructions);
      instructionBlock.appendChild(drinkInstruction);
      instructionBlock.setAttribute('class', 'instruction-block drinks-block__instruction-block');

      root.appendChild(drinkBlock);
      drinkBlock.appendChild(drinksNames);
      drinkBlock.appendChild(drinksImages);
      drinkBlock.appendChild(instructionBlock);

      const filteredArray = Object.keys(ingredients).filter(ingredienttsFilter => ingredienttsFilter.match(/^strIngredient\w*$/));
      filteredArray.forEach((keyIngredient) => {
        if (ingredients[keyIngredient]) {
          const li = document.createElement('li');
          const listItem = document.createTextNode(ingredients[keyIngredient]);
          li.appendChild(listItem);
          ingredientsList.appendChild(li);
        }
      });
      drinkBlock.appendChild(ingredientsList);
    });
  });
});
