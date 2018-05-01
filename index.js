function init() {
  //put any page initialization/handlebars initialization here
}


Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
