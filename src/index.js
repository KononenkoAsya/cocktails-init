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

      const drink_block = document.createElement('div')
      drink_block.setAttribute('id','drinks_block')

      const drinks_names = document.createElement('div')
      drinks_names.setAttribute('id','drinks_names')
      const drink_text = document.createTextNode(strDrink)
      drinks_names.appendChild(drink_text)

      const drinks_images = document.createElement('img')
      drinks_images.setAttribute('id','drinkImage')
      drinks_images.setAttribute('src',strDrinkThumb)

      const ingredients_list = document.createElement('ul')
      ingredients_list.setAttribute('id','ingredient')

      const instruction_block = document.createElement('div')
      const drink_instruction = document.createTextNode(strInstructions)
      instruction_block.appendChild(drink_instruction)
      instruction_block.setAttribute('id','instruction_block')

      root.appendChild(drink_block)
      drink_block.appendChild(drinks_names)
      drink_block.appendChild(drinks_images)
      drink_block.appendChild(instruction_block)

      for (let i = 1; i < 16; i++) {
       if (eval('strIngredient'+i) != null && eval('strIngredient'+i) != '' && eval('strIngredient'+i) != undefined) {
          const li = document.createElement('li')
          const list_item = document.createTextNode(eval('strIngredient'+i))
          li.appendChild(list_item)
          ingredients_list.appendChild(li)
          drink_block.appendChild(ingredients_list)
       }
      }
    })
  })
})