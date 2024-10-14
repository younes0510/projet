
let text = document.getElementById('text')
let result = document.getElementById('result')
let longueurPhrase = document.getElementById('longueurPhrase')

let nombreMots = document.getElementById('nombreMots')
let voyelles = document.getElementById('voyelles')

// longueur de la Phrase

let length = (text) => text.length

longueurPhrase.onclick = () => {

    result.innerText = length(text.value)
    result.style.color='red'
   
}
// nombre de Mots

let number = (text) => text.split(" ").length;

nombreMots.onclick = () => {

    result.innerText = number(text.value)
    result.style.color='red'
}
// vowels

let string = (text) => 'aeiouyAEIOUY'.includes(text)

voyelles.onclick= ()=> {

result.innerText = string(text.value)
    result.style.color='red'

}




let strings = 'hello world.';
let vowels = 0; 

for (let string of strings) {
    if ('aeiouyAEIOUY'.includes(string)) {
        vowels++;
    }
}

console.log(vowels);
    