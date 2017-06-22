'use strict';

// MODULES //

var getKeys = require( 'object-keys' ).shim();
var isObject = require( '@stdlib/assert/is-plain-object' );
var replace = require( '@stdlib/string/replace' );
var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var recurse = require( './recurse.js' );
var listItem = require( './list_item.js' );


// VARIABLES //

var begin = '<input class="slideout-menu-input" id="slideout-menu-input-root" name="slideout-menu-input-root" type="checkbox"><label class="slideout-menu-label hamburger-menu-icon" for="slideout-menu-input-root"><span></span><span></span><span></span></label><nav class="menu slideout-menu">';
var header = '<a class="menu-header-wrapper" href="{{href}}"><header class="menu-header"><span class="menu-header-title">{{title}}</span></header></a>';
var listStart = '<ul>';
var listEnd = '</ul>';
var end = '</nav>';


// MAIN //

/**
* Generates a menu HTML fragment from a tree object.
*
* @param {Object} tree - tree
* @param {Options} [options] - options
* @param {string} [options.title] - title
* @param {string} [options.url] - URL
* @param {string} [options.mount] - root URL on which to mount tree paths
* @throws {TypeError} first argument must be an object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {string} HTML fragment
*/
function menu( tree, options ) {
	var opts;
	var keys;
	var key;
	var str;
	var tmp;
	var err;
	var v;
	var i;

	if ( !isObject( tree ) ) {
		throw new TypeError( 'invalid input argument. First argument must be an object. Value: `'+tree+'`.' );
	}
	opts = copy( defaults );
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	str = begin;

	tmp = replace( header, '{{title}}', opts.title );
	tmp = replace( tmp, '{{href}}', opts.url );
	str += tmp;

	keys = getKeys( tree ).sort();
	str += listStart;
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		v = tree[ key ];
		if ( isObject( v ) ) {
			tmp = recurse( v, key, opts.mount+key+'/' );
			str += '<li>'+tmp+'</li>';
		} else {
			if ( key === '__namespace__' ) {
				v = 'namespace';
				key = '';
			} else {
				v = key;
			}
			str += listItem( v, opts.mount+key );
		}
	}
	str += listEnd;
	str += end;
	return str;
} // end FUNCTION menu()


// EXPORTS //

module.exports = menu;
