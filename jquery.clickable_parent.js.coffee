# Plugin clickableParent
# Makes an element clickable based on the first interior anchor tag
# By Dennis Best 2014


$ = jQuery
$.fn.clickableParent = (options={}) ->
  turbolinks = if options.turbolinks? and options.turbolinks then true else false

  @click (event) ->
    unless event.target.nodeName is "A"
      if $(event.target).is(this)
        if turbolinks
          Turbolinks.visit $('a', $(this)).attr('href')
        else
          window.location = $('a', $(this)).attr("href")

