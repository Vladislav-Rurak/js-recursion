function pow(base, exponent) {
  if (exponent == 1) {
    return base;
  } else {
    return (
      base * pow(base, exponent - 1)
    );
  }
}

function bracketWrapper(count) {
  console.log("{");
  if (count >= 1) {
    bracketWrapper(count - 1);
  }
  console.log("}");
}
