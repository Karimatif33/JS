const card = document.querySelector(".card")
console.log("card")
const jsa = document.querySelector(".jsa")
console.log("jsa")
const jsaa = document.querySelector(".jsaa")
const btn = document.querySelector(".btn1")
const con = document.querySelector(".bigger-contaier")
const btnr = document.querySelector(".btn-primary1")
const kh = document.querySelector(".kh")
const container = document.querySelector(".container")
const body = document.querySelector(".body")
const mode = document.querySelector(".mode")
const mode1 = document.querySelector(".mode1")

mode.addEventListener("click" , (eo) => {
    body.classList.add("dark")
    mode.style.display="none"
    mode1.style.display="block"

})
mode1.addEventListener("click" , (eo) => {
    body.classList.remove("dark")
    mode1.style.display="none"
    mode.style.display="block"

})
card.addEventListener("click" , (eo) => {
    con.classList.add("active")
    kh.style.display="none"
    eo.preventDefault()
    
})

btnr.addEventListener("click" , (eo) => {
    container.style.display="none"
    kh.style.display="block"



    setTimeout(() => {
        con.classList.remove("active")
    }, 2000 );
})

// card.addEventListener( "click" , (eo) => {
//     // con.style.display = ("block") 
//     con.classList.add("active")
//     eo.preventDefault()

// })

// btnr.addEventListener( "click" , (eo) => {
//     // con.style.display = ("none")
//     con.classList.remove("active")
// })

// card.addEventListener( "click" ,  (eo) => {
//     jsa.style.display=("block")
//     // jsa.setAttribute("class" , "jsaa")

// })


// btn.addEventListener ( "click" , (eo) => {
//     jsa.style.display=("none")

// })

// card.addEventListener("click" , (eo) => {
//     con.setAttribute ("open" ,"open")
// })
// btnr.addEventListener("click" , (eo) => {
//     con.renoveAttribute ("close" ,"a")
// })

