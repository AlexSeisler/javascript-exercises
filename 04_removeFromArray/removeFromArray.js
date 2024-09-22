const removeFromArray = function(list, ...nums) 
{
    let endList = [];
    let amount = 0;
    for(let j = 0;j<list.length;j++)
    {
        if(nums.includes(list[j]))
        {
            amount++;
        }
        else
        {
            endList.push(list[j]);
        }
    }
    return endList;
};

// Do not edit below this line
module.exports = removeFromArray;
