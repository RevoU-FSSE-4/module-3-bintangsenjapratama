// existing variables
const taskListId = document.getElementById("taskList");
const newTaskId = document.getElementById("newTask");
const addTaskBtnId = document.getElementById("addTaskBtn");

// fetch API function
const getTaskData = async () => {
  const response = await fetch(
    "https://module3-api-is2m.onrender.com/random-todos"
  );
  return await response.json();
};

// add task
const addTask = () => {
  if (newTaskId.value === "") {
    newTaskId.placeholder = "You must add something";
  } else {
    let li = document.createElement("li");
    li.innerHTML = newTaskId.value;
    taskListId.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  taskListId.value = "";
};

// done / remove task completion
taskListId.addEventListener(
  "click",
  function (elem) {
    if (elem.target.tagName === "LI") {
      elem.target.classList.toggle("checked");
    } else if (elem.target.tagName === "SPAN") {
      elem.target.parentElement.remove();
    }
  },
  false
);

// run script
const run = async () => {
  const json = await getTaskData();
  const taskList = document.getElementById("taskList");
  console.log("json", json);

  json.forEach((task) => {
    let li = document.createElement("li");
    console.log(task);
    li.innerHTML = task;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    taskList.appendChild(li);
  });
};

taskButton.addEventListener("click", addTask);

run();
