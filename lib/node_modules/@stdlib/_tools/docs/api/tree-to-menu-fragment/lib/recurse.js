'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var getKeys = require( 'object-keys' ).shim();
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var isObject = require( '@stdlib/assert/is-plain-object' );
var replace = require( '@stdlib/string/replace' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var listItem = require( './list_item.js' );
var sort = require( './sort.js' );


// VARIABLES //

var fpath = resolve( __dirname, '..', 'static', 'section.tmpl' );
var opts = {
	'encoding': 'utf8'
};
var tmpl = readFileSync( fpath, opts );


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
	var out;
	var str;
	var key;
	var v;
	var i;

	out = replace( tmpl, '{{id}}', minstd().toString() );
	out = replace( out, '{{label}}', label );

	keys = sort( getKeys( tree ) );
	str = '';
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
			str += listItem( v, minstd().toString(), mount+key );
		}
	}
	return replace( out, '{{list}}', str );
}


// EXPORTS //

module.exports = menu;
