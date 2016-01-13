BY_Starter =
	debug: false
	log: (what) ->
		console.log what  if BY_Starter.debug
		return

	exists: (el) ->
		true  if $(el).length > 0

	init: ->
		# ...

(($, window, undefined_) ->
	"use strict"
	$(document).ready ->
		BY_Starter.init()
		return
	$(window).resize ->

	return) jQuery, this