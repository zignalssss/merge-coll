export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = collection_2.length - 1;
  let k = 0;

  while (i < collection_1.length || j >= 0 || k < collection_3.length) {
    const a = i < collection_1.length ? collection_1[i] : Infinity;
    const b = j >= 0 ? collection_2[j] : Infinity;
    const c = k < collection_3.length ? collection_3[k] : Infinity;

    if (a <= b && a <= c) {
      result.push(a);
      i++;
    } else if (b <= c) {
      result.push(b);
      j--;
    } else {
      result.push(c);
      k++;
    }
  }
  return result;
}
