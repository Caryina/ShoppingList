const itemInput = document.querySelector(".item-input");
const itemButton = document.querySelector(".item-button");
const itemList = document.querySelector(".item-list");
const sortAsc = document.querySelector(".sortAsc");
const sortDesc = document.querySelector(".sortDesc");

itemButton.addEventListener("click", addItem);
itemList.addEventListener("click", markCheck);
sortAsc.addEventListener("click", sortAscendent);
sortDesc.addEventListener("click", sortDescendent);

function addItem(event) {
  event.preventDefault();

  // items div
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  // create li
  const newItem = document.createElement("li");
  newItem.innerText = itemInput.value;
  newItem.classList.add("items");
  itemDiv.appendChild(newItem);

  // check mark button
  const markButton = document.createElement("button");
  markButton.innerHTML = '<i class="fas fa-check"> </i>';
  markButton.classList.add("mark-btn");
  itemDiv.appendChild(markButton);

  // check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
  trashButton.classList.add("trash-btn");
  itemDiv.appendChild(trashButton);

  //append to list
  itemList.appendChild(itemDiv);

  //clear item-input value
  itemInput.value = "";
}

function markCheck(e) {
  const mark = e.target;

  //check mark
  if (mark.classList[0] === "mark-btn") {
    const todo = mark.parentElement;
    todo.classList.toggle("marked");
  }

  // delete item
  if (mark.classList[0] === "trash-btn") {
    const todo = mark.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
}

function sortAscendent() {
  var items = itemList.childNodes;
  var itemsArr = [];
  for (var i in items) {
    if (items[i].nodeType == 1) {
      itemsArr.push(items[i]);
    }
  }

  itemsArr.sort(function (a, b) {
    return a.innerHTML == b.innerHTML ? 0 : a.innerHTML > b.innerHTML ? 1 : -1;
  });

  for (i = 0; i < itemsArr.length; ++i) {
    itemList.appendChild(itemsArr[i]);
  }
}

function sortDescendent() {
  var items = itemList.childNodes;
  var itemsArr = [];
  for (var i in items) {
    if (items[i].nodeType == 1) {
      itemsArr.push(items[i]);
    }
  }

  itemsArr.sort(function (a, b) {
    return a.innerHTML == b.innerHTML ? 0 : a.innerHTML < b.innerHTML ? 1 : -1;
  });

  for (i = 0; i < itemsArr.length; ++i) {
    itemList.appendChild(itemsArr[i]);
  }
}
