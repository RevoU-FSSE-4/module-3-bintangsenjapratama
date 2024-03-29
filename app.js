// Structure reference from TL, couple changes on constan, function names and format (all ES6 function)

// existing variables / constan
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
// the condition is checking whether the task has value or not,
// if empty alert user and change placeholder text, else create li and span elements and add it as task value
const addTask = () => {
  if (newTaskId.value === "") {
    newTaskId.placeholder = "Fill the task :)";
    alert("You must insert the task ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = newTaskId.value;
    taskListId.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "🗑";
    li.appendChild(span);
  }
  taskListId.value = "";
};

// task completion status
// ref https://stackoverflow.com/questions/52153424/how-to-use-event-listener-to-toggle-class-to-individual-list-item
// if user is on li element toggle checked, if user in span element do a remove
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

// run function
// basically run all the functions above and do a for loop for creating the to-do list
const run = async () => {
  const json = await getTaskData();
  const taskList = document.getElementById("taskList");

  json.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML = task;

    let span = document.createElement("span");
    span.innerHTML = "🗑";
    li.appendChild(span);
    taskList.appendChild(li);
  });
};

addTaskBtnId.addEventListener("click", addTask);

// finally run the script
run();
