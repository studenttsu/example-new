// Переменные

// Примитивные
// string
// number
// boolean
// undefined - переменная не инциализирована, не объявлена
// null - ничего
// Symbol

// Сложные
// object

let name = 'Иван';
const age = 20;
const surName = 'Иванов';

// Пример хранения объекта в переменной как ссылка
const user = {
  name: 'Иван',
  lastName: 'Иванов',
  age: 20,
  isAdmin: true,
  getFullName() {
    return `${this.lastName} ${this.name}`;
  }
};

console.log(user.getFullName())

const user2 = user;
user.name = 'Алексей';
// console.log(user2.name);

if (user2 === user) {
  // console.log('ОБъекты равны');
}

const a;

if (a === undefined) {
  ///
} else if (a === null) {
  ///
} else if (a === null) {
  ///
} else {
  ///
}

switch (a) {
  case undefined: 
    ///;
    break;

  case null:
      ////
      break;

  default: ///;
}

// объекты и массивы передаются по ссылке

const colors = ['grey', 'pink', 'blue'];
const a = Array();

for (let i = 0; i < colors.length; i++) {
  // console.log(i, colors[i]);
}

for (let item of colors) {
  // console.log(item);
}

for (let key in user) {
  // console.log(key, user[key]);
}

//-----------------------

let count = 0;

while (count < 5) {
  // console.log(count);
  count++;
}


// Function
/**
 * Получет полную строку имени.
 * @param {object} user
 * @param {string} user.name
 * @param {string} user.lastName
 * @param {number} user.age
 * @param {boolean} user.isAdmin
 */
function getFullName(user) {
  if (!user) {
    throw new Error('Объект пользователя не передан');
  }

  return `${user.lastName} ${user.name}`;
}

const _getFullName = user => `${user.lastName} ${user.name}`;

function doSomething(anotherFunction) {
  anotherFunction(123);
}

doSomething(function(count) {
  console.log(count); // 123
});

const fullName = getFullName(user);
console.log(fullName);

// Classes
// const user = {
//   name: 'Иван',
//   lastName: 'Иванов',
//   age: 20,
//   isAdmin: true,
//   getFullName() {
//     return `${this.lastName} ${this.name}`;
//   }
// };

class User {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.lastName} ${this.name}`;
  }
}

const ivan = new User('Иван', 'Иванов', 20);
const lena = new User('Елена', 'Иванова', 18);

console.log(ivan, ivan.getFullName());
console.log(lena, lena.getFullName());