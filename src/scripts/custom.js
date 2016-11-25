;(function($){
	"use strict";

	$(document).ready(function() {

		// Your JS & jQuery Code here
		new Photostack( document.getElementById( 'photostack-3' ), {
			callback : function( item ) {
				//console.log(item)
			}
		} );
	});// end of document ready
	
	

})(jQuery);