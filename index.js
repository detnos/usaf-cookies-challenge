const express = require('express')
const app = express()

//cookies
const cookieParser = require('cookie-parser');
//cookie middleware
app.use(cookieParser())

app.get('/', (req, res) => res.send('go to /login?name=YourName to set a cookie with your name.  Go to /hello to receive a greeting with your name from the cookie'))

app.get('/login', (req, res) => {
    res.cookie('name', req.query.name)
    res.send(`The name cookie has been set with ${req.query.name}`)
});

app.get('/hello', (req, res) => {

    res.send(`Welcome ${req.cookies.name}!`)
})

const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))