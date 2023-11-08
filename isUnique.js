/* 
    Create a function that determines whether all characters in a string are unique or not. Make it case-sensitive, meaning a string with both 'a' and 'A' could pass the test.

    Input: String
    Output: Boolean
    Example:
    isUnique('abcdef'); // -> true
    isUnique('89%df#$^a&x'); // -> true
    isUnique('abcAdef'); // -> true
    isUnique('abcaef'); // -> false
*/

// The best time complexity is O(n) as we know have to process every character in the string 

function isUniqueByBrutForce(str){
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if(str.lastIndexOf(element) !== index) return false;
    }
    return true;
}
// Time Complexity O(n) of str.lastIndexOf() * o(n) --> n^2
// Space complexity 0(1)
console.log(isUniqueByBrutForce('abced'));

function isUniqueBySort(str){
    const chars = str.split('').sort();
    for(let i=1; i<chars.length; i++){
        if(chars[i] === chars[i-1]) return false;
    }
    return true;
}
console.log(isUniqueBySort('abcede'));
console.log(isUniqueBySort('abcd'));

function isUniqueBySet(str){
    return new Set(str).size === str.length;
}
console.log(isUniqueBySet('abcede'));
console.log(isUniqueBySet('abced'));
