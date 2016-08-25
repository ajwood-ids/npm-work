var app = module.exports = require("koa")();

app.use(function *(){
    this.body = "Hello to the World";
});

if(!module.parent){ 
    var port = process.env.PORT || (process.argv[2] || 3000);
    app.listen(port);
    console.log("Application started. Listening on port: " + port);
}