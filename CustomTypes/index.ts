// to run the script uncomment the block and run "npm run script -- ./CustomTypes/index.ts"

// *** --- TYPE ALIASES --- ***

// type Sizes = "small" | "medium" | "large"; // Creates the type "Sizes" and sets what the acceptable literal types are.

// function setProductSize(size: Sizes) { // We can use the type alias "Size" in place of the union literal.
//   console.log(`Setting product size of ${size}`);
// }

// setProductSize("small"); // logs "Setting product size of small"

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// type Product = { // You can use type aliases on object literals, but its better to use "interfaces"
//   name: string,
//   price: number
// }

// const tshirt: Product = {
//   name: 'T-shirt Design B',
//   price: 12
// }

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// *** --- INTERFACES --- ***

// The primary difference between "interface" and "type" aliases is interfaces can be modified by declaring the interface again.

// interface Product {
//   name: string,
//   price: number
//   color?: string // "color?" states that the color property is optional.
// }

// // interface Product { // This is not considered best practice unless you are working with 3rd party libraries.
// //   color: string // instead of declaring the interface and adding a property, it is best practice to just add the property to the original interface.
// // }

// const tshirt: Product = {
//   name: 'T-shirt Design B',
//   price: 12
// }

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// *** --- EXTENDING INTERFACES --- ***

// interface InventoryItem {
//   name: string;
//   price: number;
// }

// interface Product extends InventoryItem {
//   //Adds the optional property of "color" to an "Inventory Item" to create a "Product"
//   color?: string;
// }

// interface Service extends InventoryItem {
//   // Adds the required fields of "startTime" and "endTime" to an "InventoryItem" to create a "Service"
//   startTime: Date;
//   endTime: Date;
// }

// const tshirt: Product = {
//   name: "T-shirt Design B",
//   price: 12,
// };

// const photoShoot: Service = {
//   name: "Kelly Wedding Photo Shoot",
//   price: 450,
//   startTime: new Date("May 9, 2009 11:00:00"),
//   endTime: new Date("May 9, 2009 11:00:00"),
// };

// function purchaseItem(item: InventoryItem): InventoryItem { // We are now declaring that this method will return the required properties of "InventoryItem"
//   console.log(`The price of the item is ${item.price}`);
//   return item;
// }

// // All of the below methods will work because the argument, 'tshirt' variable and 'photoshoot' variable all have the required shape of "InventoryItem"
// purchaseItem({
//   name: "thing",
//   price: 1,
// }); // logs 'The price of the item is 1'

// purchaseItem(tshirt); // logs 'The price of the item is 12'

// purchaseItem(photoShoot); // logs 'The price of the item is 450'

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// *** --- ENUMS --- ***

// enums written like this are known as "numeric enums" because each value of the enum is auto incremented in numbers.
// enum Sizes {
//   small, //0
//   medium, //1
//   large, //2
// }

// console.log(Sizes.small); // logs 0
// console.log(Sizes);
// // logs:
// // {
// //   '0': 'small',
// //   '1': 'medium',
// //   '2': 'large',
// //   small: 0,
// //   medium: 1,
// //   large: 2
// // }

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// You can assign literal values to enums

// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

// console.log(Sizes); // logs { small: 'small', medium: 'medium', large: 'large' }

// -------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

// Heterogeneous Enums are when you combine numeric enum with a literal enum.

// enum Sizes {
//   small,
//   medium = "medium",
//   large = "large",
// }

// console.log(Sizes); // logs { '0': 'small', small: 0, medium: 'medium', large: 'large' }
