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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which performs element-wise multiplication of two or more iterators.
*
* ## Notes
*
* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param {Iterator} iter0 - first input iterator
* @param {...(Iterator|number)} iterator - subsequent iterators
* @throws {Error} must provide two or more iterators
* @throws {TypeError} must provide iterator protocol-compliant objects
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* var it1 = array2iterator( [ 1.0, 2.0 ] );
* var it2 = array2iterator( [ 3.0, 4.0 ] );
*
* var iter = iterMultiply( it1, it2 );
*
* var v = iter.next().value;
* // returns 3.0
*
* v = iter.next().value;
* // returns 8.0
*
* var bool = iter.next().done;
* // returns true
*/
function iterMultiply() {
	var iterators;
	var types;
	var niter;
	var iter;
	var FLG;
	var i;

	niter = arguments.length;
	if ( niter < 2 ) {
		throw new Error( 'insufficient input arguments. Must provide two or more iterators.' );
	}
	iterators = [];
	types = [];
	for ( i = 0; i < niter; i++ ) {
		iterators.push( arguments[ i ] );
		if ( isIteratorLike( arguments[ i ] ) ) {
			types.push( 1 );
		} else if ( isNumber( arguments[ i ] ) ) {
			types.push( 0 );
		} else {
			throw new TypeError( 'invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `' + i + '`. Value: `' + arguments[ i ] + '`.' );
		}
	}
	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator` and all provided iterators are iterable, make the iterator iterable:
	if ( iteratorSymbol ) {
		for ( i = 0; i < niter; i++ ) {
			if ( types[ i ] && !isFunction( iterators[ i ][ iteratorSymbol ] ) ) { // eslint-disable-line max-len
				FLG = true;
				break;
			}
		}
		if ( !FLG ) {
			setReadOnly( iter, iteratorSymbol, factory );
		}
	}
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
		var s;
		var v;
		var i;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		FLG = 0;
		s = 1.0;
		for ( i = 0; i < niter; i++ ) {
			if ( types[ i ] ) {
				v = iterators[ i ].next();
				if ( v.done ) {
					FLG += 1;
					if ( hasOwnProp( v, 'value' ) ) {
						if ( typeof v.value === 'number' ) {
							s *= v.value;
						} else {
							s = NaN;
						}
						continue;
					}
					return {
						'done': true
					};
				}
				if ( typeof v.value === 'number' ) {
					s *= v.value;
				} else {
					s = NaN;
				}
			} else {
				s *= iterators[ i ];
			}
		}
		return {
			'value': s,
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
			if ( types[ i ] ) {
				args.push( iterators[ i ][ iteratorSymbol ]() );
			} else {
				args.push( iterators[ i ] );
			}
		}
		return iterMultiply.apply( null, args );
	}
}


// EXPORTS //

module.exports = iterMultiply;
