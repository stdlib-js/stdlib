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
var isCollection = require( '@stdlib/assert/is-collection' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which iterates over elements in an array-like object according to specified stride parameters.
*
* @param {NonNegativeInteger} N - number of values to iterate
* @param {Collection} src - input value
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @param {Function} [mapFcn] - function to invoke for each iterated value
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be an array-like object
* @throws {TypeError} third argument must be an integer
* @throws {TypeError} fourth argument must be a nonnegative integer
* @throws {TypeError} fifth argument must be a function
* @returns {Iterator} iterator
*
* @example
* var values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
*
* var N = 4;
* var stride = -2;
* var offset = 6;
*
* var iter = stridedarray2iterator( N, values, stride, offset );
*
* var v = iter.next().value;
* // returns 7
*
* v = iter.next().value;
* // returns 5
*
* v = iter.next().value;
* // returns 3
*
* // ...
*/
function stridedarray2iterator( N, src, stride, offset ) {
	var thisArg;
	var iter;
	var FLG;
	var fcn;
	var idx;
	var i;
	if ( !isNonNegativeInteger( N ) ) {
		throw new TypeError( 'invalid argument. First argument must be a nonnegative integer. Value: `' + N + '`.' );
	}
	if ( !isCollection( src ) ) {
		throw new TypeError( 'invalid argument. Second argument must be an array-like object. Value: `' + src + '`.' );
	}
	if ( !isInteger( stride ) ) {
		throw new TypeError( 'invalid argument. Third argument must be an integer. Value: `' + stride + '`.' );
	}
	if ( !isNonNegativeInteger( offset ) ) {
		throw new TypeError( 'invalid argument. Fourth argument must be a nonnegative integer. Value: `' + offset + '`.' );
	}
	if ( arguments.length > 4 ) {
		fcn = arguments[ 4 ];
		if ( !isFunction( fcn ) ) {
			throw new TypeError( 'invalid argument. Fifth argument must be a function. Value: `' + fcn + '`.' );
		}
		thisArg = arguments[ 5 ];
	}
	idx = offset;
	i = -1;

	// Create an iterator protocol-compliant object:
	iter = {};
	if ( fcn ) {
		setReadOnly( iter, 'next', next1 );
	} else {
		setReadOnly( iter, 'next', next2 );
	}
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next1() {
		var v;
		i += 1;
		if ( FLG || i >= N ) {
			return {
				'done': true
			};
		}
		v = fcn.call( thisArg, src[ idx ], idx, i, src );
		idx += stride;
		return {
			'value': v,
			'done': false
		};
	}

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next2() {
		var v;
		i += 1;
		if ( FLG || i >= N ) {
			return {
				'done': true
			};
		}
		v = src[ idx ];
		idx += stride;
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
		if ( fcn ) {
			return stridedarray2iterator( N, src, stride, offset, fcn, thisArg ); // eslint-disable-line max-len
		}
		return stridedarray2iterator( N, src, stride, offset );
	}
}


// EXPORTS //

module.exports = stridedarray2iterator;
