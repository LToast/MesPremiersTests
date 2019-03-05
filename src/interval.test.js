let Interval = require('./interval');
//Interval
test('1-3 et 2-4 intersect', () => {
    let int1 = new Interval(2,4);
    let int2 = new Interval(1,3);
    expect(int1.overlaps(int2)).toBe(true);
});
test.each(
    [[1, 3, 2,4, true],
        [2, 4, 1,3, true],
        [2, 3, 2,3, true],
        [0, 3, 3,6, false],
        [-1, 8, 6,4, true]])(
    'interval(%i, %i) intersept interval (%i,%i) %p',
    (a, b,c,d, expected) => {
        expect((new Interval(a,b)).overlaps(new Interval(c,d))).toBe(expected);
    },
);
//includes
test.each(
    [[1, 3, 2,4, false],
        [2, 6, 1,3, false],
        [2, 6, 2,3, false],
        [2, 3, 2,3, false],
        [0, 3, 3,6, false],
        [-1, 8, 6,4, true]])(
    'interval(%i, %i) includes interval (%i,%i) %p',
    (a, b,c,d, expected) => {
        expect((new Interval(a,b)).includes(new Interval(c,d))).toBe(expected);
    },
);
//union
test.each(
    [[1, 3, 2,4, [1,2,3,4]],
        [2, 6, 1,3, [1,2,3,4,5,6]],
        [2, 6, 2,3, [2,3,4,5,6]],
        [2, 3, 2,3, [2,3]],
        [1, 2, 4,5, [1,2,4,5]],
        [0, 3, 3,6, [0,1,2,3,4,5,6]],
        [0, 3, 5,6, [0,1,2,3,5,6]],
        [-1, 8, 6,4, [-1,0,1,2,3,4,5,6,7,8]]])(
    'interval(%i, %i) includes interval (%i,%i) %p',
    (a, b,c,d, expected) => {
        expect((new Interval(a,b)).includes(new Interval(c,d))).toBe(expected);
    },
);