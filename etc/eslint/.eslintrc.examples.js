'use strict';

// MODULES //

var copy = require( '@stdlib/utils/copy' );
var defaults = require( './eslintrc.js' );


// MAIN //

/**
* ESLint configuration.
*
* @namespace eslint
*/
var eslint = copy( defaults );

/**
* Warn whenever using `String`, `Number`, and `Boolean` in place of primitives.
*
* @private
*/
eslint.rules[ 'no-new-wrappers' ] = 'warn';

/**
* Allow variables to be declared as needed.
*
* @private
*/
eslint.rules[ 'vars-on-top' ] = 'off';

/**
* Allow using `console`.
*
* @private
*/
eslint.rules[ 'no-console' ] = 'off';

/**
* Do not require JSDoc comments.
*
* @private
*/
eslint.rules[ 'require-jsdoc' ] = 'off';


// EXPORTS //

module.exports = eslint;
