let test_let = "var test let";
const x = 5;

let buah = ["apel", "blueberry", "cherry", "delima", "emes"];

console.log(test_let);
console.log(x);
console.log(buah);

console.log("test tambah frambose to array buah");
buah.push("frambose");
console.log(buah);

console.log("test ubah cherry in array buah to strawberry");
buah[2]="strawberry";

function edit_profile () {

    let edit_form = document.querySelector("#div_form");   

    edit_form.style.display = "block";

    const name = document.querySelector("#name_info");
    const role = document.querySelector("#role_info");
    const availability = document.querySelector("#availability_info");
    const age = document.querySelector("#age_info");
    const location = document.querySelector("#location_info");
    const experience = document.querySelector("#experience_info");
    const email = document.querySelector("#email_info");

    const input_name = document.querySelector("#input_name");
    const input_role = document.querySelector("#input_role");
    const input_availability = document.querySelector("#input_availability");
    const input_age = document.querySelector("#input_age");
    const input_location = document.querySelector("#input_location");
    const input_experience = document.querySelector("#input_yExperience");
    const input_email = document.querySelector("#input_email");


    input_name.value = name.innerText;
    input_role.value = role.innerText;
    input_availability.value = availability.innerText;
    input_age.value = age.innerText;
    input_location.value = location.innerText;
    input_experience.value = experience.innerText;
    input_email.value = email.innerText;
}

function submit_form () {
    let edit_form = document.querySelector("#div_form");   
    edit_form.style.display = "none";

    const name = document.querySelector("#name_info");
    const role = document.querySelector("#role_info");
    const availability = document.querySelector("#availability_info");
    const age = document.querySelector("#age_info");
    const location = document.querySelector("#location_info");
    const experience = document.querySelector("#experience_info");
    const email = document.querySelector("#email_info");

    const input_name = document.querySelector("#input_name");
    const input_role = document.querySelector("#input_role");
    const input_availability = document.querySelector("#input_availability");
    const input_age = document.querySelector("#input_age");
    const input_location = document.querySelector("#input_location");
    const input_experience = document.querySelector("#input_yExperience");
    const input_email = document.querySelector("#input_email");

    role.innerText = input_name.value;
    name.innerText = input_role.value;
    availability.innerText = input_availability.value;
    age.innerText = input_age.value;
    location.innerText = input_location.value;
    experience.innerText = input_experience.value;
    email.innerText = input_email.value;

}