import { getRandomCocktail } from './api'
import _ from 'lodash'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')

  _.times(8).forEach(async () => {
    const { body: { drinks } } = await getRandomCocktail()

    drinks.forEach(({ strDrink,strInstructions, strDrinkThumb,strIngredient1,
    strIngredient2,strIngredient3, strIngredient4,strIngredient5,strIngredient6,
    strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,
    strIngredient12,strIngredient13,strIngredient14,strIngredient15}) => {

      const drinkBlock = document.createElement('div')
      drinkBlock.setAttribute('class','drinks-block')

      const drinksNames = document.createElement('div')
      drinksNames.setAttribute('class','drinks-block__drinks-names')
      const drinkText = document.createTextNode(strDrink)
      drinksNames.appendChild(drinkText)

      const drinksImages = document.createElement('img')
      drinksImages.setAttribute('class','drinks-block__drink-image')
      drinksImages.setAttribute('src',strDrinkThumb)

      const ingredientsList = document.createElement('ul')
      ingredientsList.setAttribute('class','drinks-block__drink-ingredient')

      const instructionBlock = document.createElement('div')
      const drinkInstruction = document.createTextNode(strInstructions)
      instructionBlock.appendChild(drinkInstruction)
      instructionBlock.setAttribute('class','drinks-block__instruction-block')

      root.appendChild(drinkBlock)
      drinkBlock.appendChild(drinksNames)
      drinkBlock.appendChild(drinksImages)
      drinkBlock.appendChild(instructionBlock)

      for (let i = 1; i < 16; i++) {
       if (eval('strIngredient'+i) != null && eval('strIngredient'+i) != '' && eval('strIngredient'+i) != undefined) {
          const li = document.createElement('li')
          const listItem = document.createTextNode(eval('strIngredient'+i))
          li.appendChild(listItem)
          ingredientsList.appendChild(li)
          drinkBlock.appendChild(ingredientsList)
       }
      }
    })
  })
})