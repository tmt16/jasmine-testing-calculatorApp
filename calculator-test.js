it('should calculate the monthly rate correctly', function() {

  const values = {
    amount: 25000,
    years: 15,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('178.72');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});
