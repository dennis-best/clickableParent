# Plugin clickableParent
# Makes an element clickable based on the first interior anchor tag
# By Dennis Best 2014


$ = jQuery
$.fn.clickableParent = ->
  @click (event) ->
    if event.target.nodeName is "A"
      console.log "Anchor"
    else
      window.location = $(this).find("a").attr("href")

