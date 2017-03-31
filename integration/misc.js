import chai from 'chai'
import {CreditCardApplication_setCreditLocalStorage} from '../../src/misc/CreditCardApplication_setCreditLocalStorage'
let expect = chai.expect
let Nightmare = require('nightmare');
let nightmare = Nightmare();

describe('Integration: shop.nordstrom.com', function () {
  describe('CreadCardApplication Plugin', function(){
  it('should update the document cookie', (done) => {
    nightmare
      .goto('http://shop.nordstrom.com/')
      .evaluate(CreditCardApplication_setCreditLocalStorage() )
      .end()
      .then(function() {
        expect(document.cookie).to.equal('cardType=credit; max-age=' + 864e2 + '; domain=nordstrom.com;path=/;')
      })
  });
});
});
