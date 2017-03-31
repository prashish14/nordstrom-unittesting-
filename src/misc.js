import chai from 'chai'
var expect = chai.expect
import {CreditCardApplication_setCreditLocalStorage} from '../../src/misc/CreditCardApplication_setCreditLocalStorage'
import {CreditCardOffer_setVisa} from  '../../src/misc/CreditCardOffer_setCreditType'

// Sinon will be used to meet better standard in the testing
// var sinon = require('sinon')
// Babel-cli can be used to transpile so that we can use es6 completely
// but for time constraint we are using es5 here

describe('Unit test for the Misc file', () => {
  before((done) =>{
    var localStorage = {
     setItem: function(itemKey, itemvalue){
       this.data[itemKey] = itemvalue;
     },
     data:{}
   };
     var document ={
       cookie: ''
     };

     Object.assign(global, {localStorage, document})
     done();
  });

describe('UNIT TEST: CreditCardApplication_setCreditLocalStorage', () => {
  it('It should set document cookie if localStorage exist', (done) => {
     CreditCardApplication_setCreditLocalStorage()
     expect(document.cookie).to.equal('cardType=credit; max-age=' + 864e2 + '; domain=nordstrom.com;path=/;')
     done()
  });
});

describe('UNIT TEST: CreditCardOffer_setVisa', () => {
  it('It should set localStorage.setItem', (done) => {
     CreditCardOffer_setVisa()
     expect(localStorage.data).to.eql({ cardType: 'visa' })
     done()
  });
});

});
