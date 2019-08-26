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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// VARIABLES //

var DEFAULT_OFFSET = 0;
var DEFAULT_EAGER = false;


// MAIN //

/**
* Returns an iterator which steps according to a provided callback function.
*
* @param {Iterator} iterator - input iterator
* @param {Function} fcn - stride function
* @param {NonNegativeInteger} [offset=0] - offset
* @param {boolean} [eager=false] - boolean indicating whether to eagerly advance the input iterator when provided a non-zero offset
* @param {*} [thisArg] - stride function execution context
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be a function
* @throws {TypeError} third argument must be a nonnegative integer
* @throws {TypeError} fourth argument must be a boolean
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var arr = array2iterator( [ 0, 1, 2, 3, 4, 5, 6, 7 ] );
*
* function stride( v, i ) {
*     return (i % 10)+1;
* }
*
* var iter = iterStridedBy( arr, stride );
*
* var r = iter.next().value;
* // returns 0
*
* r = iter.next().value;
* // returns 1
*
* r = iter.next().value;
* // returns 3
*
* // ...
*/
function iterStridedBy( iterator, fcn, offset, eager, thisArg ) {
	var stride;
	var iter;
	var bool;
	var FLG;
	var idx;
	var ctx;
	var o;
	var v;
	var i;
	var s;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `' + fcn + '`.' );
	}
	if ( arguments.length === 3 ) {
		if ( isNonNegativeInteger( offset ) ) {
			idx = offset;
		} else {
			idx = DEFAULT_OFFSET;
			ctx = offset;
		}
		bool = DEFAULT_EAGER;
	} else if ( arguments.length === 4 ) {
		if ( !isNonNegativeInteger( offset ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a nonnegative integer. Value: `' + offset + '`.' );
		}
		idx = offset;
		if ( isBoolean( eager ) ) {
			bool = eager;
		} else {
			bool = DEFAULT_EAGER;
			ctx = eager;
		}
	} else if ( arguments.length > 4 ) {
		if ( !isNonNegativeInteger( offset ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a nonnegative integer. Value: `' + offset + '`.' );
		}
		idx = offset;
		if ( !isBoolean( eager ) ) {
			throw new TypeError( 'invalid argument. Fourth argument must be a boolean. Value: `' + eager + '`.' );
		}
		bool = eager;
		ctx = thisArg;
	} else {
		idx = DEFAULT_OFFSET;
		bool = DEFAULT_EAGER;
	}
	if ( bool ) {
		for ( i = 0; i < idx; i++ ) {
			v = iterator.next();
			if ( v.done ) {
				FLG = true;
				break;
			}
		}
		// NOTE: if we've successfully advanced the input iterator, `i` is currently equal to `idx` (i.e., the offset)
		i -= 1;
	} else {
		i = -1;
	}
	s = -1;
	stride = 0;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator` and the provided iterator is iterable, make the iterator iterable:
	if ( iteratorSymbol && isFunction( iterator[ iteratorSymbol ] ) ) {
		o = idx;
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @throws {TypeError} callback function must return a positive integer
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
		i += 1;
		while ( i < idx ) {
			v = iterator.next();
			if ( v.done ) {
				FLG = true;
				return {
					'done': true
				};
			}
			i += 1;
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
		s += 1;
		stride = fcn.call( ctx, v.value, i, s, stride );
		if ( !isPositiveInteger( stride ) ) {
			throw new TypeError( 'invalid return value. Callback function must return a positive integer. Value: `' + stride + '`.' );
		}
		idx += stride;
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
		return iterStridedBy( iterator[ iteratorSymbol ](), fcn, o, bool, ctx );
	}
}


// EXPORTS //

module.exports = iterStridedBy;
