var addOne = require('../src/app.js').addOne;
var expect = require('chai').expect;


describe('testing the addOne function', function(){
  it('should add 1 to the argument', function(){
    //here is where the actual test code goes
    var number = 42;

    var result = addOne(number);

    expect(result).to.equal(43);


  });
  
  // it('here is another test', function(){
  //   //another test here, nested within the describe
  //
  // });

});
// this function takes two arguments: 1- string that describes the suite of tests
// 2- callback that contains the actual test case
// to describe a single test, use the it function
