/*!
 * mobileSelect.js jQuery plugin
 * Author: @andreknieriem
 * Project home: github.com/andreknieriem
 * Licensed under the MIT license
 */

String.prototype.repeat = function(count) {
    if (count < 1) return '';
    var result = '', pattern = this.valueOf();
    while (count > 0) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result;
};

(function ( $ ) {
 
    $.fn.mobileMenu = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            className: "mobileMenu",
            selectId: "mobileMenu",
            depthSign: "-",
            target: $(this).parent(),
            maxDepth: 10000,
            minDepth: 0,
        }, options );
        
        if($(document).find($(this)).length > 1) {
        	console.warn('More than 1 Element match!');
        	return this;
        }
 		
 		var mobilemenu = $('<select>').addClass(settings.className).attr('id',settings.selectId),
		current = window.location.pathname;
		$(this).find('li').each(function(i,item){
			
			var depth = $(item).parents("ul").length -1;
			if(depth > settings.maxDepth || depth < settings.minDepth) {
				return;
			}
			
			var link = $(item).find('> a').attr('href'),
				text = $(item).find('> a').text(),
				elem = $('<option>').attr('value', link).text(settings.depthSign.repeat(depth)+' '+text);
				if(link[0] != '/') link = '/'+link
				if(current == link) {
					elem.attr('selected','selected');
				}
				elem.appendTo(mobilemenu);
		});
		mobilemenu.appendTo(settings.target).change(function(){
			if (this.value) window.location.href=this.value
		});
 		
        return this
    };
 
}( jQuery ));