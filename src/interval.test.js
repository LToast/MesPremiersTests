let Interval = require('./interval');
//Factoriel

test('facto 3 est 6', () => {
    let int1 = new Interval(2,4);
    let int2 = new Interval(1,3);
    expect(int1.overlaps(int2)).toBe(true);
});