/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var Fcn = require( '@stdlib/function/ctor' );
var evalrationalf = require( './main.js' );


// MAIN //

/**
* Generates a function for evaluating a rational function using single-precision floating-point arithmetic.
*
* ## Notes
*
* -   The compiled function uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param {NumericArray} P - numerator polynomial coefficients sorted in ascending degree
* @param {NumericArray} Q - denominator polynomial coefficients sorted in ascending degree
* @returns {Function} function for evaluating a rational function
*
* @example
* var P = [ 20.0, 8.0, 3.0 ];
* var Q = [ 10.0, 9.0, 1.0 ];
*
* var rational = factory( P, Q );
*
* var v = rational( 10.0 ); // => (20*10^0 + 8*10^1 + 3*10^2) / (10*10^0 + 9*10^1 + 1*10^2) = (20+80+300)/(10+90+100)
* // returns 2.0
*
* v = rational( 2.0 ); // => (20*2^0 + 8*2^1 + 3*2^2) / (10*2^0 + 9*2^1 + 1*2^2) = (20+16+12)/(10+18+4)
* // returns 1.5
*/
function factory( P, Q ) {
	var f;
	var r;
	var n;
	var m;
	var i;

	// Avoid exceeding maximum stack size on V8 :(. Note that the value of `500` was empirically determined...
	if ( P.length > 500 ) {
		return rational;
	}
	// Code generation. Start with the function definition...
	f = 'return function evalrationalf(x){';

	// Create the function body...
	n = P.length;

	// Declare variables...
	f += 'var ax,s1,s2;';

	// If no coefficients, the function always returns NaN...
	if ( n === 0 ) {
		f += 'return NaN;';
	}
	// If P and Q have different lengths, the function always returns NaN...
	else if ( n !== Q.length ) {
		f += 'return NaN;';
	}
	// If P and Q have only one coefficient, the function always returns the ratio of the first coefficients...
	else if ( n === 1 ) {
		r = float64ToFloat32( P[ 0 ] / Q[ 0 ] );
		f += 'return ' + r + ';';
	}
	// If more than one coefficient, apply Horner's method to both the numerator and denominator...
	else {
		// If `x == 0`, return the ratio of the first coefficients...
		r = float64ToFloat32( P[ 0 ] / Q[ 0 ] );
		f += 'if(x===0.0){return ' + r + ';}';

		// Compute the absolute value of `x`...
		f += 'if(x<0.0){ax=-x;}else{ax=x;}';

		// If `abs(x) <= 1`, evaluate the numerator and denominator of the rational function using Horner's method...
		f += 'if(ax<=1.0){';
		f += 's1 = f64_to_f32(' + P[ 0 ];
		m = n - 1;
		for ( i = 1; i < n; i++ ) {
			f += '+f64_to_f32(x*';
			if ( i < m ) {
				f += '(';
			}
			f += P[ i ];
		}
		// Close all the parentheses...
		for ( i = 0; i < 2*m; i++ ) {
			f += ')';
		}
		f += ';';
		f += 's2 = f64_to_f32(' + Q[ 0 ];
		m = n - 1;
		for ( i = 1; i < n; i++ ) {
			f += '+f64_to_f32(x*';
			if ( i < m ) {
				f += '(';
			}
			f += Q[ i ];
		}
		// Close all the parentheses...
		for ( i = 0; i < 2*m; i++ ) {
			f += ')';
		}
		f += ';';

		// Close the if statement...
		f += '}else{';

		// If `abs(x) > 1`, evaluate the numerator and denominator via the inverse to avoid overflow...
		f += 'x = f64_to_f32(1.0/x);';
		m = n - 1;
		f += 's1 = f64_to_f32(' + P[ m ];
		for ( i = m - 1; i >= 0; i-- ) {
			f += '+f64_to_f32(x*';
			if ( i > 0 ) {
				f += '(';
			}
			f += P[ i ];
		}
		// Close all the parentheses...
		for ( i = 0; i < 2*m; i++ ) {
			f += ')';
		}
		f += ';';

		m = n - 1;
		f += 's2 = f64_to_f32(' + Q[ m ];
		for ( i = m - 1; i >= 0; i-- ) {
			f += '+f64_to_f32(x*';
			if ( i > 0 ) {
				f += '(';
			}
			f += Q[ i ];
		}
		// Close all the parentheses...
		for ( i = 0; i < 2*m; i++ ) {
			f += ')';
		}
		f += ';';

		// Close the else statement...
		f += '}';

		// Return the ratio of the two sums...
		f += 'return f64_to_f32(s1/s2);';
	}
	// Close the function:
	f += '}';

	// Add a source directive for debugging:
	f += '//# sourceURL=evalrationalf.factory.js';

	// Create the function in the global scope:
	return ( new Fcn( 'f64_to_f32', f ) )( float64ToFloat32 );

	/*
	*	function evalrationalf( x ) {
	*		var ax, s1, s2;
	*		if ( x === 0.0 ) {
	*			return f64_to_f32( P[0] / Q[0] );
	*		}
	*		if ( x < 0.0 ) {
	*			ax = -x;
	*		} else {
	*			ax = x;
	*		}
	*		if ( ax <= 1.0 ) {
	*			s1 = f64_to_f32(P[0]+f64_to_f32(x*f64_to_f32(P[1]+f64_to_f32(x*f64_to_f32(P[2]+f64_to_f32(x*f64_to_f32(P[3]+...+f64_to_f32(x*f64_to_f32(P[n-2]+f64_to_f32(x*P[n-1]))))))))));
	*			s2 = f64_to_f32(Q[0]+f64_to_f32(x*(Q[1]+f64_to_f32(x*(Q[2]+f64_to_f32(x*(Q[3]+...+f64_to_f32(x*(Q[n-2]+f64_to_f32(x*Q[n-1]))))))))));
	*		} else {
	*			x = 1.0/x;
	*			s1 = f64_to_f32(P[n-1]+f64_to_f32(x*(P[n-2]+f64_to_f32(x*(P[n-3]+f64_to_f32(x*(P[n-4]+...+f64_to_f32(x*(P[1]+f64_to_f32(x*P[0]))))))))));
	*			s2 = f64_to_f32(Q[n-1]+f64_to_f32(x*(Q[n-2]+f64_to_f32(x*(Q[n-3]+f64_to_f32(x*(Q[n-4]+...+f64_to_f32(x*(Q[1]+f64_to_f32(x*Q[0]))))))))));
	*		}
	*		return f64_to_f32( s1 / s2 );
	*	}
	*/

	/**
	* Evaluates a rational function.
	*
	* @private
	* @param {number} x - value at which to evaluate a rational function
	* @returns {number} evaluated rational function
	*/
	function rational( x ) {
		return evalrationalf( P, Q, x );
	}
}


// EXPORTS //

module.exports = factory;
