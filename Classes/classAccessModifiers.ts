// to run the script uncomment the block and run "npm run script -- ./Classes/classAccessModifiers.ts"

// *** --- Class Access Modifiers --- ***

// "namespace" is only used so declarations are not shared across related files.
namespace ClassAccessModifiers {
  enum Sizes {
    small,
    medium = "medium",
    large = "large",
  }

  interface Emailable {
    emailBody(): string;
    emailSubject(): string;
  }

  class InventoryItem {
    name: string;
    readonly price: number; // You can read the price anytime, but can not modify it outside of the class "InventoryItem"

    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }

    buy(): this {
      console.log(this.price);
      return this;
    }
  }

  // Visibility modifiers or access modifiers allow us to define visibility of our class properties or methods.

  // ALL access modifiers only exists at compile time.

  // default visibility is "public". This means we can get and set those properties from outside the class or method. Both the property "color" and "size" will have the same visibility. (see below example)

  // class Product extends InventoryItem {
  //   public color: string = "gray";
  //   size: Sizes | undefined;
  // }

  // The access modifier "protected" will only allow access to said properties and methods from the parent class or method. (see class "GreenProduct")

  // class Product extends InventoryItem {
  //   protected color: string = "gray";
  //   protected size: Sizes | undefined;
  // }

  // class GreenProduct extends Product {
  //   constructor(name: string, price: number) {
  //     super(name, price)
  //     this.color = 'green'
  //   }
  // }

  // "private" means that the property is ONLY accessible in the current class. This includes not being available in child classes.

  // class Product extends InventoryItem {
  //   private color: string = "gray";
  //   protected size: Sizes | undefined;
  // }

  // class GreenProduct extends Product {
  //   constructor(name: string, price: number) {
  //     super(name, price)
  //     this.color = 'green' // Since "color" has the visibility of "protected" this will throw an error
  //   }
  // }

  class Product extends InventoryItem {
    color: string = "gray";
    size: Sizes | undefined;
  }

  class Service extends InventoryItem implements Emailable {
    startTime: Date;
    endTime: Date;

    constructor(name: string, price: number, startTime: Date, endTime: Date) {
      super(name, price);
      this.startTime = startTime;
      this.endTime = endTime;
    }

    emailBody(): string {
      return `Thank you for purchasing ${this.name}. Your appointment is from ${this.startTime} - ${this.endTime}`;
    }

    emailSubject(): string {
      return `${this.name} | My Company`;
    }
  }

  function sendEmail(emailObj: Emailable, sendTo: string) {
    console.log(`To: ${sendTo}`);
    console.log("Subject:", emailObj.emailSubject());
    console.log("Message:", emailObj.emailBody());
  }

  const tshirt = new Product("TShirt Design B", 18);
  tshirt.size = Sizes.medium;
  tshirt.color = "green";
  tshirt.buy(); // logs 18

  const photoShoot = new Service(
    "Kelly Wedding Photo Shoot",
    450,
    new Date("May 9, 2009 11:00:00"),
    new Date("May 9, 2009 12:30:00")
  );

  photoShoot.buy(); // logs 450

  sendEmail(photoShoot, "daniel@vueschool.io");
  // log:
  // To: daniel@vueschool.io
  // Subject: Kelly Wedding Photo Shoot | My Company
  // Message: Thank you for purchasing Kelly Wedding Photo Shoot. Your appointment is from Sat May 09 2009 11:00:00 GMT-0600 (Mountain Daylight Time) - Sat May 09 2009 12:30:00 GMT-0600 (Mountain Daylight Time)
}
