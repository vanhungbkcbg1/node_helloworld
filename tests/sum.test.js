const sum = require('../sum');
let lib = require("../lib");

const {Users} = require("../models");



// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(false);
// });
// test('adds 1 + 2 to equal 4', () => {
//    expect(sum(11, 2)).toBe(false);
// });

//using mock
jest.mock("../lib");
test('mock', () => {
    lib.test = jest.fn((value)=> {return 10});
    expect(sum(1, 2)).toBe(1);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

});

test('mock _2', () => {
    lib.test = jest.fn((value)=> {return false});
    expect(sum(1, 2)).toBe(2);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

});


beforeAll(async () => {
    await Users.create({
        "firstName": "hung",
        "lastName": "last name",
        "email": "hungnv@gmail.com"
    })
    console.log("before all function");
})

beforeEach(()=>{
    console.log("before each test")
})

afterEach(()=>{
    console.log("after each test");
})

afterAll(() => {
    console.log("after all function");
})

