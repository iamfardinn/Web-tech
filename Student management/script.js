const nameInput = document.getElementById("studentName");
const addBtn = document.getElementById("addBtn");
const listDiv = document.getElementById("studentList");
const highlightBtn = document.getElementById("highlightBtn");

let students = [];
let editIndex = -1;

addBtn.addEventListener("click", handleAddOrUpdate);
highlightBtn.addEventListener("click", handleHighlight);
nameInput.addEventListener("keypress", e => {
    if (e.key === "Enter") handleAddOrUpdate();
});

function handleAddOrUpdate() {
    const name = nameInput.value.trim();
    if (!name) return;

    if (editIndex === -1) {
        students.push({ name, highlighted: false });
    } else {
        students[editIndex].name = name;
        editIndex = -1;
        addBtn.textContent = "Add Student";
    }

    nameInput.value = "";
    render();
}

function handleEdit(index) {
    nameInput.value = students[index].name;
    editIndex = index;
    addBtn.textContent = "Update Student";
    nameInput.focus();
}

function handleDelete(index) {
    students.splice(index, 1);
    render();
}

function handleHighlight() {
    students = students.map(s => ({ ...s, highlighted: true }));
    render();
}

function render() {
    listDiv.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("div");
        row.className = "student-row" + (student.highlighted ? " highlighted" : "");

        const nameSpan = document.createElement("span");
        nameSpan.className = "student-name";
        nameSpan.textContent = student.name;

        const editBtn = document.createElement("button");
        editBtn.className = "action-btn edit-btn";
        editBtn.textContent = "Edit";
        editBtn.onclick = () => handleEdit(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "action-btn delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => handleDelete(index);

        row.appendChild(nameSpan);
        row.appendChild(editBtn);
        row.appendChild(deleteBtn);

        listDiv.appendChild(row);
    });
}
