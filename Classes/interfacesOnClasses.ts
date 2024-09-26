// to run the script uncomment the block and run "npm run script -- ./Classes/interfacesOnClasses.ts"

// *** --- IMPLEMENTING INTERFACES ON CLASSES --- ***

// "namespace" is only used so declarations are not shared across related files.
namespace InterfacesOnClasses {
  enum Sizes {
    small,
    medium = "medium",
    large = "large",
  }

  // Create an interface with the required fields to make something "Emailable"
  interface Emailable {
    emailBody(): string; // Even methods type can be described
    emailSubject(): string;
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
  }

  // By implementing "Emailable" we are promising to provide the "Service" class everything it needs to make a "Service" "Emailable".
  class Service extends InventoryItem implements Emailable {
    startTime: Date;
    endTime: Date;

    constructor(name: string, price: number, startTime: Date, endTime: Date) {
      super(name, price);
      this.startTime = startTime;
      this.endTime = endTime;
    }

    // Since we and "implemented" the "Emailable interface we need to set the required properties of "emailBody" and "emailSubject"
    emailBody(): string {
      return `Thank you for purchasing ${this.name}. Your appointment is from ${this.startTime} - ${this.endTime}`;
    }

    emailSubject(): string {
      return `${this.name} | My Company`;
    }
  }

  // We can even create a method using the interface "Emailable" to be sure we will have the properties needed to successfully send an email.
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

  // An error will be thrown because "tshirt" is a "Product" and Product does not extend "Emailable". This means TypeScript knows that we can not promise to have all required fields since the "emailObj" argument in the method "sendEmail()" is declared to have an "Emailable" argument.
  // sendEmail(tshirt, 'daniel@vueschool.io')

  // This method will not throw an error because "photoShoot" is a "Service" and Service extends the required "Emailable" argument.
  sendEmail(photoShoot, "daniel@vueschool.io"); // will return:

  // To: daniel@vueschool.io
  // Subject: Kelly Wedding Photo Shoot | My Company
  // Message: Thank you for purchasing Kelly Wedding Photo Shoot. Your appointment is from Sat May 09 2009 11:00:00 GMT-0600 (Mountain Daylight Time) - Sat May 09 2009 12:30:00 GMT-0600 (Mountain Daylight Time)
}
