const { styleText } = require( 'node:util' );

// const nums = [ 1, 1, 2 ];
// 2, nums = [1,2,_]

const nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
// 5, nums = [0,1,2,3,4,_,_,_,_,_]

// const nums = [1,1,1];
// [1,_,_]

function removeDuplicates ( nums: number[] ) {

  console.log( `nums(original): `, nums );

  let index: number = 1;
  for ( let i: number = 0; i < nums.length; i++ ) {

    while ( nums[ i ] === nums[ index ] ) {
      console.log( `---被った---` );
      console.log( `nums[${ i }] = ${ nums[ i ] }`, `nums[${ index }] = ${ nums[ index ] }` );
      console.log( `---nums[${ index }] = ${ nums[ index ] }を削除---` );
      nums.splice( index, 1 );
    }

    index++;
  }

  // let index: number = 1;
  // for ( let i: number = 1; i < nums.length; i++ ) {
  //   console.log( `=================` );
  //   console.log( `ループ(i): ${ styleText( 'magenta', `${ i }` ) }` );
  //   console.log( `index: ${ index }` );
  //   console.log( `nums[${ i - 1 }]の値とnums[${ i }]の値を比較します。` );


  //   if ( nums[ i -1 ] !== nums[ i ] ) { // [0]と[1]
  //     console.log( `${ styleText( 'bgGray', `i - 1` ) }: nums[${ styleText( 'magenta', `${ i - 1 }` ) }] = ${ nums[ i - 1 ] }, ${ styleText( 'bgGray', `i` ) }: nums[${ styleText( 'cyan', `${ i }` ) }] = ${ styleText( 'green', `${ nums[ i ] }` ) } --- 値が異なる。❌---` );

  //     nums[ index ] = nums[ i ]!;
  //     console.log( `nums[index]の値をnums[i]の値で置き換えた。nums[${ index }] = ${ styleText( 'green', `${ nums[ i ] }` ) }` );
  //     console.log( `nums: [${ nums }]` );
  //     index++;
  //     console.log( `indexがインクリメントされた。index: ${ styleText( 'cyan', `${ index }` ) }` );
  //   } else {
  //     console.log( `${ styleText( 'bgGray', `i - 1` ) }: nums[${ i - 1 }] = ${ nums[ i - 1 ] }, ${ styleText( 'bgGray', `i` ) }: nums[${ i }] = ${ nums[ i ] }---値が同じ。⭕スキップ--- ` );
  //     console.log( `nums: [${ nums }]` );
  //   }
  // }

  console.log( `nums(spliced): `, nums );
  console.log( nums.slice(0, index) );
  // return nums.length;
};

removeDuplicates( nums );
// console.log(removeDuplicates( nums ));
