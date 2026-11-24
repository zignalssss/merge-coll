import { merge } from "./merge";

const collection_1 = [0, 2, 4, 8];
const collection_2 = [9, 5, 3, 0];
const collection_3 = [1, 3, 7];

console.log("collection_1:", collection_1);
console.log("collection_2:", collection_2);
console.log("collection_3:", collection_3);
console.log("merged:      ", merge(collection_1, collection_2, collection_3));
