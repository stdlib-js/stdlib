'use strict';

// MODULES //

var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var url = require( './url.js' );


// VARIABLES //

// Match any string ending with `/`:
var DANGLING_SLASH = /\/$/;

// Match any string beginning with `./`:
var FILEPATH_PREFIX = /^\.\//;


// MAIN //

/**
* Returns a RawGit URL for a file hosted in a public Github repository.
*
* @param {Object} options - function options
* @param {string} options.slug - public Github repository slug
* @param {string} options.file - filepath
* @param {boolean} [options.cdn=true] - boolean indicating whether to return a CDN URL
* @returns {string} RawGit URL
*
* @example
* var out = rawgit({
*     'slug': 'stdlib-js/stdlib/develop',
*     'file': 'README.md'
* });
* // returns 'https://cdn.rawgit.com/stdlib-js/stdlib/develop/README.md'
*/
function rawgit( options ) {
	var opts;
	var err;

	opts = copy( defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	opts.slug = opts.slug.replace( DANGLING_SLASH, '' );
	opts.file = opts.file.replace( FILEPATH_PREFIX, '' );

	return url( opts );
} // end FUNCTION rawgit()


// EXPORTS //

module.exports = rawgit;
