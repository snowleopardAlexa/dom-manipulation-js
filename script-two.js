const body = document.body 
const div = document.querySelector("div")
const spanKion = document.querySelector("#kion")
const spanKing = document.querySelector("#king")

spanKing.remove()
div.append(spanKing)

// second method
div.removeChild(spanKing)

// third method
spanKing.remove()

