import { describe, expect, it } from "vitest";
import { merge } from "../src/merge";

describe("merge", () => {
  it("merges asc + desc + asc into ascending order", () => {
    expect(merge([0, 2, 4, 8], [9, 5, 3, 0], [1, 3, 7])).toEqual([0, 0, 1, 2, 3, 3, 4, 5, 7, 8, 9]);
  });

  it("returns empty array when all inputs are empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("handles some empty inputs", () => {
    expect(merge([], [3, 2, 0], [])).toEqual([0, 2, 3]);
    expect(merge([0, 5], [], [1])).toEqual([0, 1, 5]);
    expect(merge([], [], [0, 1, 2])).toEqual([0, 1, 2]);
  });

  it("keeps duplicates across and within collections", () => {
    expect(merge([0, 1, 1], [1, 1, 0], [1])).toEqual([0, 0, 1, 1, 1, 1, 1]);
  });

  it("handles single-element and uneven lengths", () => {
    expect(merge([10], [100, 50, 20, 0], [0, 0, 0, 30, 40, 60])).toEqual([0, 0, 0, 0, 10, 20, 30, 40, 50, 60, 100]);
  });

  it("does not mutate the inputs", () => {
    const a = [0, 2];
    const b = [3, 1];
    const c = [0, 4];
    merge(a, b, c);
    expect([a, b, c]).toEqual([[0, 2], [3, 1], [0, 4]]);
  });

  it("matches a reference result on random inputs", () => {
    const asc = (n: number) => {
      const out: number[] = [];
      let v = 0;
      for (let x = 0; x < n; x++) out.push((v += Math.floor(Math.random() * 5)));
      return out;
    };
    for (let round = 0; round < 200; round++) {
      const c1 = asc(Math.floor(Math.random() * 20));
      const c2 = asc(Math.floor(Math.random() * 20)).reverse();
      const c3 = asc(Math.floor(Math.random() * 20));
      const expected = [...c1, ...c2, ...c3].sort((x, y) => x - y);
      expect(merge(c1, c2, c3)).toEqual(expected);
    }
  });
});
