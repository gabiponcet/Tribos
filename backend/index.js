const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        'evento': "teste",
        'programador': 'Gabi',
    });
});

app.listen(3333);