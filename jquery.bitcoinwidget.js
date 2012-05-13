(function( $ ){
	var element_name = "BitcoinButton";
	var default_settings = {
		css: {
			button: {
			    'max-width': 300 
			}, // Additional CSS for the button
			counter: {
			    'max-width': 100
			} // Additional CSS for the counter element
		},
		text: 'Bitcoin', // Button text
		_button_element: null, // Button element
		_counter_element: null, // Counter element
		button: true, // Display button ?
		counter: true, // Display counter ?
		amount: '0.00' // Amount that is displayed by the counter
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
    			$this.empty().addClass('jq-bitcoin-widget');
    			if (settings.button){
    			    settings._button_element = $('<div></div>').addClass('button element');
    			    settings._button_element.css(settings.css.button);
    			    settings._button_element.text(settings.text);
    			    $this.append(settings._button_element);
    			}
    			if (settings.counter){
    			    var val = $('<span></span>');
                    settings._counter_element = $('<div></div>').addClass('counter element');
                    settings._counter_element.css(settings.css.counter);
                    val.append(settings.amount);
                    settings._counter_element.append(val);
                    $this.append(settings._counter_element);
                }
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
