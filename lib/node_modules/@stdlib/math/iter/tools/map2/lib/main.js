/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns an iterator which invokes a binary function accepting numeric arguments for each iterated value.
*
* ## Notes
*
* -   When invoked, the input function is provided two arguments:
*
*     -   `x`: iterated value from first input iterator
*     -   `y`: iterated value from second input iterator
*
* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
*
* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
*
* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
*
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param {Iterator} iter0 - first input iterator
* @param {Iterator} iter1 - second input iterator
* @param {Function} fcn - function to invoke
* @param {Options} [options] - options
* @param {*} [options.invalid=NaN] - return value when an input iterator yields a non-numeric value
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be an iterator protocol-compliant object
* @throws {TypeError} third argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Iterator} iterator
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var copysign = require( '@stdlib/math/base/special/copysign' );
*
* var iter = iterMap2( randu(), randu(), copysign );
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
function iterMap2( iter0, iter1, fcn, options ) {
	var iterators;
	var values;
	var types;
	var niter;
	var iter;
	var opts;
	var FLG;
	var err;
	var i;

	niter = 2;
	values = [ 0.0, 0.0 ];

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
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a function. Value: `' + fcn + '`.' );
	}
	opts = {
		'invalid': NaN
	};
	if ( arguments.length > 3 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
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
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var err;
		var v;
		var i;
		if ( FLG ) {
			return {
				'done': true
			};
		}
		FLG = 0;
		err = 0;
		for ( i = 0; i < niter; i++ ) {
			if ( types[ i ] ) {
				v = iterators[ i ].next();
				if ( v.done ) {
					FLG += 1;
					if ( hasOwnProp( v, 'value' ) ) {
						if ( typeof v.value === 'number' ) {
							values[ i ] = v.value;
						} else {
							err = 1;
						}
						continue;
					}
					return {
						'done': true
					};
				}
				if ( typeof v.value === 'number' ) {
					values[ i ] = v.value;
				} else {
					err = 1;
				}
			} else {
				values[ i ] = iterators[ i ];
			}
		}
		if ( err ) {
			return {
				'value': opts.invalid,
				'done': false
			};
		}
		return {
			'value': fcn( values[ 0 ], values[ 1 ] ),
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
		args.push( fcn, opts );
		return iterMap2.apply( null, args );
	}
}


// EXPORTS //

module.exports = iterMap2;
