describe('my awesome website', function() {
    it('should do some chai assertions', function() {
        browser.url('http://www.google.com');
		//console.log("executing the tests:" + browser.getTitle());
		
        browser.getTitle().should.be.equal('Google');
    });
});

