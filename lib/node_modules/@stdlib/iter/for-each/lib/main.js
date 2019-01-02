/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Returns an iterator which invokes a function for each iterated value before returning the iterated value.
*
* @param {Iterator} iterator - input iterator
* @param {Function} fcn - function to invoke
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be a function
* @returns {Iterator} iterator
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var isnan = require( '@stdlib/math/base/assert/is-nan' );
*
* function assert( v ) {
*     if ( isnan( v ) ) {
*         throw new Error( 'should not be NaN' );
*     }
* }
*
* var iter = iterForEach( randu(), assert );
*
* var r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/
function iterForEach( iterator, fcn, thisArg ) {
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
		i += 1;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		v = iterator.next();
		if ( v.done ) {
			FLG = true;
			out = {};
			if ( hasOwnProp( v, 'value' ) ) {
				v = v.value;
				fcn.call( thisArg, v, i );
				out.value = v;
			}
			out.done = true;
			return out;
		}
		v = v.value;
		fcn.call( thisArg, v, i );
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
		return iterForEach( iterator[ iteratorSymbol ](), fcn, thisArg );
	}
}


// EXPORTS //

module.exports = iterForEach;
