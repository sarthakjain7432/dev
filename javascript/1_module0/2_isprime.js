function processData(input)
{
    let isprime = true;
    for(let div = 2; div * div <= input; div++)
    {
        if(input % div == 0)
        {
            isprime = false;
            break;
        }
    }
    if(isprime == true)
    {
        console.log("prime");
    }
    else
    {
        console.log("notprime")
    }

}

// ignore how to take input
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = " ";
process.stdin.on("data", function (input)
{
    _input += input;
});

process.stdin.on("end", function()
{
    processData(_input);
});