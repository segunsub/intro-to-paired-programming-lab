//console.log("Write your code below!")

function sayHello(name){
  console.log(`Hello, ${name}`)
}

function letterCount(name){
let count = name.length
if (count > 4){
  console.log(`${name}, your name has ${count} letters. That's a pretty long name!`) 
}else {
  console.log(`${name}, your name has ${count} letters. That name's not that long!`) 
}
};


function greetPeople(names){
  for(let i=0; i<names.length; i++) {
    sayHello(names[i]);
    letterCount(names[i]);
  }
}


function speakingGrandma(phrase){
if (phrase == phrase.toUpperCase()) {
  console.log('NO, NOT SINCE 1938!') 
}else {
  console.log( 'HUH? SPEAK UP, DEAR!')
}
};


function kebabToTitleCase(filenames){

};

//Write your test cases below this comment
 //sayHello('Ann')
 //letterCount('Ann')
 //sayHello('Segun')
 //letterCount("Segun")
 //sayHello('Catalina')
 //letterCount('Catalina')
 //greetPeople(["Ann", "segun", "Catalina"]);
 speakingGrandma('hello')
 speakingGrandma('HELLO')

//do not editing anything below this comment.
module.exports = {
  sayHello,
  letterCount,
  greetPeople,
  speakingGrandma,
  kebabToTitleCase
};