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

(function start() {
  let $dropdown = $(".dropdown");

  $dropdown.parent().append("<div class='arrow'></div>");
  if (window.matchMedia("(max-width: 767px)").matches) {
    $dropdown.hide();
  } else {
    $dropdown.show();
  }

  $("body").on("click", ".arrow", function () {
    $(this).toggleClass("active");
    $(this).parent().find($(".dropdown")).toggle();
  });
})();

(function popup() {
  $("body").on("click", ".show-popup", function () {
    console.log(123);
    $(".popup").toggleClass("active");
  });
})();

$(function tabs() {
  var tab = $(".tabs .tabs__items .tabs__item");
  tab.hide().filter(":first").show();

  // Клики по вкладкам.
  $(".tabs .tabs__links .tabs__link")
    .click(function () {
      tab.hide();
      tab.filter(this.hash).show();
      $(".tabs__links .tabs__link").removeClass("active");
      $(this).addClass("active");
      return false;
    })
    .filter(":first")
    .click();
});

$(function () {
  function textCut(textSize, item) {
    item.each(function () {
      let text = $(this).text();
      if (text.length > textSize) {
        text = text.substring(0, textSize);
        let lastIndex = text.lastIndexOf(" ");
        text = text.substring(0, lastIndex) + "...";
        $(this).html(text);
      }
    });
  }
  textCut(340, $(".text-cut"));
  textCut(160, $(".text-50"));
});

$("body").on("click", ".arrow", function () {});
