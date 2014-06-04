describe('Test module', function () {

	describe('It does something', function () {
		it('Test ran!', function () {
			expect(true).toBeTruthy();
		});

		xit('Skipped test', function() {
			expect(false).toBeTruthy();
		});
	});

	describe('Some other suite', function() {
		describe('Nested suite', function() {
			it('Does something async', function(done) {
				setTimeout(function() {
					expect(true).toBeTruthy();
					done();
				}, 100);
			});
		});

		it('Fails', function() {
			expect(false).toBeTruthy();
		});
	});

});