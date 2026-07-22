let users = [];
let usersContainer = document.getElementById("usersContainer");
let alert = document.getElementById("alert");

function renderUsers() {
  usersContainer.innerHTML = "";
  users.forEach((user, i) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    let email = document.createElement("p");
    let delBtn = document.createElement("button");

    div.classList.add("user");
    name.innerText = user.name;
    email.innerText = user.email;
    delBtn.innerText = "Delete";
    delBtn.id = i;
    delBtn.classList.add("deleteBtn");
    delBtn.addEventListener("click", deleteUser);

    usersContainer.appendChild(div);
    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(delBtn);
  });
}

function deleteUser(event) {
  let ind = event.target.id;
  users.pop(ind);
  renderUsers();
  alert.classList.add("danger");
  alert.innerText = "User Deleted Successfully";
  hideAlert();
}

function doesUserExsit(email) {
  let user = users.filter((user) => {
    return user.email == email;
  });
  return user.length > 0 ? true : false;
}

function hideAlert() {
  setTimeout(() => {
    alert.classList.remove("success", "danger");
  }, 4000);
}

function addUser() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  let user = {
    name: name.value,
    email: email.value,
  };
  let userExsit = doesUserExsit(email.value);
  if (userExsit == false) {
    users.push(user);
    alert.classList.add("success");
    alert.innerText = "User added successfully!";
    hideAlert();
  } else {
    alert.classList.add("danger");
    alert.innerText = "Email already exists!";
    hideAlert();
  }
  renderUsers();
}
