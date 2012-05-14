(function( $ ){
	var element_name = "BitcoinButton";
	var default_settings = {
	    _button_element: null, // Button element
        _counter_element: null, // Counter element
        _trans_button_sublabel: {
            en: 'ACCEPTED HERE',
            pl: 'AKCEPTUJEMY',
            es: 'SE ACEPTAN'
        },
	    amount: '0.00', // Amount that is displayed by the counter
	    button: true, // Display button ?
        button_label: 'bitcoin', // Button label
        button_sublabel: '', // Button sublabel text
        bitcoin_icon: true, // Display bitcoin icon ?
        counter: true, // Display counter ?
        counter_align: 'right',
		css: {
			button: {
			    'max-width': 300 
			}, // Additional CSS for the button
			counter: {
			    'min-width': 30
			} // Additional CSS for the counter element
		},
		lang: 'en',
		onclick: function() {} // callback on the button click
 	};
	var methods = {
	    _update_amount: function(element, val) {
	        if(parseFloat(val) && !isNaN(val))
                val += ' BTC';
            element.empty().append(val);
	    },
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
    			    var label = $('<span></span>').addClass('label')
    			                                  .text(settings.button_label);
    			    if(!settings.button_sublabel)
    			        settings.button_sublabel = settings.
    			                         _trans_button_sublabel[settings.lang];
    			    var sublabel = $('<span></span>').addClass('sublabel')
    			                               .text(settings.button_sublabel);
    			    settings._button_element = $('<div></div>')
    			                               .addClass('button element')
    			                               .css(settings.css.button)
    			                               .click(function(){
    			                                   settings.onclick.call(this);
    			                               });
    			    if(settings.bitcoin_icon){
    			        var icon = $('<div></div>').addClass('icon');
    			        settings._button_element.append(icon);
    			    }
    			    settings._button_element.append(label).append(sublabel);
    			    $this.append(settings._button_element);
    			}
    			if (settings.counter){
    			    var val = $('<span></span>');
    			    var u = $('<u></u>');
    			    var i = $('<i></i>');
                    settings._counter_element = $('<div></div>')
                                                .addClass('counter element');
                    settings._counter_element.css(settings.css.counter);
                    $(this).BitcoinButton('_update_amount', 
                                           val, settings.amount);
                    switch(settings.counter_align){
                        case 'right':
                            settings._counter_element.append(i)
                                                     .append(u).append(val);
                            $this.append(settings._counter_element);
                            break;
                        case 'left':
                            settings._counter_element.addClass('left')
                                    .append(val).append(u).append(i);
                            $this.prepend(settings._counter_element);
                            break;
                        default:
                            jQuery.error("'" + settings.counter_align 
                                         + "' isn't valid align option.");
                    }
                }
    			$this.data('BitcoinButton', settings);
       		});
       		return this;
       	},
       	getAmount : function() {
            var $this = $(this),
                settings = $this.data('BitcoinButton');
            return settings.amount;
        },
        setAmount : function( new_amount ) {
            var $this = $(this),
                settings = $this.data('BitcoinButton');
            settings.amount = new_amount;
            if(settings.counter)
                $(this).BitcoinButton('_update_amount', 
                                       settings._counter_element.find('span'),
                                       new_amount);
            $this.data('BitcoinButton', settings);
        },
       	destroy : function() {
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
			return methods[method].apply( this, Array.prototype
			                                     .slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method 
			         + ' does not exist on jQuery.BitcoinButton' );
		}
	};
})( jQuery );
