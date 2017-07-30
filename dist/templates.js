'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
  console.log(('Hello ' + name).toUpperCase());
}

greet('scout');

function createEmail(to, from, subject, message) {
  console.log('\n    To: ' + to + '\n    From: ' + from + '\n    Subject: ' + subject + '\n    Message: ' + message + '\n  ');
}

createEmail('johnny@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');

function add(x, y) {
  console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

add('1', '2');

var name = 'Billy';
console.log(upperName(_templateObject, name));

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}