// let taskData = []
// const getTaskData = async () => {
//     const response = await fetch(
//         "https://module3-api-is2m.onrender.com/random-todos",
//     );
//     const data = await response.json();
//     taskData = data
//     console.log("task data", data);

//     if (data.length > 0) {
//         taskListComponent(data);
//     }
// };

// const addTask = async () => {
//     const taskList = document.getElementById("taskList");
//     console.log('taskData', taskData)
//     taskList.innerHTML = taskList.innerHTML + `<li id='list-${taskData.length + 1}'>new data</li>`
// };

// const taskListComponent = (taskData) => {
//     const taskList = document.getElementById("taskList");
//     console.log("taskList", taskList);
//     let list = ''
//     if (taskData.length > 0) {
//         for (let i = 0; i < taskData.length; i++) {
//             const element = taskData[i];
//             console.log('element', element);
//             list = list + `<li id='list-${i}'>${element}</li>`
//         }
//         console.log('list', list)
//         taskList.innerHTML = list
//     }
//     else taskList.innerHTML = `<li>There is no task</li>`
// };
// getTaskData();
// document.getElementById("addTaskBtn").addEventListener("click", addTask);

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
