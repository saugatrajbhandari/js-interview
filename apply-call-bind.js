// this keyword is used for self referencing

let userDetails = {
  name: "saugat",
  age: 14,
  designation: "Software Engineer",
  printDetails: function (age) {
    console.log(`${this.age} ${this.name} ${this.designation} ${age}`);
  },
};

const newObj = {
  age: 43,
  name: "ram",
};

userDetails.printDetails.call(newObj, "");

function printName() {
  console.log(this.name);
}

printName.call({ name: "ram" });
