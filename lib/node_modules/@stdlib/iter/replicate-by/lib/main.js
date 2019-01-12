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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which replicates each iterated value according to a provided function.
*
* @param {Iterator} iterator - input iterator
* @param {Function} fcn - function which specifies how many times to replicate an iterated value
* @param {*} [thisArg] - callback function execution context
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be a function
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function fcn( v, i ) {
*     return i + 1;
* }
*
* var src = array2iterator( [ 1, 2, 3, 4 ] );
* var iter = iterReplicateBy( src, fcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 3
*/
function iterReplicateBy( iterator, fcn, thisArg ) {
	var value;
	var iter;
	var FLG;
	var t;
	var n;
	var i;
	var j;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `' + fcn + '`.' );
	}
	t = -1; // total iteration index
	i = -1; // replicate counter
	j = -1; // source iteration index
	n = 0;  // number of replicates

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
	* @throws {TypeError} callback function must return an integer
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
		while ( true ) {
			t += 1;
			i += 1;
			if ( i >= n ) {
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
						// We *may* still need to replicate one more value...
						value = v.value; // cached value
						j += 1;
						n = fcn.call( thisArg, value, j, t ); // number of replicates
						if ( !isInteger( n ) ) {
							throw new TypeError( 'invalid return value. Callback function must return an integer. Value: `' + n + '`.' );
						}
						if ( n > 0 ) {
							out.value = value;
							out.done = false;
							FLG = 1;
							i = 0; // reset the counter
						} else {
							out.done = true;
							FLG = 2;
						}
					} else {
						out.done = true;
						FLG = 2;
					}
					return out;
				}
				value = v.value; // cached value
				j += 1;
				n = fcn.call( thisArg, value, j, t );
				if ( !isInteger( n ) ) {
					throw new TypeError( 'invalid return value. Callback function must return an integer. Value: `' + n + '`.' );
				}
				i = 0; // reset the counter
				if ( n > 0 ) {
					// Return the newly cached value...
					break;
				}
			} else {
				// Return the cached value...
				break;
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
		return iterReplicateBy( iterator[ iteratorSymbol ](), fcn, thisArg );
	}
}


// EXPORTS //

module.exports = iterReplicateBy;
