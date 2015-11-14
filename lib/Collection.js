var Collection = (function () {
    function Collection() {
        this.get = jest.genMockFunction();
        this.set = jest.genMockFunction();
        this.on = jest.genMockFunction();
        this.toJSON = jest.genMockFunction();
    }
    return Collection;
})();
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map