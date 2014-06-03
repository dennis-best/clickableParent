jQuery.fn.clickableParent = function() {
  return this.click(function(event) {
    if (event.target.nodeName !== "A") {
      if ($(event.target).is(this)) {
        return window.location = $('a', $(this)).attr("href");
      }
    }
  });
};

jQuery.fn.clickableParentTL = function() {
  return this.click(function(event) {
    if (event.target.nodeName !== "A") {
      if ($(event.target).is(this)) {
        return Turbolinks.visit($('a', $(this)).attr('href'));
      }
    }
  });
};
