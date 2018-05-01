function init() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
 var template = Handlebars.compile(formTemplate)
 document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
  //put any page initialization/handlebars initialization here
}


Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
 Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
function createRecipe(){
  
}
function updateRecipe(){
  
}