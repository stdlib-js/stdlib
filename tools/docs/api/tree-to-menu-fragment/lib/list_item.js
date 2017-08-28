'use strict';

// MODULES //

var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var li = '<li><input class="menu-list-item-input" id="menu-list-item-{{id}}" name="menu-list-item" type="radio"><label class="menu-list-item-label" for="menu-list-item-{{id}}"><a href="{{href}}">{{item}}</a></label></li>';


// MAIN //

/**
* Returns a list item HTML fragment.
*
* @private
* @param {string} item - item
* @param {PositiveInteger} id - item id
* @param {string} href - URL
* @returns {string} HTML fragment
*/
function listItem( item, id, href ) {
	var str = replace( li, '{{item}}', item );
	str = replace( str, '{{id}}', id );
	return replace( str, '{{href}}', href );
} // end FUNCTION listItem()


// EXPORTS //

module.exports = listItem;
