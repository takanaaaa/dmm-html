$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  // .attr()は、HTML要素の属性を取得したり設定できるメソッド
  // .show()は要素を表示するメソッド
  $($(this).attr("href")).show();
  event.preventDefault();
});
