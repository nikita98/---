(function toggleMenu() {
  var $body = $("body"),
    $menu = $(".nav"),
    $burger = $(".burger"),
    $width = $(window).width(),
    $prew_width = $width;

  $("body").on("click", ".burger", function () {
    if (window.matchMedia("(max-width: 767px)")) {
      $menu.toggle();
      $burger.toggleClass("close_burger");
    }
  });
})();

$(function () {
  var tab = $(".tabs .tabs__items .tabs__item");
  tab.hide().filter(":first").show();

  // Клики по вкладкам.
  $(".tabs .tabs__links .tabs__link")
    .click(function () {
      tab.hide();
      tab.filter(this.hash).show();
      $(".tabs __links .tabs__link").removeClass("active");
      $(this).addClass("active");
      return false;
    })
    .filter(":first")
    .click();
});
