$(function(){
  //back内のaタグがクリックされた時の処理 第一引数（イベント名）、第二引数（関数）
  //(event)イベントオブジェクト
  $('#back a').on('click', function(event){
    //$('セレクタ名').animate({
    //   変化対象のプロパティ名:変化値
    // }, アニメーションの動作時間);
    //スクロール位置を取得できるメゾッド
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    //aタグの機能を無効にするメゾッド
    event.preventDefault();
  });
});