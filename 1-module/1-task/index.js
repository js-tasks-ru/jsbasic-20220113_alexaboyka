function factorial(n) {
  let f;

  if (n === 0) {f = 1;}
  else {
    f = 1;
    for (let i = n; i !== 1; i--) {
      f = f * i;
    }}

  return f;
}
