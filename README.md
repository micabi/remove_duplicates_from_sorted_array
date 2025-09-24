# 配列から重複した値を取り除いた配列をつくる

```typescript
const nums = [ 1, 1, 2 ];
// 2, nums = [1,2,_]

const nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
// 5, nums = [0,1,2,3,4,_,_,_,_,_]

const nums = [1,1,1];
// [1,_,_]
```

現在のインデックスと次のインデックスを比較する。
ifを使うと[1, 1, 1]のように同じ値が続くと漏れてしまうので、条件がtrueの間はずっと処理を続けるwhileを使う。
値が同じだったら重複している値 = nums[index]を削除していく処理。

```typescript
function removeDuplicates ( nums: number[] ) {

  console.log( `nums(original): `, nums );

  let index: number = 1; // i + 1(右隣り)用のインデックス
  for ( let i: number = 0; i < nums.length; i++ ) {

    // 比較の添字にはi + 1ではなくindexを当てる
    while ( nums[ i ] === nums[ index ] ) { // 条件は===
      nums.splice( index, 1 ); // nums[index]を削除
    }

    index++;
  }
  console.log( `nums(spliced): `, nums );

  return nums.length;
};
```

現在のインデックスと次のインデックスを比較する点は同じ。

```typescript
function removeDuplicates ( nums: number[] ) {

  let index: number = 1;
  for ( let i: number = 1; i < nums.length; i++ ) {

    // 比較の添字にはiとi - 1を当てる
    if ( nums[ i - 1] !== nums[ i ] ) { // 条件は!==
      // indexは重複する値があるインデックス(初期値は1)を指し、値をiのものと置き換える。
      nums[ index ] = nums[ i ]!;
      // 置き換えたらindexを進める
      index++;
    }
  }

  console.log( `nums(spliced): `, nums );
  console.log( nums.slice(0, index) );
}
```
