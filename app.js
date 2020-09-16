console.log('Write your code below!')

// 1

function sayHello(name){
  const greeting = `Hello, ${name}`;
  console.log(greeting);
}
sayHello('Ann'); // Hello, Ann;
sayHello('Reuben'); // Hello, Reuben;

// 2

function letterCount(name){
  const count = name.length;
  const greeting = `${name}, your name has ${count} letters.`
  const longCount = 6;

  if(count < longCount){
    console.log(greeting + " That name's not that long!");
  } else {
    console.log(greeting + " That a pretty long name!");
  }
}
letterCount('Ann'); // Ann, your name has 3 letters. That name's not that long!
letterCount('Reuben'); // Reuben, your name has 6 letters. That's a pretty long name!

// 3

function greetPeople(names){
  for (var i = 0; i < names.length; i++) {
    const name = names[i];
    sayHello(name);
    letterCount(name);
  }
}

greetPeople(['Ann', 'Reuben']);
greetPeople(['Reuben', 'Ann', 'Ian']);

// 4

function speakingGrandma(phrase){
  if(phrase.toUpperCase() === phrase){
    return console.log('NO, NOT SINCE 1938!');
  }

  return console.log('HUH? SPEAK UP, SONNY!');
}
speakingGrandma('Hello, grandma!');
speakingGrandma('HELLO, GRANDMA');

// 5

function kebabToCamel(filenames){
  const newFileNames = [];
  for (let i = 0; i < filenames.length; i++) {
    const filename = filenames[i];
    const words = filename.split('-');
    const newFileName = [];
    for (let k = 0; k < words.length; k++) {
      let word = words[k];
      if(k !== 0){
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
      newFileName.push(word);
    }
    newFileNames.push(newFileName.join(''));
  }

  return newFileNames;
}
console.log(kebabToCamel(['hello-there.txt', 'another-file.txt', 'multiple-words-together.jpg']));
