// to run the script uncomment the block and run "npm run script -- ./BasicTypes/index.ts"

// *** --- IMPLICIT AND EXPLICIT TYPING --- ***

// let myNumber = 2 // Implicitly defining "myNumber" as type number
// let myString = 'Hello World' // Implicitly defining "myString" as type string

// let myNumber: number = 2 // Explicitly defining "myNumber" as type number
// let myString: string = 'Hello World' // Explicitly and "myString" as type string
// let canBeAnything: any = true // Explicitly defining "canBeAnything" the type "any" will allow you to change data types.

// const books: string[] = ['Harry Potter', 'Jurrasic Park', 'Goodnight Moon'] // Explicitly sets all items in array to type string

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// This code returns "22" because we are concatenating the string of "2" with the number 2
// function sum(x, y) {
//   return x + y;
// }

// console.log(sum("2", 2));

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// This code returns 4 since the argument types only allow numbers in the sum() method
// function sum(x: number, y: number): number { //"sum(): number" is explicitly defining the return of the method as a number
//   return x + y;
// }

// console.log(sum(2, 2));

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// *** --- USING DESTRUCTURING SYNTAX --- ***

// function sum({x,y} : {x: number, y: number}) : number {
//   return x + y
// }

// console.log(sum({x:2, y:2}))

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// *** --- GENERIC METHOD RESPONSES --- ***

// function log(value: any) : void { // Since nothing is returned we use the type "void"
//   console.log(value)
// }

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// *** --- OPTIONAL PARAMETERS --- ***

// function greet(name?: string): void {
//   // "name?" is stating the name argument is optional
//   if (name) {
//     console.log(`Hello ${name}`);
//   } else {
//     console.log("Hello Stranger");
//   }
// }

// greet("Austin Ewell"); // logs "Hello Austin Ewell"
// greet(); // logs "Hello Stranger"

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// *** --- UNION TYPES --- **

// let booleanOrString: string | boolean = 'I could change' //"sting | boolean" allows the variable to be either type string or boolean

// function printId(id: number | string) {
//   if(typeof id === 'string') { // This is known as "narrowing". It allows us to apply a method like ".toUpperCase()" that only works on strings when id can be either number or string
//     console.log(id.toUpperCase())
//   } else {
//     console.log(id)
//   }
// }

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// *** --- LITERAL TYPES --- ***

// let pi: 3.14 = 3.14 // This means "pi" cant be anything but the number 3.14
// const pi = 3.14 // this is the same as the above statement.

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// *** --- COMBINING UNION AND LITERAL TYPES --- ***

// function setProductSize(size: 'small' | 'medium' | 'large') { // This sets the arguments to only accept the specific string values of 'small', 'medium' or 'large
//   //... logic not important
// }

//  *** --- CLASSES --- ***
