
let resetta = document.getElementById("resetta");
let element = document.getElementById("element");
let decrementa = document.getElementById("decrementa")
let bonne = document.getElementById("bonne")

let count = 0;
let tema = localStorage.getItem("count");
    element.textContent = tema
console.log(tema);


bonne.addEventListener("click" ,function (){
    count += 5;
    element.textContent = count;
})



let Incrementa = document.getElementById("incrementa")
Incrementa.addEventListener("click", function() {
    count ++;
    console.log(count)
    element.textContent = count;

    localStorage.setItem("count", count );
    


//il faut Element puisse etre egale a compteur 
//apres faire un localStage

});

decrementa.addEventListener("click" , function(){
    count --;
    console.log(count)
    element.textContent = count;
    localStorage.setItem("count", count );

})

resetta.addEventListener("click" , function(){
    count = 0;
    console.log(count)
    element.textContent = count;
    localStorage.setItem("count", count );


})

