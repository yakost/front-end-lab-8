function forEach(arr, zoom) {
    for(let i = 0; i < arr.length; i++) {
       zoom(arr[i]);
    }
}
