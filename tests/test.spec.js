(function () {
    describe('My app', function () {
        beforeEach(module('app', function () {
        }));

        it('should define angular', function () {
            expect(angular).toBeDefined();
        });
    });
})();
