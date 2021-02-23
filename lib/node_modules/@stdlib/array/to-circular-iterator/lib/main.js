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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which repeatedly iterates over each element in an array-like object.
*
* @param {Collection} src - input value
* @param {Options} [options] - function options
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @param {integer} [options.dir=1] - iteration direction
* @param {Function} [mapFcn] - function to invoke for each iterated value
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
* @returns {Iterator} iterator
*
* @example
* var iter = circarray2iterator( [ 1, 2, 3, 4 ] );
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
function circarray2iterator( src ) {
	var thisArg;
	var options;
	var count;
	var opts;
	var iter;
	var FLG;
	var fcn;
	var i;
	if ( !isCollection( src ) ) {
		throw new TypeError( 'invalid argument. First argument must be an array-like object. Value: `' + src + '`.' );
	}
	opts = {
		'iter': 1e308, // ~infinity
		'dir': 1       // left to right iteration
	};
	if ( arguments.length > 1 ) {
		if ( isObject( arguments[ 1 ] ) ) {
			options = arguments[ 1 ];
			if ( arguments.length > 2 ) {
				fcn = arguments[ 2 ];
				if ( !isFunction( fcn ) ) {
					throw new TypeError( 'invalid argument. Callback argument must be a function. Value: `' + fcn + '`.' );
				}
				thisArg = arguments[ 3 ];
			}
			if ( hasOwnProp( options, 'iter' ) ) {
				opts.iter = options.iter;
				if ( !isNonNegativeInteger( options.iter ) ) {
					throw new TypeError( 'invalid option. `iter` option must be a nonnegative integer. Option: `' + options.iter + '`.' );
				}
			}
			if ( hasOwnProp( options, 'dir' ) ) {
				opts.dir = options.dir;
				if ( options.dir !== 1 && options.dir !== -1 ) {
					throw new TypeError( 'invalid option. `dir` option must be either `1` or `-1`. Option: `' + options.dir + '`.' );
				}
			}
		} else {
			fcn = arguments[ 1 ];
			if ( !isFunction( fcn ) ) {
				throw new TypeError( 'invalid argument. Second argument must be either a function or an options object. Value: `' + fcn + '`.' );
			}
			thisArg = arguments[ 2 ];
		}
	}
	count = 0;

	// Create an iterator protocol-compliant object:
	iter = {};
	if ( fcn ) {
		if ( opts.dir === 1 ) {
			i = -1;
			setReadOnly( iter, 'next', next1a );
		} else {
			i = src.length;
			setReadOnly( iter, 'next', next1b );
		}
	} else if ( opts.dir === 1 ) {
		i = -1;
		setReadOnly( iter, 'next', next2a );
	} else {
		i = src.length;
		setReadOnly( iter, 'next', next2b );
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
	function next1a() {
		i = (i+1) % src.length;
		count += 1;
		if ( FLG || count > opts.iter || src.length === 0 ) {
			return {
				'done': true
			};
		}
		return {
			'value': fcn.call( thisArg, src[ i ], i, count, src ),
			'done': false
		};
	}

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next1b() {
		i -= 1;
		if ( i < 0 ) {
			i += src.length;
		}
		count += 1;
		if ( FLG || count > opts.iter || src.length === 0 ) {
			return {
				'done': true
			};
		}
		return {
			'value': fcn.call( thisArg, src[ i ], i, count, src ),
			'done': false
		};
	}

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next2a() {
		i = (i+1) % src.length;
		count += 1;
		if ( FLG || count > opts.iter || src.length === 0 ) {
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
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next2b() {
		i -= 1;
		if ( i < 0 ) {
			i += src.length;
		}
		count += 1;
		if ( FLG || count > opts.iter || src.length === 0 ) {
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
			return circarray2iterator( src, opts, fcn, thisArg );
		}
		return circarray2iterator( src, opts );
	}
}


// EXPORTS //

module.exports = circarray2iterator;
