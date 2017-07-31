function greet(greeting, name) {
  console.log(`${greeting}, ${name}`);
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


function summ(...values) {
  console.log(values instanceof Array); //true

  let summ = 0;
  values.forEach(function (value) {
    summ += value;
  });

  console.log(summ);
}

summ(5, 7, 2, 11);

function summm(...values) {
  console.log(values.reduce(function (preValue, currentValue) {
    return preValue + currentValue;
  }));
}

summm(5, 7, 2, 12);