pow();

function pow(base, exponent) {
  if (exponent > 0 || exponent == 1) {
    return Math.pow(base, exponent);
  } else {
  }
}

bracketWrapper();

function bracketWrapper(count) {
  if (count >= 1) {
    console.log("{");
    bracketWrapper(count - 1);
    console.log("}");
  }
}

console.log("object :>> ");
