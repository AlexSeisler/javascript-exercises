const palindromes = function (string) 
{
    let newString='';
    let alphabet = "abcdefghijklmnopqrstuvwxyz123456789";
    string = string.toLowerCase();
    for(let i = 0;i<string.length;i++)
    {
        if(alphabet.includes(string[i]))
        {
            newString+=string[i];
        }
    }
    let reversedString = '';
    for(let i = newString.length-1;i>=0;i--)
    {
        reversedString += newString[i];
    }
    for(let i = 0; i<newString.length;i++)
    {
        if(newString[i]!=reversedString[i])
        {
            return false;
        }
    }
    return true;
    
};

// Do not edit below this line
module.exports = palindromes;
