let users = [
    {
      email: "aigerim@mail.ru",
      password: "qweqwe",
      name: "gera",
      country: "USA",
      birthdate: "22-03-2004",
    },
    {
      email: "geraa@mail.ru",
      password: "qweqwe2",
      name: "geraa",
      country: "USA2",
      birthdate: "29-07-2003",
    },
    {
      email: "ali@mail.ru",
      password: "qweqwe3",
      name: "ali",
      country: "USA3",
      birthdate: "12-11-2003",
    },
  ];
  
  let loggedUser = [];
  
  function saveDraft(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let country = document.getElementById("country").value;
    let birthdate = document.getElementById("birthdate").value;
  
    let newUser = {
      email: email,
      password: password,
      name: name,
      country: country,
      birthdate: birthdate,
    };
  
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  
    loggedUser.push(newUser);
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
  
    window.location.replace("profile.html");
  }
  
  loadUser();
  function loadUser() {
    let loggedUserEmail = JSON.parse(localStorage.getItem("loggedUser"));
    let users = JSON.parse(localStorage.getItem("users"));
    let contentUser = "";
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === loggedUserEmail[0].email) {
        contentUser += "<div>";
        contentUser += "<p>WELCOME: " + "<b>" + users[i].name + "</b>" + "</p>";
        contentUser += "<p>Email: " + "<b>" + users[i].email + "</b>" + "</p>";
        contentUser += "<p>Full name: " + "<b>" + users[i].name + "</b>" + "</p>";
        contentUser +=
          "<p>Country: " + "<b>" + users[i].country + "</b>" + "</p>";
        contentUser +=
          "<p>Birthdate: " + "<b>" + users[i].birthdate + "</b>" + "</p>";
        contentUser += "</div>";
        document.getElementById("name-title").textContent = users[i].name;
        break;
      }
    }
    document.getElementById("userDiv").innerHTML = contentUser;
  }
  
  function login(event) {
    event.preventDefault();
    let login = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users"));
  
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === login && users[i].password === password) {
        let newUser = {
          email: users[i].email,
          password: users[i].password,
          name: users[i].name,
          country: users[i].country,
          birthdate: users[i].birthdate,
        };
        loggedUser.push(newUser);
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        window.location.replace("profile.html");
      }
      else{
          document.getElementById("error").textContent =  "WRONG"
      }
    }
  }
  
  function logout() {
    localStorage.removeItem("loggedUser");
    window.location.replace("index.html");
  }