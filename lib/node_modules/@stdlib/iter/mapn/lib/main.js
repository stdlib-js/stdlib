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
* Returns an iterator which transforms iterated values from two or more iterators by applying the iterated values as arguments to a provided function.
*
* @param {Iterator} iter0 - first input iterator
* @param {...Iterator} iterator - subsequent iterators
* @param {Function} fcn - function to invoke
* @param {*} [thisArg] - execution context
* @throws {Error} must provide two or more iterators
* @throws {TypeError} must provide iterator protocol-compliant objects
* @throws {TypeError} callback argument must be a function
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function transform( x, y ) {
*     return x + y;
* }
*
* var it1 = array2iterator( [ 1.0, 2.0 ] );
* var it2 = array2iterator( [ 3.0, 4.0 ] );
*
* var iter = iterMapN( it1, it2, transform );
*
* var v = iter.next().value;
* // returns 4.0
*
* v = iter.next().value;
* // returns 6.0
*
* var bool = iter.next().done;
* // returns true
*/
function iterMapN() {
	var iterators;
	var thisArg;
	var niter;
	var clbk;
	var iter;
	var FLG;
	var idx;
	var i;

	niter = arguments.length;
	if ( !isFunction( arguments[ niter-1 ] ) ) {
		niter -= 1;
		thisArg = arguments[ niter ];
	}
	niter -= 1;
	clbk = arguments[ niter ];
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid argument. Callback argument must be a function. Value: `' + clbk + '`.' );
	}
	if ( niter < 2 ) {
		throw new Error( 'insufficient input arguments. Must provide two or more iterators.' );
	}
	iterators = [];
	for ( i = 0; i < niter; i++ ) {
		if ( !isIteratorLike( arguments[ i ] ) ) {
			throw new TypeError( 'invalid argument. Must provide an iterator protocol-compliant object. Argument: `' + i + '`. Value: `' + arguments[ i ] + '`.' );
		}
		iterators.push( arguments[ i ] );
	}
	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator` and all provided iterators are iterable, make the iterator iterable:
	if ( iteratorSymbol ) {
		for ( i = 0; i < niter; i++ ) {
			if ( !isFunction( iterators[ i ][ iteratorSymbol ] ) ) {
				FLG = true;
				break;
			}
		}
		if ( !FLG ) {
			setReadOnly( iter, iteratorSymbol, factory );
		}
	}
	idx = -1;
	FLG = 0;
	i = 0;
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var args;
		var v;
		var i;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		args = [];
		idx += 1;
		FLG = 0;
		for ( i = 0; i < niter; i++ ) {
			v = iterators[ i ].next();
			if ( v.done ) {
				FLG += 1;
				if ( hasOwnProp( v, 'value' ) ) {
					args.push( v.value );
					continue;
				}
				return {
					'done': true
				};
			}
			args.push( v.value );
		}
		args.push( idx );
		return {
			'value': clbk.apply( thisArg, args ),
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
		FLG = 1;
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
		var args;
		var i;

		args = [];
		for ( i = 0; i < niter; i++ ) {
			args.push( iterators[ i ][ iteratorSymbol ]() );
		}
		args.push( clbk );
		args.push( thisArg );
		return iterMapN.apply( null, args );
	}
}


// EXPORTS //

module.exports = iterMapN;
