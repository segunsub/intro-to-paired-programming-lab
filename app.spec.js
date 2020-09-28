const app = require(`./app`);

beforeEach(() => {
  console.log = jest.fn();
});

describe("sayHello", () => {
  test("should exists", () => {
    expect(app.sayHello).toBeDefined();
  });

  test("should log 'Hello, Ann' to the console when invoked with argument 'Ann'", () => {
    app.sayHello("Ann");
    expect(console.log).toHaveBeenCalledWith('Hello, Ann');
  });

  test("should log 'Hello, Reuben' to the console when invoked with argument 'Reuben'", () => {
    app.sayHello("Reuben");
    expect(console.log).toHaveBeenCalledWith('Hello, Reuben');
  });

  test("should log 'Hello, Maya' to the console when invoked with argument 'Maya'", () => {
    app.sayHello("Maya");
    expect(console.log).toHaveBeenCalledWith('Hello, Maya');
  });

  test("should not hard-code what is being logged to the console", () => {
    app.sayHello("Reuben");
    expect(console.log).not.toHaveBeenCalledWith('Hello, Ann');
  });
});

describe("letterCount", () => {
  test("should exists", () => {
    expect(app.letterCount).toBeDefined();
  });

  test("should log 'Ann, your name has 3 letters. That name's not that long!' to the console when invoked with argument 'Ann'", () => {
    app.letterCount("Ann");
    expect(console.log).toHaveBeenCalledWith("Ann, your name has 3 letters. That name's not that long!");
  });

  test("should log 'Reuben, your name has 6 letters. That's a pretty long name!' to the console when invoked with argument 'Reuben'", () => {
    app.letterCount("Reuben");
    expect(console.log).toHaveBeenCalledWith("Reuben, your name has 6 letters. That's a pretty long name!");
  });

  test("should log 'Maya, your name has 4 letters. That name's not that long!' to the console when invoked with argument 'Ann'", () => {
    app.letterCount("Maya");
    expect(console.log).toHaveBeenCalledWith("Maya, your name has 4 letters. That name's not that long!");
  });

  test("should not hard-code what is being logged to the console", () => {
    app.letterCount("Reuben");
    expect(console.log).not.toHaveBeenCalledWith("Ann, your name has 3 letters. That name's not that long!");
  });
});

describe("greetPeople", () => {
  test("should exists", () => {
    expect(app.greetPeople).toBeDefined();
  });

  test("should log the correct messages to the console when given 'Ann' and 'Reuben'", () => {
    app.greetPeople(["Ann", "Reuben"])
    expect(console.log).toHaveBeenCalledWith('Hello, Ann');
    expect(console.log).toHaveBeenCalledWith("Ann, your name has 3 letters. That name's not that long!");
    expect(console.log).toHaveBeenCalledWith('Hello, Reuben');
    expect(console.log).toHaveBeenCalledWith("Reuben, your name has 6 letters. That's a pretty long name!");
    expect(console.log).not.toHaveBeenCalledWith('Hello, Ian');
  })

  test("should log the correct messages to the console when given 'Ian' and 'Maya'", () => {
    app.greetPeople(["Ian", "Maya"])
    expect(console.log).toHaveBeenCalledWith('Hello, Ian');
    expect(console.log).toHaveBeenCalledWith("Ian, your name has 3 letters. That name's not that long!");
    expect(console.log).toHaveBeenCalledWith('Hello, Maya');
    expect(console.log).toHaveBeenCalledWith("Maya, your name has 4 letters. That name's not that long!");
    expect(console.log).not.toHaveBeenCalledWith('Hello, Ann');
  })
});

describe("speakingGrandma", () => {
  test("should exists", () => {
    expect(app.speakingGrandma).toBeDefined();
  });

  test("should log 'HUH? SPEAK UP, DEAR!' to the console if the input phrase is 'Hello, grandma'", () => {
    app.speakingGrandma('Hello, grandma')
    expect(console.log).toHaveBeenCalledWith('HUH? SPEAK UP, DEAR!');
    expect(console.log).not.toHaveBeenCalledWith('NO, NOT SINCE 1938!');
  })

  test("should log 'NO, NOT SINCE 1938!' to the console if the input phrase is 'HELLO, GRANDMA'", () => {
    app.speakingGrandma('HELLO, GRANDMA')
    expect(console.log).not.toHaveBeenCalledWith('HUH? SPEAK UP, DEAR!');
    expect(console.log).toHaveBeenCalledWith('NO, NOT SINCE 1938!');
  })

  test("should log 'HUH? SPEAK UP, DEAR!' to the console if the input phrase is 'ABCDe'", () => {
    app.speakingGrandma('ABCDe')
    expect(console.log).toHaveBeenCalledWith('HUH? SPEAK UP, DEAR!');
    expect(console.log).not.toHaveBeenCalledWith('NO, NOT SINCE 1938!');
  })
});
