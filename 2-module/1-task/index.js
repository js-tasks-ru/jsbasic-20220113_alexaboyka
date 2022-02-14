function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let key in salaries) {
    if (typeof (salaries[key]) === 'number' && Number.isFinite(salaries[key])) {
      sum = sum + salaries[key];}
  }
  return sum;
}
