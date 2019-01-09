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
* Returns an iterator which iterates over the values of two or more iterators.
*
* @param {Iterator} iter0 - first input iterator
* @param {...Iterator} iterator - subsequent iterators
* @throws {Error} must provide two or more iterators
* @throws {TypeError} must provide iterator protocol-compliant objects
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var it1 = array2iterator( [ 1, 2 ] );
* var it2 = array2iterator( [ 3, 4 ] );
*
* var iter = iterConcat( it1, it2 );
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
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/
function iterConcat() {
	var iterators;
	var iterator;
	var niter;
	var iter;
	var FLG;
	var i;

	niter = arguments.length;
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
	iterator = iterators[ 0 ];
	FLG = false;
	i = 0;
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var v;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		// Note: if provided non-empty iterators, this loop executes at most twice...
		while ( true ) {
			v = iterator.next();
			if ( v.done ) {
				i += 1;
				if ( i === niter ) {
					FLG = true;
					if ( hasOwnProp( v, 'value' ) ) {
						return {
							'value': v.value,
							'done': true
						};
					}
					return {
						'done': true
					};
				}
				iterator = iterators[ i ];
				if ( hasOwnProp( v, 'value' ) ) {
					break;
				}
			} else {
				break;
			}
		}
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
		var args;
		var i;

		args = [];
		for ( i = 0; i < niter; i++ ) {
			args.push( iterators[ i ][ iteratorSymbol ]() );
		}
		return iterConcat.apply( null, args );
	}
}


// EXPORTS //

module.exports = iterConcat;
