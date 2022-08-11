let UserService = require("../../services/UserService")

const { Users } = require("../../models");

test("User get all", async () => {

    Users.create({
        "firstName" : "FirstName",
        "lastName": "last Name",
        "email" : "test@gmail.com"
    })

    let users = await UserService.getAll();
    expect(users.length).toEqual(1);
})