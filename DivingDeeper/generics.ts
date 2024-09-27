// to run the script uncomment the block and run "npm run script -- ./DivingDeeper/generics.ts"

// *** --- GENERICS --- ***

// "namespace" is only used so declarations are not shared across related files.
namespace Generics {
  interface Person {
    name: string;
    age: number;
  }

  const me: Person = {
    name: "Austin",
    age: 31,
  };

  // const clone = (value: any) => {
  //   const json = JSON.stringify(value)
  //   return JSON.parse(json)
  // }

  // const myClone = clone(me)

  //When we try to reference the const "myClone" and use TypeScripts LSP (Language Server Protocol) autofill, it will not grab the declared properties of "Person" or const "me". This is because we have declared the argument of the method "clone()" to be type "any". TypeScript will not know what LSP to autofill.

  // const clone = (value: Person): Person => {
  //   const json = JSON.stringify(value)
  //   return JSON.parse(json)
  // }

  // Restructuring the "clone()" method to have the argument type of "Person" and have the "clone()" method return a "Person" will give TypeScript enough information to have access to the LSP autofill.
  // const myClone = clone(me)
  // myClone.

  // -------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------------------

  // *** --- INTRODUCTION TO GENERICS --- ***

  // First, we create whats called a "Type" variable. This variable does not need to be named "Type". It is commonly shortened to "T"
  // The "Type" in the angle brackets act like a method argument.
  // Next, we declare that the "value" parameter should be the variable type "Type"
  // Lastly, we declare that the response of the "clone()" method should be the exact same type.
  const clone = <Type>(value: Type): Type => {
    const json = JSON.stringify(value);
    return JSON.parse(json);
  };

  const myClone = clone(me);
  // myClone. // This will have the same affect with the LSP autofill except this will work with multiple forms of data responses and not just a declared type of "Person".

  const books: string[] = ["Harry Potter", "Jurrassic Park", "Goodnight Moon"];
  const bookCopies = clone<string[]>(books);
  // bookCopies. // This example shows that since we are using the "generic" that TypeScript is smart enough to know that "bookCopies" is a type of "string[]"
}
