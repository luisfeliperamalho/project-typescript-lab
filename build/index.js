"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [8], [2, 4, 9]);
const stgArray = concatArray(['Felipe', 'goku'], ['Luis']);
console.log(numArray);
console.log(stgArray);
