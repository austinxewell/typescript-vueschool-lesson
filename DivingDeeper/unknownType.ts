// to run the script uncomment the block and run "npm run script -- ./DivingDeeper/unknownType.ts"

// *** --- UNKNOWN TYPE --- ***

// "namespace" is only used so declarations are not shared across related files.
namespace UnknownType {
  // "unknown" is akin to "any" but is more type safe.
  // "any" allows for ambiguity
  // "unknown" requires specifics

  function getNetPrice(
    price: number,
    discount: number,
    format: boolean
  ): unknown {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
  }

  // const netPrice = getNetPrice(20, 10, true)
  // netPrice.toUpperCase() // Throws error because even though the method "getNetPrice()" can return an "unknown" type, it still expects the const to have a declaration.

  const netPrice = getNetPrice(20, 10, true) as string;
  netPrice.toUpperCase(); // This does not show an error because we have declared the const "as string"
}
