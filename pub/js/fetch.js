/* Get education data and print out in timeline */
function get_education() {
    fetch('http://studenter.miun.se/~allu1801/dt173g/projekt/rest/index.php/education')
    .then((res) => res.json())
    .then((data) => {
        let output = '';
        data.forEach(function(cb) {
            output += `
            <div class="container">
            <div class="content">
              <h3>${cb.start_date} - ${cb.end_date}</h3>
              <p class="tl-name">${cb.name}</p>
              <p>${cb.title}</p>
              <p class="tl-desc">${cb.description}</p>
            </div>
          </div>`
        });
        document.getElementById('edu_div').innerHTML = output;
    })
}


/* Get experience data and print out in timeline */
function get_experience() { 
    fetch('http://studenter.miun.se/~allu1801/dt173g/projekt/rest/index.php/experience')
    .then((res) => res.json())
    .then((data) => {
        let output = '';
        data.forEach(function(cb) {
            output += `
            <div class="container">
            <div class="content">
              <h3>${cb.start_date} - ${cb.end_date}</h3>
              <p class="tl-name">${cb.name}</p>
              <p>${cb.title}</p>
              <p class="tl-desc">${cb.description}</p>
            </div>
          </div>`
        });
        document.getElementById('exp_div').innerHTML = output;
    })
}

/* Get portfolio data */
function get_portfolio() { 
  fetch('http://studenter.miun.se/~allu1801/dt173g/projekt/rest/index.php/portfolio')
  .then((res) => res.json())
  .then((data) => {
      let output = '';
      data.forEach(function(cb) {
          output += `
          <div class="website-box">
            <div class="webinfo">
              <h2 class="title">${cb.name}</h2>
              <p class="created">Skapad år ${cb.start_date}</p>
              <p class="desc">${cb.description}</p>
              <p class="web-url"><a href="${cb.title}">${cb.title}</a></p>
            </div>
          </div>`
      });
      document.getElementById('port_div').innerHTML = output;
  })
}
          
                  

/* ADMIN PAGE */

/* Get Education data */
function get_adminEducation() {
  fetch('http://studenter.miun.se/~allu1801/dt173g/projekt/rest/index.php/education')
    .then((res) => res.json())
    .then((data) => {
      let output = '';
      // Loop
      data.forEach(function(cb) { 
        output += `
          <fieldset class="update-input">
          <input id="${cb.id}${cb.tablename}ex-name" name="ex-name" type="text" placeholder="Name of workplace" value="${cb.name}"></input>
          <input id="${cb.id}${cb.tablename}ex-title" name="ex-title" type="text" placeholder="Title" value="${cb.title}"></input>
          <input id="${cb.id}${cb.tablename}ex-description" name="ex-description" type="text" placeholder="Description" value="${cb.description}"></input>
          <input id="${cb.id}${cb.tablename}ex-start_date" name="start_date" type="text" placeholder="Start date" value="${cb.start_date}"></input>
          <input id="${cb.id}${cb.tablename}ex-end_date" name="end_date" type="text" placeholder="End date" value="${cb.end_date}"></input>
          <button onclick="get_updateData(this)" id="${cb.id}" name="${cb.tablename}" type="button" class="add btn">Uppdatera</button>
          <button onclick="delete_adminData(this)" id="${cb.id}" name="${cb.tablename}"  type="button" class="delete btn">Radera</button>
          </fieldset>  `
        });
        document.getElementById('education-form').innerHTML = output;
    })
}

/* Get Experience data */
function get_adminExperience() {
  fetch('http://studenter.miun.se/~allu1801/dt173g/projekt/rest/index.php/experience')
    .then((res) => res.json())
    .then((data) => {
      let output = '';
      // Loop
      data.forEach(function(cb) {
        output += `
        <fieldset class="update-input">
            <input id="${cb.id}${cb.tablename}ex-name" name="ex-name" type="text" placeholder="Name of workplace" value="${cb.name}"></input>
            <input id="${cb.id}${cb.tablename}ex-title" name="ex-title" type="text" placeholder="Title" value="${cb.title}"></input>
            <input id="${cb.id}${cb.tablename}ex-description" name="ex-description" type="text" placeholder="Description" value="${cb.description}"></input>
            <input id="${cb.id}${cb.tablename}ex-start_date" name="start_date" type="text" placeholder="Start date" value="${cb.start_date}"></input>
            <input id="${cb.id}${cb.tablename}ex-end_date" name="end_date" type="text" placeholder="End date" value="${cb.end_date}"></input>
            <button onclick="get_updateData(this)" id="${cb.id}" name="${cb.tablename}" type="button" class="add btn">Uppdatera</button>
            <button onclick="delete_adminData(this)" id="${cb.id}" name="${cb.tablename}"  type="button" class="delete btn">Radera</button>
            </fieldset>  `
        });
        document.getElementById('experience-form').innerHTML = output;
    })
}

