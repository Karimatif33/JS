
// const updateTotalPrice = () => {
//   const AllProducts = document.querySelectorAll(".product")

// let total = 0

// AllProducts.forEach(item => {
//   const price  = Number(item.getElementsByClassName("price")[0].innerText.replace("$", ""))
  
  
//   const quantity  = Number(item.getElementsByClassName("input-quantity")[0].value)
  

//   total = total + (price*quantity)

// });

// document.getElementById("total-price").innerText = `  ${total}  $`
// }






//  const container = document.getElementById("container")
//  container.addEventListener("change", (eo) => {
   
//   updateTotalPrice()
//  })


//  const calc = document.getElementById("calc")
//  calc.addEventListener("click", (eo) => {
   
//   updateTotalPrice()
//  })

 

const container = document.getElementById("container")
const calc = document.getElementById("calc")
const allproduct = document.querySelectorAll(".product")



calc.addEventListener("click" , (eo) => {
const totalPrice = document.getElementById("total-price")
    let  total = 0
    allproduct.forEach((item) => {
        const price = Number (item.getElementsByClassName("price")[0].innerText.replace("$",""))  
        const quantity = Number (item.getElementsByClassName("input-quantity")[0].value)
            total = total + (price*quantity)
            console.log(total)
            totalPrice.innerHTML=` ${total} $ `  

        });
    
})








