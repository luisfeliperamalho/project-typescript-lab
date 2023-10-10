//generics

function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [8], [2,4,9])
const stgArray = concatArray<string[]>(['Felipe', 'Ramalho'], ['Luis']);

console.log(numArray);
console.log(stgArray);
