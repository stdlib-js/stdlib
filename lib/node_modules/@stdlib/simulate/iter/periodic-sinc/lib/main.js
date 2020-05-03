/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isEven = require( '@stdlib/math/base/assert/is-even' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var sinpi = require( '@stdlib/math/base/special/sinpi' );
var floor = require( '@stdlib/math/base/special/floor' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns an iterator which generates a periodic sinc waveform.
*
* ## Method
*
* -   The periodic sinc function, or Dirichlet function, is defined as
*
*     ```tex
*     D_N(x; A) = \begin{cases}
*     A \cdot \frac{\sin(Nx/2)}{N\sin(x/2)} & x \neq 2\pi k\ \textrm{for} k = 0, \pm 1, \pm 2, \pm 3, \ldots \\
*     A \cdot (-1)^{k(N-1)} & x = 2\pi k\ \textrm{for} k = 0, \pm 1, \pm 2, \pm 3, \ldots
*     \end{cases}
*     ```
*
*     where, for odd \\( N \\), the waveform period is \\( 2\pi \\), and, for even \\( N \\), the waveform period is \\( 4\pi \\).
*
* -   In order to evaluate the periodic sinc function in terms of an iteration number \\( t \\) and a specified period (period \\( \tau \\)), rather than radians, for odd \\( N \\), we define
*
*     ```tex
*     x = \frac{2\pi(t-\varphi)}{\tau}
*     ```
*
*     and, for even \\( N \\), we define
*
*     ```tex
*     x = \frac{4\pi(t-\varphi)}{\tau}
*     ```
*
*     and substitute accordingly.
*
* @param {PositiveInteger} n - order
* @param {Options} [options] - function options
* @param {PositiveInteger} [options.period=10] - number of iterations before a waveform repeats
* @param {NonNegativeNumber} [options.amplitude=1.0] - peak amplitude
* @param {integer} [options.offset=0] - phase offset (in units of iterations; zero-based)
* @param {NonNegativeInteger} [options.iter=1e308] - number of iterations
* @throws {TypeError} first argument must be a positive integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Iterator} iterator
*
* @example
* var iter = iterPeriodicSinc( 7 );
*
* var v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* // ...
*/
function iterPeriodicSinc( n, options ) {
	var opts;
	var iter;
	var FLG;
	var err;
	var sgn;
	var hwf;
	var hw;
	var t;
	var s;
	var i;

	if ( !isPositiveInteger( n ) ) {
		throw new TypeError( 'invalid argument. First argument must be a positive integer. Value: `' + n + '`.' );
	}
	opts = {
		'period': 100,
		'amplitude': 1.0,
		'offset': 0,
		'iter': 1e308
	};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	t = ( opts.period-opts.offset ) % opts.period;
	if ( t < 0 ) {
		t += opts.period; // normalize such that t ϵ [0,τ]
	}
	if ( isEven( n ) ) {
		if ( opts.offset >= 0 ) {
			sgn = -1.0;
		} else {
			sgn = 1.0;
		}
		// Note: when `n` is even, the waveform period (in radians) is 4π, so we need to adjust the "period" parameter to ensure that the waveform repeats within the specified number of iterations:
		hw = opts.period / 2;
		hwf = floor( hw ); // note: τ could be an odd number; in which case, negative peaks happen "between" two iterations (t%τ and t%(τ+1))
		s = n / hw;
	} else {
		s = n / opts.period;
	}
	t -= 1;
	i = 0;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', ( sgn === void 0 ) ? next2 : next1 );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next1() {
		var v;
		i += 1;
		if ( FLG || i > opts.iter ) {
			return {
				'done': true
			};
		}
		t += 1;
		t %= opts.period;
		if ( t === 0 || t === hw ) {
			sgn *= -1.0;
			v = sgn * opts.amplitude;
		} else {
			if ( t === hwf ) {
				// We just passed a negative peak, so we need flip the sign in order to ensure that the waveform at `t%τ=0` is the correct sign:
				sgn *= -1.0;
			}
			v = opts.amplitude * sinpi(s*t) / ( n*sinpi(t/hw) );
		}
		return {
			'value': v,
			'done': false
		};
	}

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next2() {
		var v;
		i += 1;
		if ( FLG || i > opts.iter ) {
			return {
				'done': true
			};
		}
		t += 1;
		t %= opts.period;
		if ( t === 0 ) {
			v = opts.amplitude;
		} else {
			v = opts.amplitude * sinpi(s*t) / ( n*sinpi(t/opts.period) );
		}
		return {
			'value': v,
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return iterPeriodicSinc( n, opts );
	}
}


// EXPORTS //

module.exports = iterPeriodicSinc;
