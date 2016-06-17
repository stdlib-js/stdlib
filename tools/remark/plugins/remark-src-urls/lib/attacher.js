'use strict';

// MODULES //

var transformerFactory = require( './transformer.js' );
var defaults = require( './defaults.json' );


// ATTACHER //

/**
* Attach a plugin to a remark processor in order to insert rawgit URLs for SVG equations.
*
* @param {Remark} remark - remark instance
* @param {Object} [options] - options object
* @param {string} [options.dir="/docs/img/"] - resource directory
* @return {Function} transformer
*/
function attacher( remark, options ) {
	var opts = Object.create( defaults );
	if ( arguments.length > 1 ) {
		if ( typeof options !== 'object' ) {
				throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( options.hasOwnProperty( 'dir' ) ) {
			if ( typeof options.dir !== 'string' ) {
				throw new TypeError( 'invalid input option. `dir` must be a string primitive. Value: `' + options.dir + '`.' );
			}
			opts.dir = options.dir;
		}
	}
	return transformerFactory( opts );
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
