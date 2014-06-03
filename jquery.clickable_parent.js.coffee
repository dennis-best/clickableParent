# Plugin clickableParent
# Makes an element clickable based on the first interior anchor tag
# By Dennis Best 2014


$ = jQuery
$.fn.clickableParent = ->
  @click (event) ->
    unless event.target.nodeName is "A"
      if $(event.target).is(this)
        window.location = $('a', $(this)).attr("href")

$.fn.clickableParentTL = ->
  @click (event) ->
    unless event.target.nodeName is "A"
      if $(event.target).is(this)
        Turbolinks.visit $('a', $(this)).attr('href')

