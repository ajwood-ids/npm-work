var should = require("should");
var greeter = require("../lib/tsCode.js");

describe("Typescript is compiled ok", function(){
    it("when this passed", function(){
        var g = new greeter();
        g.greet("Yoda").should.equal("A type script greeting to you, Yoda");
    });
});