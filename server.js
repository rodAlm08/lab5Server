//this is a different way to import using REQUIRE
const express = require('express')
const app = express()
const port = 3000  //this is the port that the app will be listening 
const bodyParser = require('body-parser') //it will parse the data 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//get will get the url and will request/response and use the call back function 
//' /' is the n point
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//http request will come in and will be handled by the two arguments req (request) and res (response) and 
//using the callback function will send back the response
app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})
//will listen for the url and in this case after hello will add a variable :name
//res.send is sending text
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('hello ' + req.params.name)
})

// res.jason is sending jsonresponse
//{} donate an object 
//[] donate an array
app.get('/api/books', (req, res) => {
    //array that will hold my harded coded json file
    const myBooks = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ]
    //the response now will send back the json data that is stored on myBooks array
    res.json({
        books: myBooks
    })
})

//new request /test that wuill send back a file in this case index.html

app.get('/test', (req,res) => {
    res.sendFile(__dirname + '/index.html') //__dirname will return the directory I am current in
})

//this method will use req.query to listen and send back the response
app.get('/name', (req,res) => {
    console.log(req.query.lname);
    res.send('Hello ' + req.query.fname + ' '+ req.query.lname);

})


//post will put the data embeded body
//is a more secure way to send secure data over the web as it wont be displayed on the url
//install body-parser taht will search the body of the request and return it
app.post('/name', (req,res) =>{
    console.log(req.body)
    res.send('Hello from POST' + req.body.fname + '  ' + req.body.lname);

})



//the server is going to listen for a request for url on the port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})