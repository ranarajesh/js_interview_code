/* 
Remove Dupes
Instructions
Write a function that takes in a string and returns a new string. The new string should be the same as the original with every duplicate character removed.

Input: String

Output: String
 */

function removeDuplicate(str){
    const uniquChars = new Set(str);
    return Array.from(uniquChars).join('');
}
console.log(removeDuplicate('aaabbcdeefff'));

function removeDuplicateByObj(str){
    const characters = {};
    const uniqueCharacter = [];
    str.split('').forEach(element => {
        if(!characters[element]){
            characters[element] = true;
            uniqueCharacter.push(element);
        }
    });
    return uniqueCharacter.join('');
}

console.log(removeDuplicateByObj('aaabbcdeefffggged'));
