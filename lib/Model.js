var Model = (function () {
    function Model() {
        this.get = jest.genMockFunction();
        this.set = jest.genMockFunction();
        this.on = jest.genMockFunction();
        this.toJSON = jest.genMockFunction();
    }
    return Model;
})();
exports.Model = Model;
//# sourceMappingURL=Model.js.map