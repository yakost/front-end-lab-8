let collectIds = movies => {
    return getTransformedArray(getFilteredArray(movies, valArr => {
        return valArr.rating > 3
         }), valArr => {
             return valArr.id
             })
}
