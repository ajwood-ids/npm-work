var app = require("../");
var request = require("supertest").agent(app.listen());

describe("Our new site", function(){
    it("has a nice message", function(done){
        request
            .get("/")
            .expect("Hello to the World")
            .end(done);
    });
});