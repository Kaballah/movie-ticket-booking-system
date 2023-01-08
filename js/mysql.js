// var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'movies'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});

// let shopItemsData = [
//     {
//         id: "jfhgbvnscs",
//         name: "Thor: Love and Thunder",
//         price: 550,
//         desc: "IMAX",
//         img: "images/movies/scenes/thor.jpg",
//     },
//     {
//         id: "ioytrhndcv",
//         name: "Drifting Home",
//         price: 500,
//         desc: "IMAX",
//         img: "images/movies/scenes/drifting_home.jpg",
//     },
//     {
//         id: "wuefbncxbsn",
//         name: "Minions: Rise of Gru",
//         price: 500,
//         desc: "Cameo Cinemas",
//         img: "images/movies/scenes/minions.jpg",
//     },
//     {
//         id: "thyfhcbcv",
//         name: "Into the Spider Verse",
//         price: 450,
//         desc: "20th Centuary",
//         img: "images/movies/scenes/spider_verse.jpg",
//     },
//     {
//         id: "skjlnedi",
//         name: "Beast",
//         price: 550,
//         desc: "IMAX",
//         img: "images/movies/scenes/beast.jpg",
//     },
//     {
//         id: "klsdnecx",
//         name: "Thor: Love and Thunder",
//         price: 550,
//         desc: "20th Centuary",
//         img: "images/movies/scenes/invitation.jpg",
//     },
//     {
//         id: "sevfder",
//         name: "Drifting Home",
//         price: 500,
//         desc: "Kenya Cinemas",
//         img: "images/movies/scenes/woman_king.jpg",
//     },
//     {
//         id: "efsdcvdg",
//         name: "Minions: Rise of Gru",
//         price: 500,
//         desc: "Foxx Drive Inn",
//         img: "images/movies/scenes/pinocchio.jpg",
//     },
//     {
//         id: "eerhyhnf",
//         name: "Into the Spider Verse",
//         price: 450,
//         desc: "Foxx Drive Inn",
//         img: "images/movies/scenes/jurassic.jpg",
//     },
//     {
//         id: "ewtgffhgf",
//         name: "Beast",
//         price: 550,
//         desc: "IMAX",
//         img: "images/movies/scenes/avatar.jpg",
//     },
//   ];
