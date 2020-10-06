var numbers = [-30, 14, 66, 21, 72, -4];
var numResult = [];

function numNew(number) {
  var that = this;

  this.number = numbers[i];

  this.ele = document.createElement("div");
  this.numEle = document.createElement("a");
  this.messEle = document.createElement("a");

  this.numEle.innerHTML = "The number is " + this.number;

  if (this.number < 0) {
    this.messEle.innerHTML += " and the number below 0";
  } else if (this.number > 50) {
    this.messEle.innerHTML += " and the number is greater than 50";
  } else if (this.number === 14) {
    this.messEle.innerHTML += " and the number equals 14";
  }

  this.numEle.addEventListener("click", function () {
    that.increaseNumber();
  });

  this.ele.appendChild(this.numEle);
  this.ele.appendChild(this.messEle);
  document.body.appendChild(this.ele);
}
numNew.prototype.increaseNumber = function () {
  this.number = this.number + 1;
  this.numEle.innerHTML = "The number is " + this.number;
};
for (var i = 0; i < numbers.length; i++) {
  numResult.push(new numNew(numbers[i]));
}