const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.post('/', (req, res) => {
    const peso = Math.floor( Math.random() * 1000 );
    res.send({
        "response_type": "in_channel",
        "text": `${peso}メキシコ・ペソ（${Math.floor(peso * 5.89)}円）`,
    })
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => console.log('listening on port 3000'));

module.exports.main = serverless(app);
