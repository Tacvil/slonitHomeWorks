function mySlice(arr, start = 0, end = arr.length) {
    const result = [];
    if (start < 0) start = arr.length + start;
    if (end < 0) end = arr.length + end;
    
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}

function myIndexOf(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i; 
        }
    }
    return -1; 
}

function myIncludes(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true; 
        }
    }
    return false; 
}

const arr1 = [1, 2, 3, 4, 5, 6];
console.log(mySlice(arr1, 2, 5)); 
console.log(mySlice(arr1, -3, -1)); 
console.log(mySlice(arr1, 0, 3)); 
console.log(mySlice(arr1, 4)); 

const arr2 = [10, 20, 30, 40, 50];
console.log(myIndexOf(arr2, 30)); 
console.log(myIndexOf(arr2, 50, 3)); 
console.log(myIndexOf(arr2, 100)); 
console.log(myIndexOf(arr2, 20, 2));

const arr3 = ['apple', 'banana', 'cherry'];
console.log(myIncludes(arr3, 'banana')); 
console.log(myIncludes(arr3, 'orange')); 
console.log(myIncludes(arr3, 'cherry', 2)); 
console.log(myIncludes(arr3, 'apple', 1)); 