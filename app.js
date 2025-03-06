const $mainWrapper = document.querySelector("main");
const $employeeModal = document.querySelector(".card-client");

// const employees = [
//   {
//     name: data.results[0].name.first,
//     email: "billykrenson@mail.com",
//     role: "Software Engineer",
//     image: "./user.jpg",
//     city: "New-York",
//     id: 1,
//   },
//   {
//     name: "Billy Krenson",
//     email: "billykrenson@mail.com",
//     role: "Software Engineer",
//     image: "./user.jpg",
//     city: "New-York",
//     id: 1,
//   },
//   {
//     name: "Billy Krenson",
//     email: "billykrenson@mail.com",
//     role: "Software Engineer",
//     image: "./user.jpg",
//     city: "New-York",
//     id: 1,
//   },
//   {
//     name: "Billy Krenson",
//     email: "billykrenson@mail.com",
//     role: "Software Engineer",
//     image: "./user.jpg",
//     city: "New-York",
//     id: 1,
//   },
//   {
//     name: "Billy Krenson",
//     email: "billykrenson@mail.com",
//     role: "Software Engineer",
//     image: "./user.jpg",
//     city: "New-York",
//     id: 1,
//   },
//   {
//     name: "Billy Krenson",
//     email: "billykrenson@mail.com",
//     role: "Software Engineer",
//     image: "./user.jpg",
//     city: "New-York",
//     id: 1,
//   },
// ];


let employees

fetch("https://randomuser.me/api/?results=10&nat=fr")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    employees = data.results;
    
    console.log(data.results[0]);


    employees.forEach((emp) => {
      const $employeeCard = document.createElement("div");
      const $employeeImageWrapper = document.createElement("div");
      const $employeeImage = document.createElement("img");
      $employeeImage.classList.add("profile-pic");
      $employeeImageWrapper.classList.add("image");
      $employeeImage.src = emp.picture.thumbnail;
      $employeeImage.classList.add("profile-pic");
      $employeeCard.appendChild($employeeImageWrapper);
      $employeeImageWrapper.appendChild($employeeImage);
      const $employeeInfo = document.createElement("div");
      const $employeeNameandLastname = document.createElement("p");
      const $employeeEmail = document.createElement("p");
      const $employeeCity = document.createElement("p");
      $employeeCard.appendChild($employeeInfo);
      $employeeInfo.classList.add("user-info");
      $employeeInfo.appendChild($employeeNameandLastname);
      $employeeInfo.appendChild($employeeEmail);
      $employeeInfo.appendChild($employeeCity);
      $employeeCity.classList.add("job");
      $employeeEmail.classList.add("email");
      $employeeEmail.textContent = emp.email;
      $employeeCity.textContent = emp.$employeeCity;
      $employeeNameandLastname.classList.add("name-and-lastname");
      $employeeNameandLastname.textContent = emp.name.first + " " + emp.name.last;
      $employeeCity.textContent = emp.location.city;
      $employeeCard.classList.add("employee-card");
      $mainWrapper.appendChild($employeeCard);
      $employeeCard.classList.add("shadow");
      
      $employeeCard.addEventListener("click", function () {
        console.log("click " + emp.name.first);
        $employeeModal.classList.remove("hidden");
      })


  });

  })
  .catch(function (error) {
    console.log("une erreur est survenue " + error);
  });


