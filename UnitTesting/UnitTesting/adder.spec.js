
var should = require('should');
var adder = require('../adder.js').Adder();

describe('Unit testing Adder function',function(){
      it('should give the expected output',function(){
        var result=  adder.add(1,2);
         adder.add(1,2).should().equal(3);
      });
});