//整数を代入する
let init1 = 1;

//負数を代入する
let init2 = -10;

//小数点を代入する
let float1 = 3.14;

//文字列を代入する
let str1 = 'JavaScriptを覚えよう';

let str2 = 'Hello';
let str3 = 'World!!';
let hello = 'Hello World';

let orange = 100;
let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がリンゴより安い');
// }else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// }else{
//   alert('みかんの値段がリンゴより高い');
// }

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num*2
//   count = count + 1;
// }
// alert('2をかけて'+ max + 'を超えるのみ必要だった回数は' + count + '回です')

let i;
let num = 0;

for(i = 1;i<11;i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');