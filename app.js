console.log("Write your code below!")

function sayHello(name){
  console.log(`Hello, ${name}`)
}

function letterCount(name){
  const count = name.length;
    const greeting = `${name}, your name has ${count} letters.`
    const longCount = 6;

    if(count < longCount){
      console.log(greeting + " That name's not that long!");
    } else {
      console.log(greeting + " That's a pretty long name!");
    }
}

function greetPeople(names){
  for (var i = 0; i < names.length; i++) {
    const name = names[i];
    sayHello(name);
    letterCount(name);
  }
}

function speakingGrandma(phrase){
  if(phrase.toUpperCase() === phrase){
    console.log('NO, NOT SINCE 1938!');
  }else{
    console.log('HUH? SPEAK UP, DEAR!');
  }
}


function kebabToTitleCase(filenames){
  let newFileNames = [];
  for (let i = 0; i < filenames.length; i++) {
    let filename = filenames[i];
    let words = filename.split('-');
    let newFileName = [];
    for (let k = 0; k < words.length; k++) {
      let word = words[k];
      word = word.charAt(0).toUpperCase() + word.slice(1);
      newFileName.push(word);
    }
    newFileName = newFileName.join('')
    console.log(newFileName)
    newFileNames.push(newFileName);
  }

  return newFileNames;
}

//Write your test cases below this comment
sayHello('Ann'); // Hello, Ann;
sayHello('Reuben'); // Hello, Reuben;

letterCount('Ann'); // Ann, your name has 3 letters. That name's not that long!
letterCount('Reuben'); // Reuben, your name has 6 letters. That's a pretty long name!

greetPeople(["Ann", "Reuben"])

speakingGrandma('Hello, grandma'); // HUH? SPEAK UP, DEAR!
speakingGrandma('HELLO, GRANDMA'); // NO, NOT SINCE 1938!

console.log(kebabToTitleCase(['hello-there.txt', 'another-file.txt', 'multiple-words-together.jpg']));


//do not editing anything below this comment.
module.exports = {
  sayHello,
  letterCount,
  greetPeople,
  speakingGrandma,
  kebabToTitleCase
};
