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
var floor = require( '@stdlib/math/base/special/floor' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns an iterator which generates a pulse waveform.
*
* @param {Options} [options] - function options
* @param {PositiveInteger} [options.period=10] - number of iterations before a waveform repeats
* @param {PositiveInteger} [options.duration=floor(options.period/2)] - number of consecutive iterations of maximum amplitude during one period
* @param {number} [options.min=0.0] - minimum amplitude
* @param {number} [options.max=1.0] - maximum amplitude
* @param {integer} [options.offset=0] - phase offset (in units of iterations; zero-based)
* @param {NonNegativeInteger} [options.iter=1e308] - number of iterations
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} pulse duration must be less than the period
* @returns {Iterator} iterator
*
* @example
* var opts = {
*     'period': 4
* };
*
* var iter = iterPulse( opts );
*
* var v = iter.next().value;
* // returns 1.0
*
* v = iter.next().value;
* // returns 1.0
*
* v = iter.next().value;
* // returns 0.0
*
* // ...
*/
function iterPulse( options ) {
	var opts;
	var iter;
	var FLG;
	var err;
	var t;
	var i;

	opts = {
		'duration': -1,
		'period': 10,
		'min': 0.0,
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
	if ( opts.duration === -1 ) {
		opts.duration = floor( opts.period/2 );
	}
	if ( opts.duration >= opts.period ) {
		throw new RangeError( 'invalid option. `duration` option must be less than the period. Option: `' + opts.duration + '`.' );
	}
	t = ( opts.period-opts.offset ) % opts.period;
	if ( t < 0 ) {
		t += opts.period;
	}
	t -= 1;
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
		t = (t+1) % opts.period;
		return {
			'value': ( t < opts.duration ) ? opts.max : opts.min,
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
		return iterPulse( opts );
	}
}


// EXPORTS //

module.exports = iterPulse;
