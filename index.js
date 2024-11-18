const express = require('express');
//Setup express app
const app = express();

const PORT = process.env.PORT || 3000;

function doWork (task) {
    return `Task ${task} is done!`
}


//Config your routes here
app.get('/doWork', (req, res) => {
    //Input
    const task = req.query.task;

    //doWork
    const result = doWork(task);
    //Output
    //Server Output
    console.log(result);

    //Client Output
    //response.send(result)
    res.json({
        message: result
    })
})

app.get('/' , (req, res) => res.send('This is the default route.. Happy face'))


app.listen(PORT, () => console.log (`Server is running on port ${PORT}`))