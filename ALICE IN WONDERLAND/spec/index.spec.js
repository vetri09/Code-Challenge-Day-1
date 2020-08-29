describe("Test Case 1", function() {
    it("should determine route for input 15", function() {
        expect(find_Route(15)).toEqual(6);;
    });
});

describe("Test Case 2", function() {
    it("should determine route for input 20", function() {
        expect(find_Route(20)).toEqual(2);;
    });
});

describe("Test Case 3", function() {
    it("should determine route for input 99", function() {
        expect(find_Route(99)).toEqual(18);;
    });
});

describe("Test Case 4", function() {
    it("should determine route for input 89", function() {
        expect(find_Route(89)).toEqual(17);;
    });
});

describe("Test Case 5", function() {
    it("should determine route for input 56", function() {
        expect(find_Route(56)).toEqual(11);;
    });
});