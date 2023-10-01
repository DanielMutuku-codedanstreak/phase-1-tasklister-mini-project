document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  const inputText = document.getElementById('new-task-description')
  const taskList = document.getElementById('tasks')

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(inputText.value)//display input in DOM
    //add items inputted in todo list
    const taskText = inputText.value;
    addTask(taskText);
    inputText.value = '' //to clear input field after input
  });

  function addTask(text) {
    const taskItem = document.createElement('li');
    taskItem.textContent = text;
    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      taskItem.remove(); // Remove the task when the delete button is clicked
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }

});
