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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/assert/contains' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var floor = require( '@stdlib/math/base/special/floor' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var round = require( '@stdlib/math/base/special/round' );
var convert = require( './convert.js' );


// VARIABLES //

var DEFAULT_LENGTH = 100;
var DEFAULT_ROUNDING_MODE = 'floor';
var ROUNDING_MODES = [
	'floor',
	'ceil',
	'round'
];
var ROUNDING_FCNS = {
	'floor': floor,
	'ceil': ceil,
	'round': round
};


// MAIN //

/**
* Returns an iterator which returns evenly spaced dates over a specified interval.
*
* @param {(NonNegativeInteger|string|Date)} start - starting date as either a `Date` object, JavaScript timestamp, or a date string (inclusive)
* @param {(NonNegativeInteger|string|Date)} stop - stopping date as either a `Date` object, JavaScript timestamp, or a date string (inclusive)
* @param {NonNegativeInteger} [N=100] - number of values
* @param {Options} [options] - function options
* @param {string} [options.round='floor'] - specifies how sub-millisecond times should be rounded: 'floor', 'ceil', or 'round'
* @throws {TypeError} a numeric `start` argument must be a nonnegative integer
* @throws {TypeError} a numeric `stop` argument must be a nonnegative integer
* @throws {TypeError} unable to parse date string
* @throws {TypeError} `N` argument must be a nonnegative integer
* @throws {TypeError} `options` argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Iterator} iterator
*
* @example
* var MILLISECONDS_IN_DAY = require( '@stdlib/constants/time/milliseconds-in-day' );
*
* var start = new Date();
* var iter = iterDatespace( start, new Date( start.getTime()+MILLISECONDS_IN_DAY ) );
*
* var v = iter.next().value;
* // returns <Date>
*
* v = iter.next().value;
* // returns <Date>
*
* v = iter.next().value;
* // returns <Date>
*
* // ...
*/
function iterDatespace( start, stop, N, options ) {
	var step;
	var iter;
	var opts;
	var rfcn;
	var FLG;
	var t1;
	var t2;
	var n;
	var d;
	var i;

	t1 = convert( start );
	if ( t1 instanceof Error ) {
		throw t1;
	}
	t2 = convert( stop );
	if ( t2 instanceof Error ) {
		throw t2;
	}
	opts = {
		'round': DEFAULT_ROUNDING_MODE
	};
	if ( arguments.length === 3 ) {
		if ( isNonNegativeInteger( N ) ) {
			n = N;
		} else if ( isPlainObject( N ) ) {
			n = DEFAULT_LENGTH;
			if ( hasOwnProp( N, 'round' ) ) {
				if ( !contains( ROUNDING_MODES, N.round ) ) {
					throw new TypeError( 'invalid option. Unrecognized rounding mode. Option: `' + N.round + '`.' );
				}
				opts.round = N.round;
			}
		} else {
			throw new TypeError( 'invalid argument. Third argument must be either a nonnegative integer or an options object. Value: `' + N + '`.' );
		}
	} else if ( arguments.length > 3 ) {
		if ( !isNonNegativeInteger( N ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a nonnegative integer. Value: `' + N + '`.' );
		}
		n = N;
		if ( !isPlainObject( options ) ) {
			throw new TypeError( 'invalid argument. Fourth argument must be an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'round' ) ) {
			if ( !contains( ROUNDING_MODES, options.round ) ) {
				throw new TypeError( 'invalid option. Unrecognized rounding mode. Option: `' + options.round + '`.' );
			}
			opts.round = options.round;
		}
	} else {
		n = DEFAULT_LENGTH;
	}
	rfcn = ROUNDING_FCNS[ opts.round ];
	d = n - 1;
	step = (t2-t1) / d;
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
				'value': new Date( t1 ),
				'done': false
			};
		}
		if ( i === d ) {
			return {
				'value': new Date( t2 ),
				'done': false
			};
		}
		return {
			'value': new Date( rfcn( t1+(i*step) ) ),
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
		return iterDatespace( start, stop, n, opts );
	}
}


// EXPORTS //

module.exports = iterDatespace;
