pow();

function pow(base, exponent) {
  if (exponent > 0 || exponent == 1) {
    return base(base * exponent - 1);
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
