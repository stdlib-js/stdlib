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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which returns evenly spaced numbers over a specified interval.
*
* @param {number} start - starting value (inclusive)
* @param {number} stop - stopping value (inclusive)
* @param {NonNegativeInteger} [N=100] - number of values
* @throws {TypeError} first argument must be a number
* @throws {TypeError} second argument must be a number
* @throws {TypeError} third argument must be a nonnegative integer
* @returns {Iterator} iterator
*
* @example
* var iter = iterLinspace( 0, 99, 100 );
*
* var v = iter.next().value;
* // returns 0
*
* v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* // ...
*/
function iterLinspace( start, stop, N ) {
	var delta;
	var step;
	var iter;
	var FLG;
	var n;
	var d;
	var i;

	if ( !isNumber( start ) || isnan( start ) ) {
		throw new TypeError( 'invalid argument. First argument must be a number. Value: `' + start + '`.' );
	}
	if ( !isNumber( stop ) || isnan( stop ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a number. Value: `' + stop + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isNonNegativeInteger( N ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a nonnegative integer. Value: `' + N + '`.' );
		}
		n = N;
	} else {
		n = 100;
	}
	delta = stop - start;
	d = n - 1;
	step = delta / d;
	i = -1;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* ## Notes
	*
	* -   Provides specialized support for denormalized numbers by switching the order of multiplication and division operations (see <https://github.com/numpy/numpy/issues/5437>).
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var v;
		i += 1;
		if ( FLG || i >= n ) {
			return {
				'done': true
			};
		}
		if ( i === 0 ) {
			return {
				'value': start,
				'done': false
			};
		}
		if ( i === d ) {
			return {
				'value': stop,
				'done': false
			};
		}
		// Provide support for when the `step` has underflowed (e.g., when wanting to create linearly spaced denormalized numbers)...
		if ( step === 0.0 ) {
			v = ((i/d)*delta) + start;
		} else {
			v = (i*step) + start;
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
		return iterLinspace( start, stop, n );
	}
}


// EXPORTS //

module.exports = iterLinspace;
