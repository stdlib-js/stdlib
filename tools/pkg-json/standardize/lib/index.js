'use strict';

/**
* Standardize a `package.json` object.
*
* @module @stdlib/tools/pkg-json/standardize
*
* @example
* var standardize = require( '@stdlib/tools/pkg-json/standardize' );
*
* var pkg = {'license':'MIT','name':'beep'};
*
* var out = standardize( pkg );
* // returns {'name':'beep','license':'MIT'}
*/

// MODULES //

var standardize = require( './standardize.js' );


// EXPORTS //

module.exports = standardize;
