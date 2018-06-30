/* global document */
import { getRandomCocktail } from './api';
import _ from 'lodash';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const titleIngredients = document.createElement('p');
  const titleText = document.createTextNode('Cocktails card ')
  titleIngredients.setAttribute('class', 'title-ingredients');
  titleIngredients.appendChild(titleText);
  root.appendChild(titleIngredients);
  
  _.times(8).forEach(async () => {
    const { body: { drinks } } = await getRandomCocktail()

    drinks.forEach(({ strDrink, strInstructions, strDrinkThumb, ...ingredients}) => {

      const drinkBlock = document.createElement('div');
      drinkBlock.setAttribute('class', 'drinks-block');

      const imageBlock = document.createElement('div');
      const drinksImages = document.createElement('img');
      imageBlock.setAttribute('class', 'image-block drinks-block__image-block');
      drinksImages.setAttribute('class', 'drink-image image-block__drink-image');
      drinksImages.setAttribute('src', strDrinkThumb);
      imageBlock.appendChild(drinksImages);

      const drinkInfo = document.createElement('div');
      drinkInfo.setAttribute('class', 'info-block drinks-block__info-block');

      const drinksNames = document.createElement('div');
      drinksNames.setAttribute('class', 'drinks-names info-block__drinks-names');
      const drinkText = document.createTextNode(strDrink);
      drinksNames.appendChild(drinkText);

      const ingredientsList = document.createElement('ul');
      ingredientsList.setAttribute('class', 'drink-ingredient list-block__drink-ingredient');
      const listBlock = document.createElement('div');
      listBlock.setAttribute('class', 'list-block info-block__list-block');

      const textIngredients = document.createElement('p')
      const text = document.createTextNode('Ingredients: ')
      textIngredients.setAttribute('class', 'text-ingredient info-block__text-ingredient');
      textIngredients.appendChild(text);

      const instructionBlock = document.createElement('div');
      const drinkInstruction = document.createTextNode(strInstructions);
      instructionBlock.appendChild(drinkInstruction);
      instructionBlock.setAttribute('class', 'instruction-block info-block__instruction-block');

      root.appendChild(drinkBlock);
      drinkBlock.appendChild(imageBlock);
      drinkBlock.appendChild(drinkInfo);
      drinkInfo.appendChild(drinksNames);

      let filteredArray = Object.keys(ingredients).filter((ingredienttsFilter) => ingredienttsFilter.match(/^strIngredient\w*$/))
      filteredArray.forEach((keyIngredient) => {
        if(ingredients[keyIngredient]) {
          let li = document.createElement('li');
          li.setAttribute('class', 'list-ingredient drink-ingredient__list-ingredient');
          let listItem = document.createTextNode(ingredients[keyIngredient]);
          li.appendChild(listItem);
          ingredientsList.appendChild(li);
        }
      });
      drinkInfo.appendChild(textIngredients);
      listBlock.appendChild(ingredientsList);
      drinkInfo.appendChild(listBlock);
      drinkInfo.appendChild(instructionBlock);
      });
    });
  });
