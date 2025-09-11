let myHeading = document.querySelector("h1");
myHeading.textContent = "Bonjour, monde !";

async function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    const currentList = document.getElementById("titleList");

    for (let i of result) {
        console.log(i.title);

        let newLine = document.createElement("li");
        let newLineContent = document.createTextNode(i.title);

        newLine.appendChild(newLineContent);

        document.body.insertBefore(newLine, currentList);
    }


    // console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

async function getDataToDoList() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    
    const currentList = document.getElementById("titleList");

    const result = await response.json();

    const listeToDo = Array();

    for (let td of result) {
      listeToDo.push(new ToDo(td.id, td.title, false));
  }

  for (let toDoEl of listeToDo) {

    currentList.appendChild(toDoEl.addInList());
  }

  console.log(listeToDo);
}

function test() {
    console.log('test');
}