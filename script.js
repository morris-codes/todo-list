// script.js

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task element
    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    listItem.appendChild(taskSpan);

    // Add Edit button
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList.add("edit-btn");
    editButton.onclick = () => editTask(taskSpan);
    listItem.appendChild(editButton);

    // Add Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => listItem.remove();
    listItem.appendChild(deleteButton);

    // Append to the task list
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
}

// Edit a task
function editTask(taskSpan) {
    const newTask = prompt("Edit your task:", taskSpan.innerText);
    if (newTask !== null && newTask.trim() !== "") {
        taskSpan.innerText = newTask.trim();
    }
}
