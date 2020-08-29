describe("Addition", function() {
  it("should determine 20 is the answer", function() {
      expect(basicOp('+',5,15)).toEqual(20);;
    });

    it("should determine 15 is the answer", function() {
      expect(basicOp('+',0,15)).toEqual(15);;
    });
});

describe("Subraction", function() {
  it("should determine 0 is the answer", function() {
      expect(basicOp('-',15,15)).toEqual(0);;
  });

  it("should determine -10 is the answer", function() {
      expect(basicOp('-',5,15)).toEqual(-10);;
  });

});

describe("Multiplication", function() {
  it("should determine 25 is the answer", function() {
      expect(basicOp('*',5,5)).toEqual(25);;
  });

  it("should determine 0 is the answer", function() {
      expect(basicOp('*',0,10)).toEqual(0);;
  });    
});

describe("Division", function() {
  it("should determine 5 is the answer", function() {
      expect(basicOp('/',15,3)).toEqual(5);;
  });

  it("should determine 1 is the answer", function() {
      expect(basicOp('/',100,100)).toEqual(1);;
  });
  
});

describe("Operator", function() {

it("should determine the answer is Invalid Operator", function() {
  expect(basicOp('.',15,15)).toEqual('Invalid Operator');;
  });

  it("should determine the answer is Invalid Operator", function() {
  expect(basicOp('%',5,15)).toEqual('Invalid Operator');;
  });

});