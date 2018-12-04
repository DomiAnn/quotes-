/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var quotes =[
    {
        "quote": "To smutne, że głupcy są tacy pewni siebie, a ludzie rozsądni tacy pełni wątpliwości.",
        "author": "Bertrand Russel"
    },
    
    {
        "quote": "Jeśli problem jest do rozwiązania i możesz coś zrobić, nie ma potrzeby by się martwić. Jeśli nie jest możliwy do rozwiązania, martwienie się nie pomoże.",
        "author": "Dalajlama"
    },
    
    {
        "quote": "Rób to, co uważasz za stosowne. I tak zawsze znajdzie się ktoś, kto uważa inaczej.",
        "author": "Michell Obama"
    },
      
    {
        "quote": "Musicie od siebie wymagać, nawet gdyby inni od was nie wymagali.",
        "author": "Jan Paweł II"
    },
    
    {
        "quote": "Zawsze wydaje się, że coś jest niemożliwe, póki nie zostanie to zrobione.",
        "author": "Nelson Mandela"
    },
    
    {
        "quote": "Nie popełnia błędy tylko ten, kto nic nie robi",
        "author": "Teodor Roosevelt"
    },
    
    {
        "quote": "Motywacja pozwala wystartować. Nawyk utrzymuje w ruchu",
        "author": "Jim Ryun"
    },
    
    {
        "quote": "Nie uda się przepłynąć oceanu dopóki nie zdobędziesz odwagi, by stracić z oczu widok lądu.",
        "author": "Krzysztof Kolumb"
    },
    
    {
        "quote": "Gdy nie wiesz do jakiego portu płyniesz, żaden wiatr nie jest dobry.",
        "author": "Seneka"
    },
    
    {
        "quote": "Cel to nic innego, jak marzenie z terminem realizacji.",
        "author": "Joe L Griffith"
    },
    
    {
        "quote": "Jeśli nie potrafisz robić wielkich rzeczy, rób małe rzeczy w wielki sposób.",
        "author": "Napoleon Hill"
    }, 
    
    {
        "quote": "Początek jest najważniejszą częścią pracy.",
        "author": "Platon"
    },
    
    {
        "quote": "Jest tylko jeden sposób na uniknięcie krytyki: nic nie robić, nic nie mówić i być nikim.",
        "author": "Arystoteles"
    }
];


window.onload = function(){
var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

btn.addEventListener("click", getQuote);

function getQuote()
{
   var number =Math.floor(Math.random() * quotes.length);
    
   quote.innerHTML = '<span>„</span>' + quotes[number].quote + '<span>”</span>' ;
   author.innerHTML = '<span>~</span>' + quotes[number].author;
   
}
};

