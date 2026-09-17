let assignments = [];

function addAssignment() {
  const name = document.getElementById("assignmentName").value;
  const className = document.getElementById("className").value;
  const dueDate = document.getElementById("dueDate").value;

  if (!name || !className || !dueDate) {
    alert("Please fill in all the fields.");
    return;
  }

  assignments.push({
    name: name,
    className: className,
    dueDate: dueDate,
    completed: false
  });

  document.getElementById("assignmentName").value = "";
  document.getElementById("className").value = "";
  document.getElementById("dueDate").value = "";

  displayAssignments();
}

function toggleComplete(index) {
  assignments[index].completed = !assignments[index].completed;
  displayAssignments();
}

function deleteAssignment(index) {
  assignments.splice(index, 1);
  displayAssignments();
}

function displayAssignments() {
  const list = document.getElementById("assignmentList");
  const emptyMessage = document.getElementById("emptyMessage");

  list.innerHTML = "";

  if (assignments.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }

  assignments.forEach((assignment, index) => {
    const item = document.createElement("div");

    item.className = "assignment";

    if (assignment.completed) {
      item.classList.add("completed");
    }

    item.innerHTML = `
      <strong>${assignment.name}</strong><br>
      Class: ${assignment.className}<br>
      Due: ${assignment.dueDate}
      <br>
      <button onclick="toggleComplete(${index})">
        ${assignment.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button class="delete-button" onclick="deleteAssignment(${index})">
        Delete
      </button>
    `;

    list.appendChild(item);
  });

  const completed = assignments.filter(a => a.completed).length;

  document.getElementById("completedCount").textContent = completed;
  document.getElementById("totalCount").textContent = assignments.length;
}
