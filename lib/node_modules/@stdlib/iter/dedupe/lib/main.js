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
var isFunction = require( '@stdlib/assert/is-function' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which removes consecutive duplicated values.
*
* @param {Iterator} iterator - input iterator
* @param {PositiveInteger} [limit=1] - number of allowed consecutive duplicates
* @throws {TypeError} must provide an iterator protocol-compliant object
* @throws {TypeError} second argument must be a positive integer
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var iter = iterDedupe( array2iterator( [ 1, 1, 2, 3, 3 ] ) );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* var bool = iter.next().done;
* // returns true
*/
function iterDedupe( iterator, limit ) {
	var count;
	var iter;
	var prev;
	var FLG;
	var N;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isPositiveInteger( limit ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a positive integer. Value: `' + limit + '`.' );
		}
		N = limit;
	} else {
		N = 1;
	}
	prev = NaN; // Note: we leverage the fact that `NaN` is not equal to anything, including itself, to handle initial condition
	count = 0;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

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
		if ( FLG ) {
			return {
				'done': true
			};
		}
		v = iterator.next();
		if ( v.done ) {
			FLG = true;
			out = {};
			if ( hasOwnProp( v, 'value' ) && v.value !== prev ) {
				out.value = v.value;
			}
			out.done = true;
			return out;
		}
		if ( v.value === prev ) {
			count += 1;
			if ( count > N ) {
				// Find the next "unique" value...
				while ( v.value === prev ) {
					v = iterator.next();
					if ( v.done ) {
						FLG = true;
						out = {};
						if ( hasOwnProp( v, 'value' ) && v.value !== prev ) {
							out.value = v.value;
						}
						out.done = true;
						return out;
					}
				}
				prev = v.value;
				count = 1;
			}
		} else {
			prev = v.value;
			count = 1;
		}
		return {
			'value': prev,
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
		return iterDedupe( iterator[ iteratorSymbol ](), N );
	}
}


// EXPORTS //

module.exports = iterDedupe;
