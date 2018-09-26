//Bubble sort Algorithm

function bubSort(arr){
    console.log('> Bubble Sort Algorithm');
    let temp = 0;
        for (let i = 0; i<(arr.length-1);i++){
            if (arr[i]>arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1]; 
                arr[i+1] = temp; 
                i = -1;
            }
        }
    console.log(arr);
    console.log('End - Bubble Sort Algorithm');
    return arr;
}

bubSort([-8,5,6,3,-4,2,7,4,-3,9,10,-9,8,-7,-2,1,-5,0,-1,-6,-10]);