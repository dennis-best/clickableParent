var $;

$ = jQuery;

$.fn.clickableParent = function() {
  return this.click(function(event) {
    if (event.target.nodeName === "A") {
      return console.log("Anchor");
    } else {
      if ($(event.target).is(this)) {
        return window.location = $(this).find("a").attr("href");
      }
    }
  });
};
