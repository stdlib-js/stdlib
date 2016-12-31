'use strict';

// MODULES //

var copy = require( '@stdlib/utils/copy' );
var defaults = require( './.eslintrc.js' );


// MAIN //

/**
* ESLint configuration.
*
* @namespace eslint
*/
var eslint = copy( defaults );

/**
* Warn when using `String`, `Number`, and `Boolean` in place of primitives.
*
* @private
*/
eslint.rules[ 'no-new-wrappers' ] = 'warn';

/**
* Do not require JSDoc comments.
*
* @private
*/
eslint.rules[ 'require-jsdoc' ] = 'off';


// EXPORTS //

module.exports = eslint;
