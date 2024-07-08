// variables
const submit = document.getElementById("button-add");
const input = document.getElementById("new-item");
const ul = document.getElementById("list-items");
const form = document.getElementById("shopping-list-form");
const clear = document.getElementById("button-clear");
let shoppingList = []; // array to store shopping list items

// event handler when the submit button is clicked
submit.addEventListener("click", function () {
  if (input.value.trim() === "") { // checks if input value is empty
    alert("Enter item!"); // if empty it alerts the use to enter an item
  } else { //if not empty, it adds the added item to the list, array
    shoppingList.push(input.value.trim());
    addListItem(input.value.trim());
  }
});

// adds a new list item
function addListItem(item) {
  const li = document.createElement("li"); // creates li element that'll display list items
  const liText = document.createTextNode(item); // creates node
  li.appendChild(liText); //appends text node to parent element(li)

  const deleteButton = document.createElement("button"); // creates a button to be used for deleting items off the list
  deleteButton.textContent = "x"; // adds "x" to the button to resemble "cut"
  deleteButton.classList.add("button-delete"); // adds class to the delete button

  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    li.remove();
    shoppingList.splice(shoppingList.indexOf(item), 1);
  });

  li.addEventListener("click", function () {
    li.classList.toggle("purchased"); 
  });

  ul.appendChild(li);
  input.value = "";
}

// prevents form submission on button click
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

// clears the list completely
clear.addEventListener("click", function () {
  ul.innerHTML = "";
});

// logs array to check for its existence
console.log(shoppingList);
