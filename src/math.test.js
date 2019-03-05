class ConfigError extends Error {};
const Util = require('./math');
//Factoriel
test('facto 3 est 6', () => {
    expect("toto").toBe("toto");
});
test('facto 3 est 6', () => {
    expect(Util.factorial(3)).toBe(6);
});
test('facto too large', () => {
    expect(() => { Util.factorial(30000) }).toThrow();
});
//Premier

describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow();
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});

//sumPrime

test("subprime 6 is 10", ()=>{
    expect(Util.sumPrime(6)).toBe(10);
});
test("subprime 8 is 17", ()=>{
    expect(Util.sumPrime(8)).toBe(17);
});
//FizzBuzz
test("fizzbuzz 15", ()=>{
        expect(Util.fizzBuzz(15)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
});
//Alphabet
test("cipher", ()=>{
    expect(Util.cipher("Test Unitaire")).toBe("Uftu Vojubjsf");
});
