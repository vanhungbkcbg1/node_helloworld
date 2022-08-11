let lib = require("./lib");
function sum(a, b) {
    let value = lib.test(a+b);
    if (value) {
        return 1;
    }
    return 2;
}
module.exports = sum;