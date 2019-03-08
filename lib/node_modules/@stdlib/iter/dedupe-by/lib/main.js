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
* Returns an iterator which removes consecutive values that resolve to the same value according to a provided function.
*
* @param {Iterator} iterator - input iterator
* @param {PositiveInteger} [limit=1] - number of allowed consecutive duplicates
* @param {Function} clbk - function which indicates whether an iterated value is a "duplicate"
* @throws {TypeError} must provide an iterator protocol-compliant object
* @throws {TypeError} `limit` argument must be a positive integer
* @throws {TypeError} last argument must be a function
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function fcn( v ) {
*     return v;
* }
*
* var iter = iterDedupeBy( array2iterator( [ 1, 1, 2, 3, 3 ] ), fcn );
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
function iterDedupeBy( iterator, limit, clbk ) { // eslint-disable-line no-unused-vars
	var count;
	var sprev; // previous source iterated value
	var dprev; // previous downstream iterated value
	var iter;
	var acc;
	var FLG;
	var fcn;
	var N;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	fcn = arguments[ arguments.length-1 ];
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a function. Value: `' + fcn + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isPositiveInteger( limit ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a positive integer. Value: `' + limit + '`.' );
		}
		N = limit;
	} else {
		N = 1;
	}
	acc = NaN; // Note: we leverage the fact that `NaN` is not equal to anything, including itself, to handle initial condition
	count = 0;
	i = -1;

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
		i += 1;
		if ( v.done ) {
			FLG = true;
			out = {};
			if ( hasOwnProp( v, 'value' ) && fcn( v.value, sprev, dprev, i, acc ) !== acc ) {
				out.value = v.value;
			}
			out.done = true;
			return out;
		}
		out = fcn( v.value, sprev, dprev, i, acc );
		if ( out === acc ) {
			sprev = v.value;
			count += 1;
			if ( count > N ) {
				// Find the next "unique" value...
				while ( out === acc ) {
					v = iterator.next();
					i += 1;
					if ( v.done ) {
						FLG = true;
						out = {};
						if ( hasOwnProp( v, 'value' ) && fcn( v.value, sprev, dprev, i, acc ) !== acc ) {
							out.value = v.value;
						}
						out.done = true;
						return out;
					}
					out = fcn( v.value, sprev, dprev, i, acc );
					sprev = v.value;
				}
				acc = out;
				count = 1;
			}
			dprev = sprev;
		} else {
			sprev = v.value;
			dprev = sprev;
			acc = out;
			count = 1;
		}
		return {
			'value': dprev,
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
		return iterDedupeBy( iterator[ iteratorSymbol ](), N, fcn );
	}
}


// EXPORTS //

module.exports = iterDedupeBy;
