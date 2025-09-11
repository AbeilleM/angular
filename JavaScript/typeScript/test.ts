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