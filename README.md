# jQuery Bitcoin Widget #

A simple jQuery plugin rendering a button with the amount of Bitcoins. Inspired by the Twitter tweat button and the mockups of [paraipan](https://github.com/paraipan).


Copyright 2012 Lukasz Gradzki

Dual licensed under the MIT or GPL Version 2 licenses


## Sample Screenshot ##
![Demo](https://github.com/lgr/jquery-bitcoin/raw/master/demo.png)



## Usage ##

* Include required libs and CSS files:

```html
<link href="res/jquery.bitcoinwidget.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.bitcoinwidget.min.js"></script>

```


* Create the HTML element that is going to be an anchore for widget:

```html
<body>
...
    <div id="my_bitcoin_button"></div>
...
</body>
```


* Create the BitcoinButton instance on desired DOM element, providing the settings object as an argument:

```html
<script type="text/javascript">
    $(document).ready(function () {
        $('#my_dropdown_menu').BitcoinButton({
            amount: 1.00,
            ...
        });
    });
</script>
```

That's it! If you're lucky, the plugin will work and the "my_dropdown_menu" element will get converted into a beautiful Bitcoin button.


## Options ##

**The list of the possible options:**

`amount` - an amount that is displayed by the counter. By default it's '0.00' and the units ('BTC') are added automatically.

`button` - if true, the button element is displayed.

`button_label` - the button main label text, by default it's 'bitcoin'.

`button_sublabel` - the button's sublabel text. If not set explicitly, it's content depents on the `lang` option.

`bitcoin_icon` - if true, the Bitcoin icon is displayed.

`counter` - if true, the counter field is displayed.

`counter_align` - option defining the alignment of the counter with respect to the button. Possible values: 'right' (default), 'left'.

`css` - additional css attributes applied to the widget. By default:

```js
css: {
    button: { 'max-width': 300 },
    counter: { 'min-width': 30 }
}
```

`lang` - language of the button's sublabel. Possible values: 'en' (default), 'es', 'pl'.

**Events:**

`onclick` - the event that is called when the button is clicked. 

`onload` - the event that is called when the button is fully rendered.


## Methods ##

**The plugin offers the folowing simple methods:**

`get_default_settings` - returns the object with default settings.

`destroy` - destroy the plugin defined on the element.

`getAmount` - returns the current amount presented by the counter.

`setAmount( new_amount )` - set the new amount presented by the counter.


## Example usage ##
```js
$('#my_bitcoin_button').BitcoinButton({
    amount: 1.25,           // set initial counter value 
    lang: 'es',             // set Spanish language for the sublabel
    onclick: function(){    // set custom 'onclick' callback
        ... 
    },
    css.button.width: 300,  // set button width to 300px
    counter_align: 'left'   // display counter on the left from the button.
});

// Store the current counter value 
var value = $('#my_bitcoin_button').BitcoinButton('getAmount');

// Set the new value of the counter 
var value = $('#my_bitcoin_button').BitcoinButton('setAmount', '30 mBTC');
```

