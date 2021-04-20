// Imported fetch, http and the fs module
const fetch = require("node-fetch")
const http = require("http")
let fs = require('fs')

// Fetched data from the dummy api http://jsonplaceholder.typicode.com/posts/
fetch('http://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(json => {
        // Wrote the the posts.json file and coverted to a string
        fs.writeFile('result/posts.json', JSON.stringify(json), ()=>{
            console.log('file created')
        })
    })

        