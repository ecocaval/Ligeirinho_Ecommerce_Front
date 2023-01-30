export default function sortArray(arr) {

    const arrIndexes = [];
    const originalArr = arr.slice()
   
    let sortedArrIndexes = [];
    let sortedArr = [];

    for(let counter in originalArr){
        arrIndexes.push(counter);
    }

    sortedArrIndexes = arrIndexes.sort((a,b) => {
        return 0.5 - Math.random();
    })


    for(let counter in originalArr){
        sortedArr.push(originalArr[sortedArrIndexes[counter]])
    }    
    
    return sortedArr;
}