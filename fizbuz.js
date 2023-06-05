function fizbuz(n) {
  let szoveg = "";
  for (let i = 1; i <= n; i++) {
    if (n == 0) {
      return "";
    } else if (n == 1) {
      return "1,";
    } else {
      if (i % 15 == 0) {
        szoveg += "fizz buzz, ";
      } else if (i % 3 == 0) {
        szoveg += "fizz, ";
      } else if (i % 5 == 0) {
        szoveg += "buzz, ";
      } else {
        szoveg += i + ",";
      }
    }
  }
  return szoveg
}
