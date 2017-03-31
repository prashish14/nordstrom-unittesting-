import chai from 'chai'
let expect = chai.expect
let Nightmare = require('nightmare');

describe('Integration: shop.nordstrom.com', function () {
  it('loads the page chi', (done) => {
    let nightmare = Nightmare()
    nightmare
      .goto('http://shop.nordstrom.com/')
      .end()
      .then(function(link) {
        let head = document.getElementsByTagName("head")[0];
        let checkScript = head.outerHTML.includes('images.nordstromdata.com/js/sp/2.6.2/sp.js')
        expect(checkScript.include('images.nordstromdata.com/js/sp/2.6.2/sp.js'));
        $(document).ajaxComplete(function(event, xhr, settings) {
          if (settings.url === "images.nordstromdata.com/js/sp/2.6.2/sp.js") {
            expect(true).to.equal(true)
            done()
          }
        });
        setTimeout(function(){
          expect(true).to.be(false)
        }, 5000)
      })
  });
});
