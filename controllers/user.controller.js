let object = {};
let userService = require("../services/user.service");
object.index = async (req,res) => {
    try {
        // let data = await User.findAll();
        //find one by id
        let data = await userService.getAll();
        console.log(data);
        if (data) {
            res.send(data);
        } else {
            res.send("model not found");
        }
    } catch (ex) {
        res.send(ex);
    }
}

object.about = (req, res) => {
    res.send("about");
}
module.exports = object;