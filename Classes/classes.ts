// to run the script uncomment the block and run "npm run script -- ./Classes/classes.ts"

// *** CLASSES ***

// "namespace" is only used so declarations are not shared across related files.
namespace Classes {
  enum Sizes {
    small,
    medium = "medium",
    large = "large",
  }

  // This does not make TypeScript happy because there is no current value being set for the "Product" properties.
  // class Product {
  //   name: string
  //   price: number
  //   color: string
  //   size: Sizes
  // }

  // Ways to remedy this issue

  // class Product {
  //   name: string // Will Error
  //   price: number  // Will Error
  //   color: string  // Will Error
  //   size?: Sizes  // Setting size as optional so no value needs to be set.
  // }

  // Which is the same as

  // class Product {
  //   name: string // Will Error
  //   price: number // Will Error
  //   color: string // Will Error
  //   size: Sizes | undefined // This allows the size property to be undefined or in other words optional.
  // }

  // We can also set literal values to class properties

  // class Product {
  //   name: string // Will Error
  //   price: number // Will Error
  //   color: string = 'gray'
  //   size: Sizes | undefined
  // }

  // If we cant set a literal value to the properties then we need to pass them through a "constructor"

  class Product {
    name: string;
    price: number;
    color: string = "gray";
    size: Sizes | undefined;

    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }

    // You can also add methods inside of a class
    buy(): this {
      // ": this" allows the "buy()" method to be chainable.
      console.log(this.price);
      return this;
    }
  }

  const tshirt = new Product("TShirt Design B", 18);
  tshirt.size = Sizes.medium;
  tshirt.color = "green";
  tshirt.buy(); // logs 18
}
