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
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var isFunction = require( '@stdlib/assert/is-function' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var format = require( '@stdlib/string/format' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which cumulatively tests whether at least `n` iterated values pass a test implemented by a predicate function.
*
* @param {Iterator} iterator - input iterator
* @param {number} n - the number of items
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an iterator
* @throws {TypeError} second argument must be a positive integer
* @throws {TypeError} third argument must be a predicate function
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function isPositive( value ) {
*     return ( value > 0 );
* }
*
* var arr = array2iterator( [ 0, 0, 0, 1, 1 ] );
*
* var it = iterCuSomeBy( arr, 2, isPositive );
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
* // returns false
*
* v = it.next().value;
* // returns true
*
* var bool = it.next().done;
* // returns true
*/
function iterCuSomeBy( iterator, n, predicate, thisArg ) {
	var count;
	var value;
	var iter;
	var FLG;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an iterator. Value: `%s`.', iterator ) );
	}
	if ( !isPositiveInteger( n ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a positive integer. Value: `%s`.', n ) );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', predicate ) );
	}
	count = 0;
	i = -1;
	value = false;

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
	* @param {*} [value] - value to return
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
		i += 1;
		if ( !value && predicate.call( thisArg, v.value, i ) ) {
			count += 1;
			if ( count === n ) {
				value = true;
				return {
					'value': true,
					'done': false
				};
			}
		}
		return {
			'value': value,
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
		return iterCuSomeBy( iterator[ iteratorSymbol ](), n, predicate, thisArg );
	}
}


// EXPORTS //

module.exports = iterCuSomeBy;
