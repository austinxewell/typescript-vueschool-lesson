// to run the script uncomment the block and run "npm run script -- ./Classes/extendingClassTypes.ts"

// *** --- EXTENDING CLASSES --- ***

// "namespace" is only used so declarations are not shared across related files.
namespace ExtendingClasses {
  enum Sizes {
    small,
    medium = "medium",
    large = "large",
  }

  class InventoryItem {
    name: string;
    price: number;

    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }

    buy(): this {
      console.log(this.price);
      return this;
    }
  }

  class Product extends InventoryItem {
    color: string = "gray";
    size: Sizes | undefined;

    // Since were not adding anything to this example of the constructor, the constructor method is not necessary. This is here for example.
    // constructor(name: string, price: number) {
    //   super(name, price) // super will alway call the parent classes constructor
    //   // Other constructor logic needed for the "Product"
    // }
  }

  class Service extends InventoryItem {
    startTime: Date;
    endTime: Date;

    // The constructor must have all properties listed, even those being passed from the parent class.
    constructor(name: string, price: number, startTime: Date, endTime: Date) {
      super(name, price); // gets the value of the parent class properties.
      this.startTime = startTime;
      this.endTime = endTime;
    }
  }

  const tshirt = new Product("TShirt Design B", 18);
  tshirt.size = Sizes.medium;
  tshirt.color = "green";
  tshirt.buy(); // logs 18

  // create a Service name "photoShoot"
  const photoShoot = new Service(
    "Kelly Wedding Photo Shoot",
    450,
    new Date("May 9, 2009 11:00:00"),
    new Date("May 9, 2009 12:30:00")
  );

  photoShoot.buy(); // logs 450
}
