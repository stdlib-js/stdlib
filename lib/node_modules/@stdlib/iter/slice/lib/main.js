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
var isFunction = require( '@stdlib/assert/is-function' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// VARIABLES //

var BEGIN = 0;
var END = 1e308;


// MAIN //

/**
* Returns an iterator which returns a subsequence of iterated values from a provided iterator.
*
* @param {Iterator} iterator - input iterator
* @param {NonNegativeInteger} [begin=0] - start iteration index (inclusive)
* @param {NonNegativeInteger} [end=1e308] - end iteration index (non-inclusive)
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} third argument must be a nonnegative integer
* @returns {Iterator} iterator
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
*
* var iter = iterSlice( randu(), 10, 20 );
*
* var r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/
function iterSlice( iterator, begin, end ) {
	var iter;
	var FLG;
	var N;
	var M;
	var n;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isNonNegativeInteger( begin ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a nonnegative integer. Value: `' + begin + '`.' );
		}
		N = begin;
		if ( arguments.length > 2 ) {
			if ( !isNonNegativeInteger( end ) ) {
				throw new TypeError( 'invalid argument. Third argument must be a nonnegative integer. Value: `' + end + '`.' );
			}
			M = end;
		} else {
			M = END;
		}
	} else {
		N = BEGIN;
		M = END;
	}
	n = M - N;
	i = -1;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', finish );

	// If an environment supports `Symbol.iterator` and a provided iterator is iterable, make the iterator iterable:
	if ( iteratorSymbol && isFunction( iterator[ iteratorSymbol ] ) ) {
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
		var out;
		var v;

		i += 1;
		if ( n > 0 && i < N ) {
			// Lazily consume the first `N` values from the provided iterator...
			for ( i = 0; i < N; i++ ) {
				FLG = iterator.next().done;
			}
		}
		n -= 1;
		if ( FLG || n < 0 ) {
			return {
				'done': true
			};
		}
		v = iterator.next();
		if ( v.done ) {
			FLG = true;
			out = {};
			if ( hasOwnProp( v, 'value' ) ) {
				out.value = v.value;
			}
			out.done = true;
			return out;
		}
		return {
			'value': v.value,
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
	function finish( value ) {
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
		return iterSlice( iterator[ iteratorSymbol ](), N, M );
	}
}


// EXPORTS //

module.exports = iterSlice;
