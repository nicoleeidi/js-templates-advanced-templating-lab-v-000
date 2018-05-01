function init() {
  //put any page initialization/handlebars initialization here
}


Handlebars.registerHelper('display_ingredient', function() {
  if(this.state === "closed") {
    return new Handlebars.SafeString(this.body)
  } else {
    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
  }
})

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
