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

function test() {
    console.log('test');
}