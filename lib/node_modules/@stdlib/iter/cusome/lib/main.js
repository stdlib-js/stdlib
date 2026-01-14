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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an iterator which cumulatively tests whether at least `n` iterated values are truthy.
*
* @param {Iterator} iterator - input iterator
* @param {PositiveInteger} n - minimum number of truthy elements
* @throws {TypeError} first argument must be an iterator
* @throws {TypeError} second argument must be a positive integer
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var arr = array2iterator( [ 0, 0, 1, 1, 0 ] );
*
* var it = iterCuSome( arr, 2 );
*
* var v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns true
*
* v = it.next().value;
* // returns true
*
* var bool = it.next().done;
* // returns true
*/
function iterCuSome( iterator, n ) {
	var count;
	var iter;
	var FLG;

	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an iterator. Value: `%s`.', iterator ) );
	}
	if ( !isPositiveInteger( n ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a positive integer. Value: `%s`.', n ) );
	}
	count = 0;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator` and the provided iterator is iterable, make the iterator iterable:
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
		var v;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		v = iterator.next();
		if ( v.done ) {
			FLG = true;
			return v;
		}
		if ( v.value ) {
			count += 1;
		}
		return {
			'value': count >= n,
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
		return iterCuSome( iterator[ iteratorSymbol ](), n );
	}
}


// EXPORTS //

module.exports = iterCuSome;
