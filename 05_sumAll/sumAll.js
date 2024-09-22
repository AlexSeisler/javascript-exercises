const sumAll = function(start, end) 
{
    let total = 0;
    if(typeof start === "number" && typeof end ==="number")
    {
        
    }
    else{
        return 'ERROR';
    }
    if(start<0 || end<0)
    {
        return 'ERROR';
    }
    if(end<start)
    {
        let temp = end;
        end = start;
        start = temp;
    }
    if(start % 1 !=0 || end % 1 !=0)
    {
        return 'ERROR';
    }
    if(start<0 || end<0)
    {
        return 'ERROR';
    }

    for(let i =start;i<end+1;i++)
    {
        total+=i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
