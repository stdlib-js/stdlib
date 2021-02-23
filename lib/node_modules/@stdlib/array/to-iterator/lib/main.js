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
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which iterates over each element in an array-like object.
*
* @param {Collection} src - input value
* @param {Function} [mapFcn] - function to invoke for each iterated value
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} second argument must be a function
* @returns {Iterator} iterator
*
* @example
* var iter = array2iterator( [ 1, 2, 3, 4 ] );
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
* // ...
*/
function array2iterator( src ) {
	var thisArg;
	var iter;
	var FLG;
	var fcn;
	var i;
	if ( !isCollection( src ) ) {
		throw new TypeError( 'invalid argument. First argument must be an array-like object. Value: `' + src + '`.' );
	}
	if ( arguments.length > 1 ) {
		fcn = arguments[ 1 ];
		if ( !isFunction( fcn ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a function. Value: `' + fcn + '`.' );
		}
		thisArg = arguments[ 2 ];
	}
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
		i += 1;
		if ( FLG || i >= src.length ) {
			return {
				'done': true
			};
		}
		return {
			'value': fcn.call( thisArg, src[ i ], i, src ),
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
		i += 1;
		if ( FLG || i >= src.length ) {
			return {
				'done': true
			};
		}
		return {
			'value': src[ i ],
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
			return array2iterator( src, fcn, thisArg );
		}
		return array2iterator( src );
	}
}


// EXPORTS //

module.exports = array2iterator;
