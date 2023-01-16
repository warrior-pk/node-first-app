const express = require('express')
const app = express();

app.use(express.static('public')); // to specify where static files are stored

const PORT = process.env.PORT || 5000;

app.get('*', (req, res) => {
    return res.sendFile(`${__dirname}/public/404.html`)
})

app.listen(PORT , () => console.log(`Server running on port ${PORT}`))