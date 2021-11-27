const app = require('./index')

app.listen(80, (err) => {
    if (err) throw err
    console.log(`Server running in http://127.0.0.1`)
})