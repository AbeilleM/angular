"use strict";
function check(td) {
    console.log(td.title);
}
const toDoTest = { id: 1, title: 'test', done: true };
check(toDoTest);
function getFirstElementTypedArray(list) {
    return list[0];
}
const numberList = [1, 2, 3];
const firstElOfNumberList = getFirstElementTypedArray(numberList);
console.log(firstElOfNumberList);
//# sourceMappingURL=test.js.map