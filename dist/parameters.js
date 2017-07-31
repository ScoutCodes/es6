'use strict';

function greet(greeting, name) {
  console.log(greeting + ', ' + name);
}

greet('Hi', 'Bill');
greet(undefined, 'Bill');
greet();

function sum() {

  console.log(arguments instanceof Array); //false

  var sum = 0;

  Array.prototype.forEach.call(arguments, function (value) {
    sum += value;
  });

  console.log(sum);
}

sum(5, 7, 2, 10);

function summ() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  console.log(values instanceof Array); //true

  var summ = 0;
  values.forEach(function (value) {
    summ += value;
  });

  console.log(summ);
}

summ(5, 7, 2, 11);

function summm() {
  for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  console.log(values.reduce(function (preValue, currentValue) {
    return preValue + currentValue;
  }));
}

summm(5, 7, 2, 12);