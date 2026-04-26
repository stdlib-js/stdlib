/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var Fcn = require( '@stdlib/function/ctor' );
var chebyshevSeries = require( './main.js' );


// MAIN //

/**
* Generates a function for evaluating a Chebyshev series.
*
* ## Notes
*
* -   The compiled function uses [Clenshaw's algorithm][clenshaw-algorithm] for efficient computation.
*
* [clenshaw-algorithm]: https://en.wikipedia.org/wiki/Clenshaw_algorithm
*
* @param {NumericArray} c - Chebyshev series coefficients in descending degree order
* @returns {Function} function for evaluating a Chebyshev series
*
* @example
* var polyval = factory( [ 1.0, 0.5 ] );
*
* var v = polyval( 1.0 ); // 1*T_0(1/2) + 0.5*T_1(1/2)
* // returns 0.75
*
* var v = polyval( 0.0 ); // 1*T_0(0) + 0.5*T_1(0)
* // returns 0.25
*/
function factory( c ) {
	var f;
	var n;
	var i;

	// Use the general implementation if the number of coefficients is large:
	if ( c.length > 500 ) {
		return evaluate;
	}

	n = c.length;

	// Code generation. Start with the function definition...
	f = 'return function chebyshevSeries(x){';
	f += 'var b0;';
	f += 'var b1;';
	f += 'var b2;';

	// If no coefficients, the function always returns zero...
	if ( n === 0 ) {
		f += 'return 0.0;';
	}
	// If only one coefficient, the function always returns that coefficient...
	else if ( n === 1 ) {
		f += 'return ' + ( 0.5 * c[ 0 ] ) + ';';
	}
	// If more than one coefficient, apply Clenshaw's algorithm...
	else {
		// Initialize:
		f += 'b0 = ' + c[ 0 ] + ';';
		f += 'b1 = 0.0;';

		// Recurrence:
		for ( i = 1; i < n; i++ ) {
			f += 'b2 = b1;';
			f += 'b1 = b0;';
			f += 'b0 = (x*b1) - b2 + ' + c[ i ] + ';';
		}
		f += 'return 0.5 * (b0 - b2);';
	}

	// Close the function:
	f += '};';

	// Add a source directive for debugging:
	f += '//# sourceURL=chebyshevSeries.factory.js';

	// Create the function in the global scope:
	return ( new Fcn( f ) )();

	/**
	* Evaluates a Chebyshev series.
	*
	* @private
	* @param {number} x - evaluation point
	* @returns {number} evaluated series
	*/
	function evaluate( x ) {
		return chebyshevSeries( x, c );
	}
}


// EXPORTS //

module.exports = factory;
