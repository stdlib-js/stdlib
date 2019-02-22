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
var abs = require( '@stdlib/math/base/special/abs' );
var cospi = require( '@stdlib/math/base/special/cospi' );
var validate = require( './validate.js' );


// VARIABLES //

var A0 = 0.62;
var A1 = 0.48;
var A2 = 0.38;


// FUNCTIONS //

/**
* Evaluates a Bartlett-Hann window function.
*
* @private
* @param {integer} t - value at which to evaluate the function
* @param {integer} T - period
* @param {number} A - amplitude
* @returns {number} function value
*/
function bartlettHann( t, T, A ) {
	T -= 1;
	return A * ( A0 - (A1*abs( (t/T)-0.5) ) - (A2*cospi( (2.0/T)*t) ) );
}


// MAIN //

/**
* Returns an iterator which generates a Bartlett-Hann pulse waveform.
*
* @param {Options} [options] - function options
* @param {PositiveInteger} [options.period=100] - number of iterations before a waveform repeats
* @param {PositiveInteger} [options.duration=options.period] - pulse duration
* @param {PositiveNumber} [options.amplitude=1.0] - amplitude
* @param {integer} [options.offset=0] - phase offset (in units of iterations; zero-based)
* @param {NonNegativeInteger} [options.iter=1e308] - number of iterations
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} pulse duration must be less than the period
* @throws {RangeError} pulse duration must be greater than `2`
* @returns {Iterator} iterator
*
* @example
* var opts = {
*     'period': 10
* };
*
* var iter = iterBartlettHannPulse( opts );
*
* var v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* // ...
*/
function iterBartlettHannPulse( options ) {
	var opts;
	var iter;
	var FLG;
	var err;
	var t;
	var i;

	opts = {
		'duration': -1,
		'period': 100,
		'amplitude': 1.0,
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
		opts.duration = opts.period;
	}
	if ( opts.duration > opts.period ) {
		throw new RangeError( 'invalid option. `duration` option must be less than or equal to the period. Option: `' + opts.duration + '`.' );
	}
	if ( opts.duration <= 2 ) {
		throw new RangeError( 'invalid option. `duration` option must be greater than 2. Option: `' + opts.duration + '`.' );
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
			'value': ( t < opts.duration ) ? bartlettHann( t, opts.duration, opts.amplitude ) : 0.0,
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
		return iterBartlettHannPulse( opts );
	}
}


// EXPORTS //

module.exports = iterBartlettHannPulse;
