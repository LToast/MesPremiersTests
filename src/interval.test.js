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
     [[1, 2, 3,4, [new Interval(1,2),new Interval(3,4)]],
        [2, 6, 1,3, [new Interval(1,6)]],
        [2, 6, 2,3, [new Interval(2,6)]],
        [2, 3, 2,3, [new Interval(2,3)]],
        [1, 2, 4,5, [new Interval(1,2),new Interval(4,5)]],
        [0, 3, 3,6, [new Interval(0,6)]],
        [3, 6, 0,3, [new Interval(0,6)]],
        [0, 3, 5,6, [new Interval(0,3),new Interval(5,6)]],
        [-1, 8, 6,4, [new Interval(-1,8)]]])(
    'interval(%i, %i) union interval (%i,%i) %p',
    (a, b,c,d, expected) => {
        expected.forEach(function(element){
            expect(new Interval(a,b).union(new Interval(c,d))).toContainEqual(element);
        });
    },
);
// intersection
test.each(
    [[1, 3, 2,4, new Interval(2,3)],
        [2, 6, 1,3, new Interval(2,3)],
        [2, 6, 2,3, new Interval(2,3)],
        [1, 2, 4,5, []],
        [2, 3, 2,3, new Interval(2,3)],
        [0, 3, 3,6, []],
        [4, 5, 3,5, new Interval(3,4)],
        [0, 3, 5,6, []],
        [-1, 8, 6,4, new Interval(6,4)]])(
    'interval(%i, %i) includes interval (%i,%i) %p',
    (a, b,c,d, expected) => {
        expect((new Interval(a,b)).intersection(new Interval(c,d))).toBe(expected);
    },
);