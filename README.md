# Pair Programming Practice

Work with your partner to implement the below functions using pair programming! For each exercise, pass back and forth between partners for each step (this is sometimes called red-green-refactor).

1. First person writes out the test cases and describe what the function should do.
  * Describe, in plain English, what the function should take in as a parameter and what it should return.
  * We've given you some test cases for the some of the problems, but you'll need to come up with some of your own, too!
2. Second person implements the function so those test cases pass. Make the code work!
3. First person does some refactoring if needed, or adds additional test cases if needed.

Switch roles for each of the problems below.


## Problems

1. Write a function called `sayHello` that takes in one parameter, a person's name, and logs a greeting to the console based on their name.

```js
sayHello('Ann'); // Hello, Ann;
sayHello('Reuben'); // Hello, Reuben;
```

2. Write a function called `letter` that takes in one parameter, a person's name, and logs a greeting including the number of letters to the console. If the name is longer than four letters, it should say "That's a pretty long name!", otherwise, it should say "that name's not that long!"

```js
letterCount('Ann'); // Ann, your name has 3 letters. That name's not that long!
letterCount('Reuben'); // Reuben, your name has 6 letters. That's a pretty long name!
```

3. Write a function that takes in an array of names. For each name, we should log a greeting to the console based on their name, and a greeting based on the number of letters.

4. Write a function called `speakingGrandma` that takes in a string. Whatever you say to grandma (whatever you type in), she should respond with `'HUH?!  SPEAK UP, DEAR!'`', unless you shout it (type in all capitals). If you shout, she can hear you (or at least she thinks so) and yells back, `'NO, NOT SINCE 1938!'`

5. Write a function that takes in an array of file names in `kebab-case` and returns a new array with the filenames transformed into `camelCase`.
