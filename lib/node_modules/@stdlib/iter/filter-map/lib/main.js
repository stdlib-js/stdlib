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


// MAIN //

/**
* Returns an iterator which both filters and maps a provided iterator's values.
*
* ## Notes
*
* -   If a callback function returns `undefined`, the returned iterator invokes the callback for the next iterated value; otherwise, the iterator returns the callback's return value.
*
* @param {Iterator} iterator - input iterator
* @param {Function} fcn - callback which both filters and maps
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be a function
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function fcn( v ) {
*     if ( v > 2 ) {
*         return v * 10;
*     }
* }
*
* var src = array2iterator( [ 1, 3, 2, 4 ] );
* var iter = iterFilterMap( src, fcn );
*
* var v = iter.next().value;
* // returns 30
*
* v = iter.next().value;
* // returns 40
*
* var bool = iter.next().done;
* // returns true
*/
function iterFilterMap( iterator, fcn, thisArg ) {
	var iter;
	var FLG;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `' + fcn + '`.' );
	}
	i = -1;

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
		while ( true ) {
			v = iterator.next();
			i += 1;
			if ( v.done ) {
				FLG = true;
				out = {};
				if ( hasOwnProp( v, 'value' ) ) {
					v = fcn.call( thisArg, v.value, i );
					if ( v !== void 0 ) {
						out.value = v;
					}
				}
				out.done = true;
				return out;
			}
			v = fcn.call( thisArg, v.value, i );
			if ( v !== void 0 ) {
				return {
					'value': v,
					'done': false
				};
			}
		}
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
		return iterFilterMap( iterator[ iteratorSymbol ](), fcn, thisArg );
	}
}


// EXPORTS //

module.exports = iterFilterMap;
