//  Liear Searching Algorithm
function linSearch(arr, n){
    console.log('>  Liear Searching Algorithm');
for (let i = 0; i<=arr.length; i++){
    if (arr[i] == n){
        console.log('Number of element = '+i);
        console.log('End -  Liear Searching Algorithm');
        return i;
    }
    }
    console.log('End -  Liear Searching Algorithm');
    return -1;
}

linSearch([1,5,2,4,-1,0,3,-2,6],0);