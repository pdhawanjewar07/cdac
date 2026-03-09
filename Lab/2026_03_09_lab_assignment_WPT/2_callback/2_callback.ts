

function greet(name: string, callback: () => void): void {
  console.log("Hello " + name);

  setTimeout(() => {
    console.log("==== Executed callback after 2 seconds ====");
    callback();
  }, 2000);
}

function sayBye(): void {
  console.log("Goodbye");
}

greet("John", sayBye);




