'use strict';

// MODULES //

var merge = require( '@stdlib/utils/merge' );


// MAIN //

/**
* Default ESLint rules.
*
* @namespace rules
*/
var rules = merge(
	{},
	require( './.eslint.errors.js' ),
	require( './.eslint.best_practices.js' ),
	require( './.eslint.strict.js' ),
	require( './.eslint.variables.js' ),
	require( './.eslint.nodejs.js' ),
	require( './.eslint.style.js' ),
	require( './.eslint.es2015.js' ),
	require( './.eslint.legacy.js' )
);


// EXPORTS //

module.exports = rules;
