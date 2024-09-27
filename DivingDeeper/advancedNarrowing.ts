// to run the script uncomment the block and run "npm run script -- ./DivingDeeper/advancedNarrowing.ts"

// *** --- GENERICS --- ***

// "namespace" is only used so declarations are not shared across related files.
namespace Generics {
  // // JavaScript conditionals used for narrowing are called "Type Guards"
  // const reverse = (value: string | string[]) => {
  //   // the "typeof value === 'string'" is an example of a "Type Guard"
  //   if (typeof value === "string") {
  //     return value.split("").reverse().join("");
  //   } else {
  //     return [...value].reverse();
  //   }
  // };

  // console.log(reverse("123")); // logs 321
  // console.log(reverse(["1", "2", "3"])); // logs ['3', '2', '1']

  // -------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------------------

  // *** --- MORE COMPLEX VALUES --- ***

  // When you are narrowing a "class"
  // class Person {
  //   firstName: string;
  //   lastName: string;

  //   constructor(firstName: string, lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  // }

  // class Company {
  //   name: string;

  //   constructor(name: string) {
  //     this.name = name;
  //   }
  // }

  // // using the operator "instanceof" can be a powerful way to "narrow" your method.
  // function greet(entity: Person | Company) {
  //   if (entity instanceof Person) {
  //     console.log(`Hello ${entity.firstName} ${entity.lastName}`);
  //   } else {
  //     console.log(`Hello ${entity.name}`);
  //   }
  // }

  // greet(new Person("Austin", "Ewell")); // logs 'Hello Austin Ewell'
  // greet(new Company("Vue School")); // logs 'Hello Vue School'

  // -------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------------------

  // When narrowing an 'interface'
  interface Person {
    firstName: string;
    lastName: string;
  }

  interface Company {
    name: string;
  }

  // Instead of checking if the "entity" in an "instanceof" a "Person", we can check if "entity" has particular properties using the "in" operator
  function greet(entity: Person | Company) {
    if ("firstName" in entity) {
      console.log(`Hello ${entity.firstName} ${entity.lastName}`);
    } else {
      console.log(`Hello ${entity.name}`);
    }
  }

  greet({ firstName: "Austin", lastName: "Ewell" }); // logs 'Hello Austin Ewell'
  greet({ name: "Vue School" }); // logs 'Hello Vue School'
}
