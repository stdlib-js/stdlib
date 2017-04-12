'use strict';

// MODULES //

var debug = require( 'debug' )( 'import-require:main' );
var parse = require( 'acorn' ).parse;
var isBuffer = require( '@stdlib/assert/is-buffer' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var walk = require( './walk.js' );


// MAIN //

/**
* Lists import and require paths.
*
* @param {(Buffer|string)} src - source string
* @throws {TypeError} must provide either a string or Buffer
* @returns {Object} results
*
* @example
* var readFile = require( '@stdlib/fs/read-file' ).sync;
*
* var src = readFile( __filename );
* var results = ls( src );
*
* console.dir( results );
*/
function ls( src ) {
	var opts;
	var ast;
	var out;

	if ( isBuffer( src ) ) {
		src = src.toString();
	} else if ( !isString( src ) ) {
		throw new TypeError( 'invalid input argument. Must provide either a string or Buffer. Value: `' + src + '`.' );
	}
	opts = {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'allowedReserved': 'never',
		'allowReturnOutsideFunction': true,
		'allowHashBang': true,
		'allowImportExportEverywhere': true
	};
	debug( 'AST options: %s', JSON.stringify( opts ) );

	debug( 'Generating an AST...' );
	ast = parse( src, opts );
	debug( 'Finished generating AST.' );

	debug( 'Walking AST...' );
	out = walk( src, ast );
	debug( 'Finished walking AST.' );

	return out;
} // end FUNCTION ls()


// EXPORTS //

module.exports = ls;
