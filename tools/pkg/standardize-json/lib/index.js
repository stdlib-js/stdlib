'use strict';

/**
* Standardize a `package.json` object.
*
* @module @stdlib/tools/pkg/standardize-json
*
* @example
* var standardize = require( '@stdlib/tools/pkg/standardize-json' );
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
