/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns an iterator which invokes a function for each iterated value before returning the iterated value until either a predicate function returns `false` or the iterator has iterated over all values.
*
* @param {Iterator} iterator - input iterator
* @param {Function} predicate - function which indicates whether to continue iterating
* @param {Function} fcn - function to invoke
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be a function
* @throws {TypeError} third argument must be a function
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterWhileEach = require( '@stdlib/iter/while-each' );
*
* function predicate( v ) {
*     return v < 3;
* }
*
* function assert( v ) {
*     if ( v !== v ) {
*         throw new Error( 'should not be NaN' );
*     }
* }
*
* var it = iterWhileEach( array2iterator( [ 1, 2, 3, 4 ] ), predicate, assert );
* // returns {}
*
* var r = it.next().value;
* // returns 1
*
* r = it.next().value;
* // returns 2
*
* r = it.next().value;
* // undefined
*
* // ...
*/
function iterWhileEach( iterator, predicate, fcn, thisArg ) {
	var iter;
	var FLG;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.', iterator ) );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', predicate ) );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', fcn ) );
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
			return v;
		}
		v = v.value;
		if ( predicate( v, i ) === false ) {
			FLG = true;
			return {
				'done': true
			};
		}
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
		return iterWhileEach( iterator[ iteratorSymbol ](), predicate, fcn, thisArg ); // eslint-disable-line max-len
	}
}


// EXPORTS //

module.exports = iterWhileEach;
