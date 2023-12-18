function add(a, b) {
    return (Number(a) + Number(b));
}

function sub(a, b) {
    return Number(a) - Number(b);
}

function mul(a, b) {
    return Number(a) * Number(b);
}

function div(a, b) {
    if (Number(b) === 0) {
        throw new Error('Cannot divide by zero');
    }
    return Number(a) / Number(b);
}

module.exports = { add, sub, mul, div };
