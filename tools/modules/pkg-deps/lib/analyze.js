'use strict';

// MODULES //

var debug = require( 'debug' )( 'module-pkg-deps:analyze' );
var getPaths = require( './../../import-require' );
var filterLiterals = require( './filter_literals.js' );
var filterBuiltins = require( './filter_builtins.js' );


// MAIN //

/**
* Analyzes a file for module dependencies.
*
* @private
* @param {string} file - file content
* @param {boolean} builtins - boolean indicating whether to include built-ins
* @returns {Object} results
*/
function analyze( file, builtins ) {
	file = getPaths( file );

	debug( 'Found %d module literals: %s', file.literals.length, file.literals.join( ', ' ) );
	debug( 'Ignoring %d module expressions: %s', file.expressions.length, file.expressions.join( ', ' ) );

	debug( 'Filtering module literals...' );
	file = filterLiterals( file.literals );

	debug( 'Found %d relative module dependencies: %s', file.relative.length, file.relative.join( ',' ) );
	debug( 'Found %d package dependencies: %s', file.packages.length, file.packages.join( ',' ) );

	if ( builtins === false ) {
		file.packages = filterBuiltins( file.packages );
		debug( 'Found %d package dependencies which are not built-ins: %s', file.packages.length, file.packages.join( ',' ) );
	}
	return file;
} // end FUNCTION analyze()


// EXPORTS //

module.exports = analyze;
