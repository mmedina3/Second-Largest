function secondLargest(arr){
    var first = -Infinity;
    var second = -Infinity;
    for (var i=0; i<arr.length; i++){
      if( arr[i] > first){
        second = first;
        first = arr[i]
      }else if(arr[i] < first && arr [i]> second){
        second = arr[i]
      }
      }
      return second;
    }
    
  secondLargest([1, 2, 3, 4, 5]); // 4