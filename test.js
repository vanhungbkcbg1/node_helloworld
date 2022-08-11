const one = () => Promise.resolve("One");
async function hello()
{
    console.log("In Hello");
    setTimeout(()=> {
        console.log("Time out function");
    },0)
    const rest = await one();
    console.log(rest);
}

console.log("Before function");
hello();
console.log("Done");
