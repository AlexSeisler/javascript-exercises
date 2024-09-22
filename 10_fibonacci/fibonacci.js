const fibonacci = function(spot) 
{
    if(spot<0)

        return 'OOPS';
    let fib = [0,1];
    for(let i = 0;i<spot;i++)
    {
        fib.push(fib[i]+fib[i+1]);
    }
    return fib[spot];
};

// Do not edit below this line
module.exports = fibonacci;
