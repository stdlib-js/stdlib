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
var noop = require( '@stdlib/utils/noop' );


// MAIN //

/**
* Returns an iterator which skips the last value of a provided iterator.
*
* @param {Iterator} iterator - input iterator
* @param {Function} [clbk] - callback to invoke with the skipped value
* @param {*} [thisArg] - callback execution context
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be a function
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var iter = iterPop( array2iterator( [ 1, 2 ] ) );
*
* var v = iter.next().value;
* // returns 1
*
* var bool = iter.next().done;
* // returns true
*/
function iterPop( iterator, clbk, thisArg ) {
	var last;
	var iter;
	var FLG;
	var cb;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a function. Value: `' + clbk + '`.' );
		}
		cb = clbk;
	} else {
		cb = noop;
	}
	i = 0;

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
		var out;
		var v;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		v = iterator.next();
		if ( i === 0 ) {
			i += 1;
			if ( v.done ) {
				FLG = true;
				if ( hasOwnProp( v, 'value' ) ) {
					cb.call( thisArg, v.value );
				}
				return {
					'done': true
				};
			}
			last = v.value;
			return next();
		}
		if ( v.done ) {
			FLG = true;
			out = {};
			if ( hasOwnProp( v, 'value' ) ) {
				cb.call( thisArg, v.value );
				out.value = last;
				out.done = false;
			} else {
				cb.call( thisArg, last );
				out.done = true;
			}
			return out;
		}
		out = {
			'value': last,
			'done': false
		};
		last = v.value;
		return out;
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
		return iterPop( iterator[ iteratorSymbol ](), cb, thisArg );
	}
}


// EXPORTS //

module.exports = iterPop;
