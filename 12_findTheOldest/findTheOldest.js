const findTheOldest = function(people1) 
{
    let ageRange = [];
    let start = 0;
    let end = 2024;
    for(person of people1)
    {
        end = person.yearOfDeath || end
        ageRange.push(end-person.yearOfBirth);
    }
    let high = -99999;
    let highIndex = -1;
    for(let i = 0; i<ageRange.length;i++)
    {
        if(ageRange[i]>high)
        {
            high = ageRange[i];
            highIndex = i;
        }
    }
    return people1[highIndex];


    
};

// Do not edit below this line
module.exports = findTheOldest;
