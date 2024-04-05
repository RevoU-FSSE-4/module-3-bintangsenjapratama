// Structure reference from TL, couple changes on constan, function names and format (all ES6 function)

// existing variables / constan
export {};
const taskListId = document.getElementById("taskList") as HTMLInputElement; // don't know why when type is set to HTMLElement, it says it doesn't have value property / placeholder property
const newTaskId = document.getElementById("newTask") as HTMLInputElement; // so I come up using what explains in this thread https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
const addTaskBtnId = document.getElementById("addTaskBtn") as HTMLInputElement;

// fetch API function
const getTaskData = async (): Promise<string[]> => {
  const response: Response = await fetch(
    "https://module3-api-is2m.onrender.com/random-todos"
  );
  return await response.json();
};

// add task
// the condition is checking whether the task has value or not,
// if empty alert user and change placeholder text, else create li and span elements and add it as task value
const addTask  = (): void => {
  if (newTaskId.value === "") {
    newTaskId.placeholder = "Fill the task :)";
    alert("You must insert the task ");
  } else {
    let li: HTMLLIElement = document.createElement("li");
    li.innerHTML = newTaskId.value;
    taskListId?.appendChild(li);

    let span: HTMLSpanElement = document.createElement("span");
    span.innerHTML = "🗑";
    li.appendChild(span);
  }
  newTaskId.value = "";
};

// task completion status
// ref https://stackoverflow.com/questions/52153424/how-to-use-event-listener-to-toggle-class-to-individual-list-item
// if user is on li element toggle checked, if user in span element do a remove
taskListId?.addEventListener(
  "click",
  function (elem) {
    if ((elem.target as HTMLElement).tagName === "LI") {
      (elem.target as HTMLElement).classList.toggle("checked");
    } else if ((elem.target as HTMLElement).tagName === "SPAN") {
      (elem.target as HTMLElement).parentElement?.remove();
    }
  },
  false
);

// run function
// basically run all the functions above and do a for loop for creating the to-do list
const run = async (): Promise<void> => {
  const json: string[] = await getTaskData();
  const taskList: HTMLElement | null = document.getElementById("taskList");

  json.forEach((task: string) => {
    let li: HTMLLIElement = document.createElement("li");
    li.innerHTML = task;

    let span: HTMLSpanElement = document.createElement("span");
    span.innerHTML = "🗑";
    li.appendChild(span);
    taskList?.appendChild(li);
  });
};

addTaskBtnId?.addEventListener("click", addTask);

// finally run the script
run();
