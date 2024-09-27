// to run the script uncomment the block and run "npm run script -- ./DivingDeeper/typeAssertions.ts"

// *** --- TYPE ASSERTIONS --- ***

// "namespace" is only used so declarations are not shared across related files.
namespace TypeAssertions {
  // We can use the "as" statement to let typescript know the specific element type.
  // const theCanvas = document.getElementById('the-canvas') as HTMLCanvasElement

  // We create a method where depending on the "format" argument we return either a number or a string
  function getNetPrice(
    price: number,
    discount: number,
    format: boolean
  ): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
  }

  // Since we know that the format argument is "true" we know that the const "netPrice" will always return a string. We set that with the "as" statement
  const netPrice = getNetPrice(20, 10, true) as string;

  // This is the alternate expression but does the same thing.
  // const netPrice = <string> getNetPrice(20, 10, true)

  // ALL type assertions are removed at compile-time.
}
