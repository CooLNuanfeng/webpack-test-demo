require('../scss/demo.scss');

var person = require('./data');

document.body.innerHTML = '<div>姓名：'+person.name+'，年龄：'+person.age+'</div>';
