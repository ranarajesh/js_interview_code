/* 
Flatten Array
Instructions
Write a function that will take an array of deeply nested arrays and extract every item, flattening the array. It should return a new array that contains the items of each internal array, preserving order.

Input: Array

Output: Array

Examples:
flatten([ [ [ [1], 2], 3], [4], [], [[5]]]);
// -> [1, 2, 3, 4, 5]

flatten(['abc', ['def', ['ghi', ['jkl']]]]);
// -> ['abc', 'def', 'ghi', 'jkl']
*/

// To solve the problem, try to reduce or partially solve the problem and recursevly apply to other 

// like Flatten only one level deep : [[1, 2, 3], 4, 5, [6], [7], [8, 9], 10]
function partially(item, newArray){
    if(Array.isArray(item)){
        item.forEach( i => newArray.push(i));
    }else{
        newArray.push(item);
    }
}

function flattenArr(nestedArr){
    const newArray = [];
    nestedArr.forEach(item => {
        if(Array.isArray(item)){
            const flatItem = flattenArr(item);
            flatItem.forEach( i => newArray.push(i));
        }else{
            newArray.push(item);
        }
    })
    return newArray;
}

console.log(flattenArr([[1, 2, 3], 4, 5, [6], [7], [8, 9], 10, [[[10,23,45], [34, 2]]]]));

