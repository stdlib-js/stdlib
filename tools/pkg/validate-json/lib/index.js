'use strict';

/**
* Validate a package.json.
*
* @module @stdlib/tools/pkg/validate-json
*
* @example
* var isValid = require( '@stdlib/tools/pkg/validate-json' );
*
* var pkg = require( './../package.json' );
* var bool = isValid( pkg );
* var errs = isValid.errors;
*/

// MODULES //

var isValid = require( './is_valid.js' );


// EXPORTS //

module.exports = isValid;
