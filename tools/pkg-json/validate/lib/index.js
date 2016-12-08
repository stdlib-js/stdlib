'use strict';

/**
* Validate a package.json.
*
* @module @stdlib/tools/pkg-json/validate
*
* @example
* var isValid = require( '@stdlib/tools/pkg-json/validate' );
*
* var pkg = require( './../package.json' );
* var bool = isValid( pkg );
* var errs = isValid.errors;
*/

// MODULES //

var isValid = require( './is_valid.js' );


// EXPORTS //

module.exports = isValid;
