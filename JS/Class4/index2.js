//TRY-CATCH
let person = {
  fName: "Prachi",
  lName: "Polakhare",

  get fullName() {
    return `${fName} ${lName}`;
  },
  set fullName(value) {
    console.log(value);
    console.log(typeof value);
    console.log(typeof value !== String);

    if (typeof value !== "string") {
      throw new Error("This is not a string");
    }
    let pair = value.split(" ");
    this.fName = pair[0];
    this.lName = pair[1];
  },
};

//calling setter
try {
  // person.fullName = true;
  person.fullName = "prachi polakhare";
} catch (e) {
  alert(e);
}

//Reducing an array
let arr = [1, 2, 3, 4];
let total = 0;
for (let value of arr) {
  total += value;
}
console.log(total);

//0 will be initial value for accumulator
//If we dont write 0 the, accumulator will start from first value
let totalSum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Total Sum");
console.log(totalSum);
