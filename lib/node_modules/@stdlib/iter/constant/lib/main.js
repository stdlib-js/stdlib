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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var iteratorSymbol = require( '@stdlib/symbol/iterator' );


// MAIN //

/**
* Returns an iterator which always returns the same value.
*
* @param {*} value - value to return
* @param {Options} [options] - function options
* @param {NonNegativeInteger} [options.iter=1e308] - number of iterations
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Iterator} iterator
*
* @example
* var iter = iterConstant( 3.14 );
*
* var v = iter.next().value;
* // returns 3.14
*
* v = iter.next().value;
* // returns 3.14
*
* v = iter.next().value;
* // returns 3.14
*
* // ...
*/
function iterConstant( value ) {
	var options;
	var opts;
	var iter;
	var FLG;
	var i;

	opts = {
		'iter': 1e308
	};
	if ( arguments.length > 1 ) {
		options = arguments[ 1 ];
		if ( !isPlainObject( options ) ) {
			throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'iter' ) ) {
			opts.iter = options.iter;
			if ( !isNonNegativeInteger( options.iter ) ) {
				throw new TypeError( 'invalid option. `iter` option must be a nonnegative integer. Option: `' + options.iter + '`.' );
			}
		}
	}
	i = 0;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
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
	function next() {
		i += 1;
		if ( FLG || i > opts.iter ) {
			return {
				'done': true
			};
		}
		return {
			'value': value,
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
				'value': value, // Note: can be different than the iterator constant
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
		return iterConstant( value, opts );
	}
}


// EXPORTS //

module.exports = iterConstant;
