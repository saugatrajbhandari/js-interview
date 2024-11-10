function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };
// speak.call(whiteRabbit, "hello");
// whiteRabbit.speak("yolo");

const finder = {
  find(array) {
    return array.some((item) => item === this.value);
  },

  value: 4,
};

console.log(finder.find([4, 5]));
