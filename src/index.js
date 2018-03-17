var app = require('./config/server');
var news = require('./app/routes/router.js')(app);

app.listen(app.get('port'), ()=> {
    console.log('server port', app.get('port'));
});