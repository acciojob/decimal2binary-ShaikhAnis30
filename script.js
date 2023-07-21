function decimalToBinary(num) {
  //Write you code here
  let binary = '';
  while (num > 0) {
    let rem = num%2;
    binary = rem + binary;
    num = Math.floor(num/2);
  }
  return binary;
}

window.decimalToBinary = decimalToBinary;
