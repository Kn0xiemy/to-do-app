  $("#addToDo").click(function() {
    const taskText = $("#text-input").val().trim();
    if (taskText !== '') {
      const taskElement = createTaskElement(taskText);
      $("#toDoContainer").append(taskElement);
      $("#text-input").val('');
    }
  });
  
  function createTaskElement(taskText) {
    let taskElement = $("<div>", { class: "task" });
    const taskTextElement = $("<span>").text(taskText);
    const editButton = $("<button>", { class: "edit-btn btn btn-primary" }).text("Edit");
    const deleteButton = $("<button>", { class: "delete-btn btn btn-danger" }).text("Delete");
    
    editButton.click(function() {
      const editedText = prompt("Edit the task:", taskText);
      if (editedText !== null && editedText.trim() !== '') {
        taskTextElement.text(editedText);
      }
    })

    deleteButton.click(function() {
      taskElement.remove();
    });

    taskElement.append(taskTextElement, editButton, deleteButton);
    return taskElement;
  }

  // function storage() {
  //   localStorage.setItem('task', input.value);
  //   task = localStorage.getItem('value');
  // }
