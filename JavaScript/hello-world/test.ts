interface ToDoTS {
    id: number;
    title: string;
    done: boolean;
}

function check(td: ToDoTS) {
    console.log(td.title);
}

const toDoTest = { id: 1, title: 'test', done: true };
check(toDoTest);


function getFirstElementTypedArray(list: number[]) : number {

    return list[0];
}

const numberList = [1, 2, 3];

const firstElOfNumberList = getFirstElementTypedArray(numberList);
console.log(firstElOfNumberList);