// add/append elements to the page
const body = document.body 
// appendChild and append are similar but with appendChild you can only append(add): div, spans, encor tags, NOT STRINGS
// append will let you to append everything and STRINGS
body.append("Hello Alexa", "Bye")

// how to append element
// we only created a reference to an element here 
const div = document.createElement('div')
// now we add div to the page
body.append(div)
// how to show the added element on the page
div.innerText = "Hello, I just appended element and showed it on the page"