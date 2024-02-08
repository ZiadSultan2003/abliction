var selectedrow = null;
const container = document.querySelector(".container");
const main = document.querySelector(".main");
const student = document.querySelector("#student-list");
const form = document.querySelector("#student-form");
function showAlart(massage, classname) {
  const div = document.createElement("div");
  div.className = `alert alert-${classname}`;
  div.appendChild(document.createTextNode(massage));
  container.insertBefore(div, main);
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}
function clearfileds() {
  document.querySelector("#firstname").value = "";
  document.querySelector("#lastname").value = "";
  document.querySelector("#RollNo").value = "";
}
form.addEventListener("submit", (ele) => {
  ele.preventDefault();
  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const RollNo = document.querySelector("#RollNo").value;
  if (firstname == "" || lastname == "" || RollNo == "") {
    showAlart("plase file in all fields", "danger");
  } else {
    if (
      selectedrow == null &&
      firstname.trim().length > 0 &&
      lastname.trim().length > 0 &&
      RollNo.trim().length > 0
    ) {
      const list = document.querySelectorAll("#student-list");
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${RollNo}</td>
      <td>
       <button class="btn btn-warning Edite">Edite</button>
       <button class="btn btn-danger Delete">Delete</button>
      </td>
      `;
      list[0].appendChild(row);

      showAlart("student added ", "success");
    } else {
      selectedrow.children[0].textContent = firstname;
      selectedrow.children[1].textContent = lastname;
      selectedrow.children[2].textContent = RollNo;
      showAlart("student info Edited ", "info");
    }
  }
  clearfileds();
});
student.addEventListener("click", (ele) => {
  target = ele.target;
  if (target.classList.contains("Edite")) {
    selectedrow = target.parentElement.parentElement;
    document.querySelector("#firstname").value =
      selectedrow.children[0].textContent;
    document.querySelector("#lastname").value =
      selectedrow.children[1].textContent;
    document.querySelector("#RollNo").value =
      selectedrow.children[2].textContent;
    showAlart("student data delete", "info");
  }
});
//#region Delete item
student.addEventListener("click", (ele) => {
  target = ele.target;
  if (target.classList.contains("Delete")) {
    target.parentElement.parentElement.remove();
    showAlart("student data delete", "danger");
  }
});
//#endregion
