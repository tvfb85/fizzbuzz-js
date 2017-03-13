describe('fizzBuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

    describe('knows when a number is', function() {

      it('divisible by 3', function() {
        expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
      });

    });

    describe('knows when a number is', function() {

      it('is not divisible by 3', function() {
        expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
      });

    });

    describe('knows when a number is', function() {

      it('divisible by 5', function() {
        expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
      });

    });

    describe('knows when a number is', function() {

      it('is not divisible by 5', function() {
        expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
      });

    });

    describe('knows when a number is', function() {

      it('divisible by 15', function() {
        expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
      });

    });

    describe('knows when a number is', function() {

      it('is not divisible by 15', function() {
        expect(fizzbuzz.isDivisibleByFifteen(14)).toBe(false);
      });

    });

    describe('when playing, says', function() {

      it('"Fizz" when divisible by 3"', function() {
        expect(fizzbuzz.says(3)).toBe("Fizz");
      });

    });

    describe('when playing, says', function() {

      it('"Buzz" when divisible by 5"', function() {
        expect(fizzbuzz.says(5)).toBe("Buzz");
      });

    });

    describe('when playing, says', function() {

      it('"Fizzbuzz" when divisible by 3 and 5"', function() {
        expect(fizzbuzz.says(15)).toBe("Fizzbuzz");
      });

    });

});
