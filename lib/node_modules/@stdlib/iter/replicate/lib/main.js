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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which replicates each iterated value a specified number of times.
*
* @param {Iterator} iterator - input iterator
* @param {PositiveInteger} n - number of times to replicate
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be a positive integer
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var src = array2iterator( [ 1, 2, 3, 4 ] );
* var iter = iterReplicate( src, 2 );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 2
*
* // ...
*/
function iterReplicate( iterator, n ) {
	var value;
	var iter;
	var FLG;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	if ( !isPositiveInteger( n ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a positive integer. Value: `' + n + '`.' );
	}
	i = n - 1;

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
		if ( FLG === 2 ) {
			return {
				'done': true
			};
		}
		i += 1;
		if ( i === n ) {
			if ( FLG === 1 ) {
				// If we are here, we have finished the last of the replicates...
				FLG = 2;
				return {
					'done': true
				};
			}
			v = iterator.next();
			if ( v.done ) {
				out = {};
				if ( hasOwnProp( v, 'value' ) ) {
					// We still need to replicate one more value...
					value = v.value; // cached value
					out.value = value;
					out.done = false;
					FLG = 1;
					i = 0; // reset the counter
				} else {
					out.done = true;
					FLG = 2;
				}
				return out;
			}
			i = 0; // reset the counter
			value = v.value; // cached value
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
		FLG = 2;
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
		return iterReplicate( iterator[ iteratorSymbol ](), n );
	}
}


// EXPORTS //

module.exports = iterReplicate;
