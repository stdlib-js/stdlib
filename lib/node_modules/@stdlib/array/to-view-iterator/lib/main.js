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
var isCollection = require( '@stdlib/assert/is-collection' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which iterates over each element in an array-like object view.
*
* @param {Collection} src - input value
* @param {integer} [begin=0] - starting index (inclusive)
* @param {integer} [end=src.length] - ending index (non-inclusive)
* @param {Function} [mapFcn] - function to invoke for each iterated value
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} second argument must be either an integer (starting index) or a function
* @throws {TypeError} third argument must be either an integer (ending index) or a function
* @throws {TypeError} fourth argument must be a function
* @returns {Iterator} iterator
*
* @example
* var iter = arrayview2iterator( [ 1, 2, 3, 4 ], 1, 3 );
*
* var v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* var bool = iter.next().done;
* // returns true
*/
function arrayview2iterator( src ) {
	var thisArg;
	var begin;
	var nargs;
	var iter;
	var FLG;
	var fcn;
	var end;
	var i;
	if ( !isCollection( src ) ) {
		throw new TypeError( 'invalid argument. First argument must be an array-like object. Value: `' + src + '`.' );
	}
	nargs = arguments.length;
	if ( nargs === 1 ) {
		begin = 0;
		end = src.length;
	} else if ( nargs === 2 ) {
		if ( isFunction( arguments[ 1 ] ) ) {
			begin = 0;
			fcn = arguments[ 1 ];
		} else {
			begin = arguments[ 1 ];
		}
		end = src.length;
	} else if ( nargs === 3 ) {
		if ( isFunction( arguments[ 1 ] ) ) {
			begin = 0;
			end = src.length;
			fcn = arguments[ 1 ];
			thisArg = arguments[ 2 ];
		} else if ( isFunction( arguments[ 2 ] ) ) {
			begin = arguments[ 1 ];
			end = src.length;
			fcn = arguments[ 2 ];
		} else {
			begin = arguments[ 1 ];
			end = arguments[ 2 ];
		}
	} else { // nargs >= 4
		begin = arguments[ 1 ];
		end = arguments[ 2 ];
		fcn = arguments[ 3 ];
		if ( !isFunction( fcn ) ) {
			throw new TypeError( 'invalid argument. Fourth argument must be a function. Value: `' + fcn + '`.' );
		}
		thisArg = arguments[ 4 ];
	}
	if ( !isInteger( begin ) ) {
		throw new TypeError( 'invalid argument. Second argument must be either an integer (starting index) or a callback function. Value: `' + begin + '`.' );
	}
	if ( !isInteger( end ) ) {
		throw new TypeError( 'invalid argument. Third argument must be either an integer (ending index) or a callback function. Value: `' + end + '`.' );
	}
	if ( end < 0 ) {
		end = src.length + end;
		if ( end < 0 ) {
			end = 0;
		}
	} else if ( end > src.length ) {
		end = src.length;
	}
	if ( begin < 0 ) {
		begin = src.length + begin;
		if ( begin < 0 ) {
			begin = 0;
		}
	}
	i = begin - 1;

	// Create an iterator protocol-compliant object:
	iter = {};
	if ( fcn ) {
		setReadOnly( iter, 'next', next1 );
	} else {
		setReadOnly( iter, 'next', next2 );
	}
	setReadOnly( iter, 'return', finish );

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
		if ( FLG || i >= end ) {
			return {
				'done': true
			};
		}
		return {
			'value': fcn.call( thisArg, src[ i ], i, i-begin, src ),
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
		if ( FLG || i >= end ) {
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
	function finish( value ) {
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
			return arrayview2iterator( src, begin, end, fcn, thisArg );
		}
		return arrayview2iterator( src, begin, end );
	}
}


// EXPORTS //

module.exports = arrayview2iterator;
