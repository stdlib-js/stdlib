'use strict';

// MODULES //

var getKeys = require( 'object-keys' ).shim();
var isObject = require( '@stdlib/assert/is-plain-object' );
var replace = require( '@stdlib/string/replace' );
var minstd = require( '@stdlib/math/base/random/minstd-shuffle' );
var listItem = require( './list_item.js' );


// VARIABLES //

var begin = '<section class="menu-section"><input class="menu-section-input" id="menu-section-{{id}}" name="menu-section-{{id}}" type="checkbox"><label class="menu-section-label" for="menu-section-{{id}}">{{label}}</label><ul class="menu-section-list">';
var end = '</ul></section>';


// MAIN //

/**
* Recursively generates a menu HTML fragment from an tree object.
*
* @private
* @param {Object} tree - tree
* @param {string} label - tree label
* @param {string} mount - root URL on which to mount tree paths
* @returns {string} HTML fragment
*/
function menu( tree, label, mount ) {
	var keys;
	var str;
	var key;
	var v;
	var i;

	str = replace( begin, '{{id}}', minstd().toString() );
	str = replace( str, '{{label}}', label );

	keys = getKeys( tree ).sort();
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		v = tree[ key ];
		if ( isObject( v ) ) {
			str += '<li>'+menu( v, key, mount+key+'/' )+'</li>';
		} else {
			if ( key === '__namespace__' ) {
				v = 'namespace';
				key = '';
			} else {
				v = key;
			}
			str += listItem( v, mount+key );
		}
	}
	str += end;
	return str;
} // end FUNCTION menu()


// EXPORTS //

module.exports = menu;
