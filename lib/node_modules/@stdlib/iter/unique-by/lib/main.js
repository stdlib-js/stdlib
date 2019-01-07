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
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// FUNCTIONS //

/**
* Tests if a value is unique according to a predicate function when compared to a list of values.
*
* @private
* @param {Array} arr - input array
* @param {*} v - test value
* @param {Function} predicate - predicate function
* @param {*} thisArg - evaluation context
* @returns {boolean} boolean indicating whether a value is "unique"
*
* @example
* function predicate( a, b ) {
*     return ( a !== b );
* }
*
* var bool = isUnique( [ 1, 2, 3 ], 1, predicate, null );
* // returns false
*
* bool = isUnique( [ 1, 2, 3 ], 4, predicate, null );
* // returns true
*/
function isUnique( arr, v, predicate, thisArg ) {
	var len;
	var i;

	len = arr.length;
	for ( i = 0; i < len; i++ ) {
		if ( !predicate.call( thisArg, arr[ i ], v ) ) {
			return false;
		}
	}
	return true;
}


// MAIN //

/**
* Returns an iterator which returns unique values according to a predicate function.
*
* @param {Iterator} iterator - input iterator
* @param {Function} predicate - predicate function
* @param {*} [thisArg] - evaluation context
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be a function
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function predicate( a, b ) {
*     return ( a !== b );
* }
*
* var iter = iterUniqueBy( array2iterator( [ 1, 2, 1, 2, 4 ] ), predicate );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/
function iterUniqueBy( iterator, predicate, thisArg ) {
	var iter;
	var hash;
	var FLG;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `' + predicate + '`.' );
	}
	hash = [];

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
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
		while ( true ) {
			v = iterator.next();
			if ( v.done ) {
				FLG = true;
				out = {};
				if ( hasOwnProp( v, 'value' ) && isUnique( hash, v.value, predicate, thisArg ) ) {
					out.value = v.value;
				}
				out.done = true;
				return out;
			}
			v = v.value;
			if ( isUnique( hash, v, predicate, thisArg ) ) {
				hash.push( v );
				break;
			}
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
		return iterUniqueBy( iterator[ iteratorSymbol ](), predicate, thisArg );
	}
}


// EXPORTS //

module.exports = iterUniqueBy;
