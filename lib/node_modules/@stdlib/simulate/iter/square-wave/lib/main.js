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
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns an iterator which generates a square wave.
*
* @param {Options} [options] - function options
* @param {PositiveInteger} [options.period=10] - number of iterations before a square wave repeats (this must be a positive even integer)
* @param {number} [options.min=-1.0] - minimum amplitude
* @param {number} [options.max=1.0] - maximum amplitude
* @param {integer} [options.offset=0] - phase offset (in units of iterations; zero-based)
* @param {NonNegativeInteger} [options.iter=1e308] - number of iterations
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Iterator} iterator
*
* @example
* var opts = {
*     'period': 4
* };
*
* var iter = iterSquareWave( opts );
*
* var v = iter.next().value;
* // returns 1.0
*
* v = iter.next().value;
* // returns 1.0
*
* v = iter.next().value;
* // returns -1.0
*
* // ...
*/
function iterSquareWave( options ) {
	var opts;
	var iter;
	var FLG;
	var err;
	var t;
	var h;
	var i;

	opts = {
		'period': 10,
		'min': -1.0,
		'max': 1.0,
		'offset': 0,
		'iter': 1e308
	};
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	t = ( opts.period-opts.offset ) % opts.period;
	if ( t < 0 ) {
		t += opts.period;
	}
	t -= 1;
	h = opts.period / 2;
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
		t += 1;
		return {
			'value': ( (t%opts.period) < h ) ? opts.max : opts.min,
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
		return iterSquareWave( opts );
	}
}


// EXPORTS //

module.exports = iterSquareWave;
