jQuery.fn.clickableParent = function(options) {
  var turbolinks;
  if (options == null) {
    options = {};
  }
  turbolinks = (options.turbolinks != null) && options.turbolinks ? true : false;
  return this.click(function(event) {
    if (event.target.nodeName !== "A") {
      if ($(event.target).is(this)) {
        if (turbolinks) {
          return Turbolinks.visit($('a', $(this)).attr('href'));
        } else {
          return window.location = $('a', $(this)).attr("href");
        }
      }
    }
  });
};
