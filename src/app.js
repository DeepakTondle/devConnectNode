const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Home');
});
app.get('/about', (req, res) => {
    res.send('Hello About');
});
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});