'use strict';

// MODULES //

var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var li = '<li><a href="{{href}}">{{item}}</a></li>';


// MAIN //

/**
* Returns a list item HTML fragment.
*
* @private
* @param {string} item - item
* @param {string} href - URL
* @returns {string} HTML fragment
*/
function listItem( item, href ) {
	var str = replace( li, '{{item}}', item );
	return replace( str, '{{href}}', href );
} // end FUNCTION listItem()


// EXPORTS //

module.exports = listItem;
