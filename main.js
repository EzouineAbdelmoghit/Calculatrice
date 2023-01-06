var result=document.getElementById("result")
let equalBtn = document.querySelector(".equal")
let resetBtn = document.querySelector(".reset")
let op=["","+","-","/","*"]

var calc=""
result.value=""
document.querySelectorAll(".op").forEach(e=>{e.disabled=true})

document.querySelectorAll(".btn").forEach(elm => elm.onclick=function(e){
    calc+=e.target.innerHTML
    result.value=calc
    if(op.includes(result.value.slice(-1))){
        document.querySelectorAll(".op").forEach(e=>{e.disabled=true})
    }
    else document.querySelectorAll(".op").forEach(e=>{e.disabled=false})
})
resetBtn.addEventListener("click",function(){
    result.value=""
    calc=""
    document.querySelectorAll(".op").forEach(e=>{e.disabled=true})

})
result.addEventListener("keyup",function() {
    calc=result.value
    if(op.includes(result.value.slice(-1)) )
        document.querySelectorAll(".op").forEach(e=>{e.disabled=true})
    else{
        document.querySelectorAll(".op").forEach(e=>{e.disabled=false})
    }
})

equalBtn.addEventListener("click",function() {
    result.value=eval(result.value)
    calc=result.value
})
