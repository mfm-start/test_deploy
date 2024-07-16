// let users_data_el = document.getElementById("team_data");


fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data_fetch => {
    console.log(data_fetch.length);
})
;

