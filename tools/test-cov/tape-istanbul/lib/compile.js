'use strict';

// MODULES //

var vm = require( 'vm' );
var wrap = require( './wrap.js' );


// MAIN //

/**
* Compiles JavaScript source code.
*
* @private
* @param {string} filename - filename to associate with compiled source code
* @param {string} code - code to compile
* @returns {Function} compiled source code wrapped within a function
*/
function compile( filename, code ) {
	var script;
	var opts;

	// Set the `vm` options:
	opts = {
		'filename': filename,
		'lineOffset': 0,
		'displayErrors': true
	};
	// Wrap the source code similar to `require`:
	code = wrap( code );

	// Compile the source code:
	script = new vm.Script( code, opts );

	// Run the compiled code in the current V8 context to generate a wrapped function:
	return script.runInThisContext();
}


// EXPORTS //

module.exports = compile;
