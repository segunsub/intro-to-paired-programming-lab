# Pair Programming Practice

## Set Up

One partner should [fork this repo](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo). Then after it's been forked, [add the other partner(s) as collaborators](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository). Afterwards, all group members should be able to clone down the *forked repository* and all group members should be able to `push` and `pull` from that repository to their AWS environment. You can all work off the `master` branch, you do not need to create new branches unless you want to. 

## Instructions
Work with your partner to implement the functions under the "Problems" section below. Write your solution in the `app.js` file. For each exercise, one partner should be the Navigator and the other should be the Driver.

1. Navigator(s) should describe what the function should do. 
   * Describe, in plain English, what the function should take in as a parameter and what it should console.log or return.
2. Driver writes out the test cases.
   * For each problem, invoke the function with a parameter and describe the expected results.
   * We've suggested some test cases for the some of the problems, but you should come up with some of your own, too!
3. Navigator(s) explains how to implement the function while Driver writes the code so those test cases pass!
4. Driver tests the code, does some refactoring if needed, or adds additional test cases if desired.

Switch roles for each of the problems below. Once you finish this problem, the driver should commit and push your code up to Github. Verify that your changes are in the remote repo, then have your group members pull those changes down. 

## How do I know if the code is working?
1. You should manually test your code by running the program. From the project's root directory, type `node app.js` in the terminal and see if the program does out what you expect it to.
2. You should also run the automated test cases built into this lab.
   * From the project's root directory, type and run `npm install` in your terminal. Each partner only need to do this once.
   * Then, every time you want to run the automated test cases, run `npm test` in the terminal.

#### Confused about anything?
* Watch this [video tutorial](https://youtu.be/bIbXFKnrQj4) on how to to set up and do paired programming activites. 

## Problems

1. Write a function called `sayHello` that takes in one parameter, a person's name, and logs a greeting to the console based on their name.

```js
sayHello('Ann'); // Hello, Ann;
sayHello('Reuben'); // Hello, Reuben;
```

2. Write a function called `letterCount` that takes in one parameter, a person's name, and logs a greeting including the number of letters to the console. If the name is longer than four letters, it should say `"That's a pretty long name!"`, otherwise, it should say `"That name's not that long!"`

```js
letterCount('Ann'); // Ann, your name has 3 letters. That name's not that long!
letterCount('Reuben'); // Reuben, your name has 6 letters. That's a pretty long name!
```

3. Write a function called `greetPeople` that takes in an array of names as an argument. For each name, we should log a greeting to the console based on their name, and a greeting based on the number of letters. **You should leverage the methods you've already written**. As a best practice, programmers follow the DRY (Don't Repeat Yourself) principle.

For example, `greetPeople(["Ann", "Reuben"])` should log these four lines to the console.
```js
greetPeople(["Ann", "Reuben"])
//Hello, Ann
//Ann, your name has 3 letters. That name's not that long!
//Hello, Reuben
//Reuben, your name has 6 letters. That's a pretty long name!
```

4. Write a function called `speakingGrandma` that takes in a string. Whatever you say to grandma (whatever you type in), she should respond with `'HUH?! SPEAK UP, DEAR!'`', unless you shout it (type in all capitals). If you shout, she can hear you (or at least she thinks so) and yells back, `'NO, NOT SINCE 1938!'` In either case, you should log her message to the console.

```js
speakingGrandma('Hello, grandma'); // HUH? SPEAK UP, DEAR!
speakingGrandma('HELLO, GRANDMA'); // NO, NOT SINCE 1938!
```

**Hint**: Use MDN documentation on [toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

Run `npm test` in the terminal to see if you've done problems 1 thorugh 4 correctly. If you get an error `sh: jest: command not found npm ERR! Test failed.  See above for more details`, run `npm install` in your terminal, then try running `npm test` again.

## Challenge Problem

5. Write a function called `kebabToTitleCase` that takes in an array of file names in `kebab-case`. For each file name, it console.logs the file name transformed into `TitleCase`. At the end of the function, it should also **return** a new array containing all the TitleCase files names!

```js
kebabToTitleCase(['hello-there.txt', 'another-file.txt', 'multiple-words-together.jpg'])
// HelloThere.txt
// AnotherFile.txt
// MultipleWordsTogether.jpg
=> [ 'HelloThere.txt', 'AnotherFile.txt', 'MultipleWordsTogether.jpg' ]
```

**Hint**: Use the following MDN documentation:
* [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
* [join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
* [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
* [charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
