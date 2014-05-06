// Plugin clickableParent
// Makes an element clickable based on the first interior anchor tag
// By Dennis Best 2014


var $;

$ = jQuery;

$.fn.clickableParent = function() {
  return this.click(function(event) {
    if (event.target.nodeName === "A") {
      return console.log("Anchor");
    } else {
      return window.location = $(this).find("a").attr("href");
    }
  });
};
