// fetch("./sample.json");

// console.log("a")
// .then setTimeout(function () {
//     console.log(">> after timeout");
// }, 2000);

// const myTimeout = setTimeout(myGreeting, )

/*
console.log("test fetch ke dummyjson test");
fetch('https://dummyjson.com/test')
.then(response => response.json())
.then(data => console.log(data))
.then(infokan => console.log("sukses"))
.then(pop =>console.log("test fetch ke jsonplaceholder.typicode users"))
.then(test => fetch('https://jsonplaceholder.typicode.com/users'))
.then(response => response.json())
.then(data => console.log(data))
.then(infokan => console.log("sukses"));
*/

// fetch('https://localhost/c/Users/MuhammadMar/Documents/hacktiv8/sesi8/script/data_diri.json')
// .then(response => response.json())
// .then(personal_data => {
//     console.log(personal_data);
//     nama_lengkap=personal_data.nama_depan;
//     nama_lengkap+=personal_data.nama_belakang;
//     console.log();
// })
// ;
var nama_lengkap ="";
let data_diri = {
    "nama_depan": "Muhammad" ,
    "nama_belakang": "Faqihuddin M" ,
    "hobi":["berenang", "bersepeda", "bersama keluarga"],
    "angka_favorit": 99,
    "memakai_kacamata" : true,
    "alamat_domisili": {
        "jalan":"jl. jalan",
        "kota": "Kota Kenangan"
    } 
}

console.log(data_diri);
nama_lengkap+=data_diri.nama_depan;
nama_lengkap+=" ";
nama_lengkap+=data_diri.nama_belakang;
console.log(nama_lengkap,"\n");

let nama_lengkap1=data_diri.nama_depan.concat(" ",data_diri.nama_belakang);
console.log(nama_lengkap1);