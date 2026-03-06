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
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var validate = require( './validate.js' );


// VARIABLES //

var L0 = 2;
var L1 = 1;


// MAIN //

/**
* Returns an iterator which generates a Lucas sequence.
*
* ## Notes
*
* -   The returned iterator can only generate the first `77` Lucas numbers, as larger Lucas numbers cannot be safely represented in double-precision floating-point format.
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param {Options} [options] - function options
* @param {NonNegativeInteger} [options.iter=77] - number of iterations
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} `iter` option must be less than or equal to `77`
* @returns {Iterator} iterator
*
* @example
* var iter = iterLucasSeq();
*
* var v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 3
*
* // ...
*/
function iterLucasSeq( options ) {
	var opts;
	var iter;
	var FLG;
	var err;
	var l1;
	var l2;
	var l;
	var i;

	opts = {
		'iter': 77
	};
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	l1 = L0;
	l2 = L1;
	l = 0;
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
		if ( i === 1 ) {
			l = L0;
		} else if ( i === 2 ) {
			l = L1;
		} else {
			l = l1 + l2;
			l1 = l2;
			l2 = l;
		}
		return {
			'value': l,
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
		return iterLucasSeq( opts );
	}
}


// EXPORTS //

module.exports = iterLucasSeq;
