let obj = {};
const {Users} = require("../models");
obj.getAll = async () => {
    try {
        return await Users.findAll();
    } catch (ex) {
        throw  ex;
    }
}

module.exports = obj;