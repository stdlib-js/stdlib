'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var getKeys = require( 'object-keys' ).shim();
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var isObject = require( '@stdlib/assert/is-plain-object' );
var replace = require( '@stdlib/string/replace' );
var copy = require( '@stdlib/utils/copy' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var recurse = require( './recurse.js' );
var listItem = require( './list_item.js' );
var sort = require( './sort.js' );


// VARIABLES //

var fpath = resolve( __dirname, '..', 'static', 'menu.tmpl' );
var opts = {
	'encoding': 'utf8'
};
var tmpl = readFileSync( fpath, opts );


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
	var out;
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
	out = replace( tmpl, '{{title}}', opts.title );
	out = replace( out, '{{href}}', opts.url );

	keys = sort( getKeys( tree ) );
	str = '';
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
			str += listItem( v, minstd().toString(), opts.mount+key );
		}
	}
	return replace( out, '{{menu}}', str );
}


// EXPORTS //

module.exports = menu;
