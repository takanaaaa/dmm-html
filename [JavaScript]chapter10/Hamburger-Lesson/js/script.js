$(function(){
  $('.menu-trigger').on('click', function(event){
    // .toggleClass()によって、class属性の追加と削除が交互に行われる
    $(this).toggleClass('active');
    // .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});