function get_adminPortfolio() {
  fetch('http://studenter.miun.se/~allu1801/dt173g/projekt/rest/index.php/portfolio')
    .then((res) => res.json())
    .then((data) => {
      let output = '';
      // Loop
      data.forEach(function(cb) {
        output += `
        <fieldset class="update-input">
            <input id="${cb.id}${cb.tablename}ex-name" name="ex-name" type="text" placeholder="Name of workplace" value="${cb.name}"></input>
            <input id="${cb.id}${cb.tablename}ex-title" name="ex-title" type="text" placeholder="Title" value="${cb.title}"></input>
            <input id="${cb.id}${cb.tablename}ex-description" name="ex-description" type="text" placeholder="Description" value="${cb.description}"></input>
            <input id="${cb.id}${cb.tablename}ex-start_date" name="start_date" type="text" placeholder="Start date" value="${cb.start_date}"></input>
            <input id="${cb.id}${cb.tablename}ex-end_date" name="end_date" type="text" placeholder="End date" value="${cb.end_date}"></input>
            <button onclick="get_updateData(this)" id="${cb.id}" name="${cb.tablename}" type="button" class="add btn">Uppdatera</button>
            <button onclick="delete_adminData(this)" id="${cb.id}" name="${cb.tablename}"  type="button" class="delete btn">Radera</button>
            </fieldset>  `
        });
        document.getElementById('portfolio-form').innerHTML = output;
    })
}

/* Add data to table */
function add_adminData() {
  let table = document.getElementById('table').value;
  let name = document.getElementById('name').value;
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let start_date = document.getElementById('start_date').value;
  let end_date = document.getElementById('end_date').value;

  // Create object 
  let obj = {
      table: table,
      tablename: table,
      name: name,
      title: title,
      description: description,
      start_date: start_date,
      end_date: end_date
  };
  console.log(obj); // Controlling the objects output
  fetch('http://studenter.miun.se/~allu1801/dt173g/projekt/rest/index.php/', {
      method: 'POST',
      body: JSON.stringify(obj) //convert object to JSON
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  location.reload(); // Reload document after adding data to server
}

/* Delete data from table */
function delete_adminData(event) {
  let table = event.name;
  let id = event.id;
  
   // Create object
  let obj = {
    table: table,
    id: id
  }

  console.log(obj); // Controlling the objects output
  fetch('http://studenter.miun.se/~allu1801/dt173g/projekt/rest/index.php/', {
      method: 'DELETE',
      body: JSON.stringify(obj) //convert object to JSON
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  location.reload(); // Reload document after deleting data from server
}

/* Create unique input-ID's */
function get_updateData(event) { 
  let id = event.id;
  let table = event.name;
  let newName = id.concat(table, 'ex-name');
  let newTitle = id.concat(table, 'ex-title');
  let newDescription = id.concat(table, 'ex-description');
  let newStart = id.concat(table, 'ex-start_date');
  let newEnd = id.concat(table, 'ex-end_date');
  
  // Send unique input-ID's to function as arguments
  update_adminData(id, table, newName, newTitle, newDescription, newStart, newEnd);
    
  }
   
/* Update existing data in table */
function update_adminData(id, table, newName, newTitle, newDescription, newStart, newEnd) {
  let name = document.getElementById(newName).value;
  let title = document.getElementById(newTitle).value;
  let description = document.getElementById(newDescription).value;
  let start_date = document.getElementById(newStart).value;
  let end_date = document.getElementById(newEnd).value;

  // Create object
  let obj = {
      id: id,
      table: table,
      name: name,
      title: title,
      description: description,
      start_date: start_date,
      end_date: end_date
  }
  console.log(obj); // Controlling the objects output
  fetch('http://studenter.miun.se/~allu1801/dt173g/projekt/rest/index.php/', {
      method: 'PUT',
      body: JSON.stringify(obj) //convert object to JSON
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  location.reload(); // Reload document after updating data
}





