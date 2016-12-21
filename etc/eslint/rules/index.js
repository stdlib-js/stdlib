'use strict';

// MODULES //

var merge = require( '@stdlib/utils/merge' );


// MAIN //

/**
* ESLint rules.
*
* @namespace rules
*/
var rules = merge(
	{},
	require( './errors.js' ),
	require( './best_practices.js' ),
	require( './strict.js' ),
	require( './variables.js' ),
	require( './nodejs.js' ),
	require( './style.js' ),
	require( './es2015.js' ),
	require( './legacy.js' )
);


// EXPORTS //

module.exports = rules;
