const fetch = require('node-fetch');
var fs = require('fs');
const url = 'https://jsonplaceholder.typicode.com/posts';

function jsonData() {
    return fetch(url)
    .then(res => {
        return res.json()
    })
    .then((output) => {
        let result = output;
        // console.log(result);
        let data = JSON.stringify(result, null, 2);
        fs.writeFile("./result/posts.txt", data, function(err){
            if (err) throw err;
            console.log("JSON file created successfully");
        })
    })
}

jsonData();
// const jsonData = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(json => {
//     // console.log(json);
// })

// //Write file into a posts.json
// let data = JSON.stringify(jsonData);
// fs.writeFile("./result/posts.txt", data, (err)=>{
//     if (err){
//         console.error(err);
//         return;
//     };
//     console.log("JSON file ceated successfully");
// })