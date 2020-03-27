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
* Returns an iterator which invokes a unary function accepting a single numeric argument for each iterated value.
*
* ## Notes
*
* -   When invoked, the input function is provided one argument:
*
*     -   `value`: iterated value
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param {Iterator} iterator - input iterator
* @param {Function} fcn - function to invoke
* @param {Options} [options] - options
* @param {*} [options.invalid=NaN] - return value when an input iterator yields a non-numeric value
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @throws {TypeError} second argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Iterator} iterator
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var sin = require( '@stdlib/math/base/special/sin' );
*
* var iter = iterMap( randu(), sin );
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
function iterMap( iterator, fcn, options ) {
	var opts;
	var iter;
	var err;
	var FLG;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator protocol-compliant object. Value: `' + iterator + '`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `' + fcn + '`.' );
	}
	opts = {
		'invalid': NaN
	};
	if ( arguments.length > 2 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator` and the provided iterator is iterable, make the iterator iterable:
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
				out.value = ( isNumber( v.value ) ) ? fcn( v.value ) : opts.invalid; // eslint-disable-line max-len
			}
			out.done = true;
			return out;
		}
		return {
			'value': ( isNumber( v.value ) ) ? fcn( v.value ) : opts.invalid,
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
		return iterMap( iterator[ iteratorSymbol ](), fcn, opts );
	}
}


// EXPORTS //

module.exports = iterMap;
