const $mainWrapper = document.querySelector("main");

const employee = [
  {
    name: "Billy Krenson",
    email: "billykrenson@mail.com",
    role: "Software Engineer",
    image: "./user.jpg",
    city: "New-York",
    id: 1,
  },
  {
    name: "Billy Krenson",
    email: "billykrenson@mail.com",
    role: "Software Engineer",
    image: "./user.jpg",
    city: "New-York",
    id: 1,
  },
  {
    name: "Billy Krenson",
    email: "billykrenson@mail.com",
    role: "Software Engineer",
    image: "./user.jpg",
    city: "New-York",
    id: 1,
  },
  {
    name: "Billy Krenson",
    email: "billykrenson@mail.com",
    role: "Software Engineer",
    image: "./user.jpg",
    city: "New-York",
    id: 1,
  },
  {
    name: "Billy Krenson",
    email: "billykrenson@mail.com",
    role: "Software Engineer",
    image: "./user.jpg",
    city: "New-York",
    id: 1,
  },
  {
    name: "Billy Krenson",
    email: "billykrenson@mail.com",
    role: "Software Engineer",
    image: "./user.jpg",
    city: "New-York",
    id: 1,
  },
];

// Card Wrapper
employee.forEach((emp) => {
    const $employeeCard = document.createElement("div");
    const $employeeImageWrapper = document.createElement("div");
    const $employeeImage = document.createElement("img");
    $employeeImage.classList.add("profile-pic");
    $employeeImageWrapper.classList.add("image");
    $employeeImage.src = emp.image;
    $employeeCard.appendChild($employeeImageWrapper);
    $employeeImageWrapper.appendChild($employeeImage);
    const $employeeInfo = document.createElement("div");
    const $employeeNameandLastname = document.createElement("p");
    const $employeeEmail = document.createElement("p");
    const $employeeRole = document.createElement("p");
    $employeeCard.appendChild($employeeInfo);
    $employeeInfo.classList.add("user-info");
    $employeeInfo.appendChild($employeeNameandLastname);
    $employeeInfo.appendChild($employeeEmail);
    $employeeInfo.appendChild($employeeRole);
    $employeeRole.classList.add("job");
    $employeeEmail.classList.add("email");
    $employeeEmail.textContent = emp.email;
    $employeeRole.textContent = emp.role;
    $employeeNameandLastname.classList.add("name-and-lastname");
    $employeeNameandLastname.textContent = emp.name;
    $employeeCard.classList.add("employee-card");
    $mainWrapper.appendChild($employeeCard);
});
