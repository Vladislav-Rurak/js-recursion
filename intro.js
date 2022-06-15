pow();

function pow(base, exponent) {
  if (exponent > 0 || exponent == 1) {
    return Math.pow(base, exponent);
    // return base * exponent;
  } else {
    alert("Ты пидор");
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
