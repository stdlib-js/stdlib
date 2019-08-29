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
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var pow = require( '@stdlib/math/base/special/pow' );


// VARIABLES //

var DEFAULT_BASE = 10;
var DEFAULT_LEN = 100;


// MAIN //

/**
* Returns an iterator which returns evenly spaced numbers on a log scale.
*
* @param {number} start - exponent of starting value (inclusive)
* @param {number} stop - exponent of stopping value (inclusive)
* @param {NonNegativeInteger} [N=100] - number of values
* @param {Options} [options] - function options
* @param {PositiveNumber} [options.base=10] - base of log space
* @throws {TypeError} first argument must be a number
* @throws {TypeError} second argument must be a number
* @throws {TypeError} `N` argument must be a nonnegative integer
* @throws {TypeError} `options` argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Iterator} iterator
*
* @example
* var iter = iterLogspace( 0, 3, 4 );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 10
*
* v = iter.next().value;
* // returns 100
*
* // ...
*/
function iterLogspace( start, stop, N, options ) {
	var step;
	var iter;
	var FLG;
	var b;
	var n;
	var d;
	var i;

	if ( !isNumber( start ) || isnan( start ) ) {
		throw new TypeError( 'invalid argument. First argument must be a number. Value: `' + start + '`.' );
	}
	if ( !isNumber( stop ) || isnan( stop ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a number. Value: `' + stop + '`.' );
	}
	if ( arguments.length === 3 ) {
		if ( isNonNegativeInteger( N ) ) {
			n = N;
			b = DEFAULT_BASE;
		} else if ( isPlainObject( N ) ) {
			n = DEFAULT_LEN;
			if ( hasOwnProp( N, 'base' ) ) {
				if ( !isPositiveNumber( N.base ) ) {
					throw new TypeError( 'invalid option. `base` option must be a positive number. Option: `' + N.base + '`.' );
				}
				b = N.base;
			} else {
				b = DEFAULT_BASE;
			}
		} else {
			throw new TypeError( 'invalid argument. Third argument must be either a nonnegative integer or an object. Value: `' + N + '`.' );
		}
	} else if ( arguments.length >= 4 ) {
		if ( !isNonNegativeInteger( N ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a nonnegative integer. Value: `' + N + '`.' );
		}
		n = N;
		if ( !isPlainObject( options ) ) {
			throw new TypeError( 'invalid argument. Fourth argument must be an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'base' ) ) {
			if ( !isPositiveNumber( options.base ) ) {
				throw new TypeError( 'invalid option. `base` option must be a positive number. Option: `' + options.base + '`.' );
			}
			b = options.base;
		} else {
			b = DEFAULT_BASE;
		}
	} else {
		n = DEFAULT_LEN;
		b = DEFAULT_BASE;
	}
	d = n - 1;
	step = (stop-start) / d;
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
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		i += 1;
		if ( FLG || i >= n ) {
			return {
				'done': true
			};
		}
		if ( i === 0 ) {
			return {
				'value': pow( b, start ),
				'done': false
			};
		}
		if ( i === d ) {
			return {
				'value': pow( b, stop ),
				'done': false
			};
		}
		return {
			'value': pow( b, (i*step)+start ),
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
		return iterLogspace( start, stop, n, {
			'base': b
		});
	}
}


// EXPORTS //

module.exports = iterLogspace;
