;(function($) {
	"use strict";
	var HAINTHEME = HAINTHEME || {};

	//== Check if element exist
	//
	$.fn.exists = function(callback) {
		var args = [].slice.call(arguments, 1);
		if (this.length) {
			callback.call(this, args);
		}
		return this;
	};

	//===== Header area
	//
	HAINTHEME.navbar = function() {
		
	};

	$(document).ready( function() {
		HAINTHEME.navbar();
		

	});

	$(window)
		.on( 'load', function() {
		})
		.on( 'resize', function() {
		})
		.on( 'scroll', function() {

		});

})(jQuery); // EOF