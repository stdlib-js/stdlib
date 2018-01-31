'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var fpath = resolve( __dirname, '..', 'static', 'list_item.tmpl' );
var opts = {
	'encoding': 'utf8'
};
var tmpl = readFileSync( fpath, opts );


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
	var str = replace( tmpl, '{{item}}', item );
	str = replace( str, '{{id}}', id );
	return replace( str, '{{href}}', href );
}


// EXPORTS //

module.exports = listItem;
