function greet(name) {
  console.log(`Hello ${name}`.toUpperCase() );
}

greet('scout');

function createEmail(to, from, subject, message) {
  console.log(`
    To: ${to}
    From: ${from}
    Subject: ${subject}
    Message: ${message}
  `)
}

createEmail('johnny@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');

function add(x, y) {
  console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add('1', '2');

let name = 'Billy';
console.log(upperName`Hello ${name}`);

function upperName(literals, value, ...values) {
  return literals[0] + value.toUpperCase();
}