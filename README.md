# merge-coll

TypeScript implementation of

```
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

Returns all elements sorted ascending, given:

- `collection_1`, `collection_3` are sorted ascending (min 0 → max)
- `collection_2` is sorted descending (max → min 0)

No sort function is used. It is a single-pass three-way merge: `collection_1` and `collection_3`
are read front-to-back, `collection_2` is read back-to-front (its tail is the smallest), and the
smallest of the three current heads is appended each step. Time O(n), space O(n).

## Requirements

- Node.js 18+ and npm

## Setup

```bash
git clone <repo-url>
cd merge-coll
npm install
```

## Run

```bash
npm start          # runs src/main.ts with a sample input
```

## Test

```bash
npm test           # unit tests (Vitest)
npm run typecheck  # TypeScript type check
```

## Layout

```
src/merge.ts         merge implementation
src/main.ts          example runner
test/merge.test.ts   unit tests
```
