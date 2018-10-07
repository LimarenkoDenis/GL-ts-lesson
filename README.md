## TS lesson

```
npm run COMMAND
"dev:w": "webpack-dev-server -w --progress --colors",
"build": "webpack",
"test": "jest",
"test:watch": "npx jest --watch"
```

- make a fork
- clone project
- Run `cd [projectName]` and  `npm i` commands
- copy src/noname directory, to src and rename it to your name
- you can extend or overwrite tslint or tsconfig by your own, but I recommend to use strict rules
- Write solutions for tasks described right bellow, pure functions, and cover them by unit tests
- lymarenko.denys - basic examples
- Make a PR
- Feel free to add interesting tasks and make a PR


***


Некоторые Задачки взяты из http://learn.javascript.ru, можете брать любые задачи, например из codewars
***
### Сумма свойств
Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0.

Например:
```
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

//... ваш код выведет 650
```


***
### Свойство с наибольшим значением
Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

Если объект пустой, то пусть он выводит «нет сотрудников».

Например:

```
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

// ... ваш код выведет "Петя"
```


***
### Умножьте численные свойства на 2
Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:
```
// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
P.S. Для проверки на число используйте функцию:

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
```



***
Create a function with two arguments that will return a list of length (n) with multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:
```
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
```


***
### Добавить класс в строку
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
```
var obj = {
  className: 'open menu'
}
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls и возвращает новый обьект, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"
P.S. Ваша функция не должна добавлять лишних пробелов.
```