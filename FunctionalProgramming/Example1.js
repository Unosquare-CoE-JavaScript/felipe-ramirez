"use strict";
const _ = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

const doStuff = str =>
    str
    .toLowerCase()
    .split(' ')
    .map(c => c.trim())
    .reverse()
    .filter(x => x.length >3)
    .join('');

const doAnotherStuff = _.compose(
    join(''),
    _.filter(x => x.length > 3),
    reverse,
    _.map(trim),
    split(' '),
    toLowerCase
);
