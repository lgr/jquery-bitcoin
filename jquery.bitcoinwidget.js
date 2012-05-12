(function( $ ){
	var element_name = "BitcoinButton";
	var default_settings = {
		css: {
			button: {
				'cursor': 'pointer'
			}
		}
 	};
	var methods = {
 		init : function( options ) {
 			this.each(function(){
 				var settings = jQuery.extend(true, {}, default_settings);
 				var $this = $(this),
 					data = $this.data('BitcoinButton');
 				if (data)
 					settings = data;
       			if(options)
    				$.extend(true, settings, options);
    			$this.data('BitcoinButton', settings);
       		});
       		return this;
       	},
       	destroy : function( ) {
       		return this.each(function(){
       			var $this = $(this);
       			$.removeData($this,'BitcoinButton');
       			$this.unbind();
       		});
       	},
       	get_default_settings: function() {
       	    return default_settings; 
       	}
	};
	$.fn.BitcoinButton = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.BitcoinButton' );
		}
	};
})( jQuery );
